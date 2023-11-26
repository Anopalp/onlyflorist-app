/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "../dashboardStyles.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import NavbarKurir from "../NavbarKurir";
import supabase from "../../config/supabaseClient";

function getWaktu() {
  const time = new Date().getHours();
  if (time >= 18) {
    return "malam";
  } else if (time >= 14) {
    return "sore";
  } else if (time >= 11) {
    return "siang";
  } else {
    return "pagi";
  }
}

function DashboardKurir() {
  const [fetchErrorPengiriman, setFetchErrorPengiriman] = useState(null);
  const [dataPengiriman, setDataPengiriman] = useState(null);
  const [namaKurir, setNamaKurir] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPengiriman, setSelectedPengiriman] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: {
          session: {
            user: { email },
          },
        },
      } = await supabase.auth.getSession();

      const username = email.split("@")[0];

      const { data } = await supabase
        .from("dataKurir")
        .select("nama_lengkap")
        .eq("username", username);

      setNamaKurir(data[0].nama_lengkap);
      console.log(username);

      const fetchDataPengiriman = async () => {
        const { data, error } = await supabase
          .from("dataPengiriman")
          .select()
          .eq("kurir", username);

        if (error) {
          setFetchErrorPengiriman("Could not fetch dataPengiriman");
          setDataPengiriman(null);
          console.log(error);
        }
        if (data) {
          setDataPengiriman(data);
          setFetchErrorPengiriman(null);
        }

        console.log(data);
      };

      fetchDataPengiriman();
    };

    fetchData();
  }, []);
  const handleShowModal = (pengiriman) => {
    setSelectedPengiriman(pengiriman);
    setShowModal(true);
  };

  return (
    <div className="page dashboard">
      {fetchErrorPengiriman && <p>{fetchErrorPengiriman}</p>}
      {dataPengiriman && (
        <div>
          <div>
            <NavbarKurir />
            <h3 className="text-center p-3 mt-4" style={{ fontSize: 30, fontWeight: "bold", color: "#29335c" }}>
              Halo {namaKurir}, selamat {getWaktu()}!
            </h3>
            <div className="card-container w-75 mx-auto my-4">
              <div>
                <h3
                  className="my-2"
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "aliceblue",
                  }}
                >
                  {dataPengiriman.length ? 'Pengiriman teratas' : 'Tidak ada pengiriman'}
                </h3>
              </div>

              <div className="row card-row">
                <CardPengirimanKurir
                  dataPengiriman={dataPengiriman}
                  handleShowModal={handleShowModal}
                />
                <div className="buttons-container mt-3">
                  <div>
                    {dataPengiriman.length ? <Link to={"/daftar-pengiriman-kurir"}>
                      <Button variant="outline-light" className="rounded-5">
                        See More
                      </Button>
                    </Link> : null}
                  </div>
                  {/* <a href='/daftar-pengiriman-kurir' class="btn btn-primary">see more</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Trigger */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "Bold", color:"#29335c" }}>Detail Pengiriman</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render details of selectedPengiriman */}

          {selectedPengiriman && (
            <div>
              <div className="d-flex align-items-center mb-4">
                <img style={{ width:"120px", borderRadius:"50%" }} src={selectedPengiriman.image_url} alt="profile picture"></img>
                <h3 style={{ fontSize:30, fontWeight:"bold", color:"#29335c", marginLeft:"10%" }}>{selectedPengiriman.jenis_bunga}</h3>
              </div>
              <div className='mb-3'>
                <strong style={{ color:"#29335c" }}>ID Pengiriman</strong>
                <output className='form-control' style={{ color:"#29335c" }}>{selectedPengiriman.id}</output>
              </div>
              <div className='mb-3'>
                <strong style={{ color:"#29335c" }}>Alamat Pengiriman</strong>
                <output className='form-control' style={{ color:"#29335c" }}>{selectedPengiriman.alamat_pengiriman}</output>
              </div>
              {/* <div className='mb-3'>
                <strong style={{ color:"#29335c" }}>Jenis Bunga</strong>
                <output className='form-control' style={{ color:"#29335c" }}>{selectedPengiriman.jenis_bunga}</output>
              </div> */}
              <div className='mb-3'>
                <strong style={{ color:"#29335c" }}>No. Telp Pelanggan</strong>
                <output className='form-control' style={{ color:"#29335c" }}>
                  {selectedPengiriman.nomor_telp_pelanggan}
                </output>
              </div>
              <div className='mb-3'>
                <strong style={{ color:"#29335c" }}>Catatan</strong>
                <output className='form-control' style={{ color:"#29335c" }}>
                  {selectedPengiriman.catatan ? selectedPengiriman.catatan : '-'}
                </output>
              </div>
              <div className='mb-3'>
                <strong style={{ color:"#29335c" }}>Kurir</strong>
                <output className='form-control' style={{ color:"#29335c" }}>
                  {selectedPengiriman.kurir}
                </output>
              </div>
              {selectedPengiriman.laporanMasalah != null ? (
                <div className='mb-3'>
                  <strong style={{ color:"#29335c" }}>Laporan Masalah</strong>
                  <output className='form-control' style={{ color:"#29335c" }}>{selectedPengiriman.laporan_masalah}</output>
                </div>
              ) : null}
              <div className='mb-4'>
                <strong style={{ color:"#29335c" }}>Status Pengiriman</strong>
                <output className='form-control' style={{ color:"#29335c" }}>{selectedPengiriman.status_pengiriman}</output>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          {/* Add additional buttons if needed */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function CardPengirimanKurir(props) {
  const dataPengiriman = Array.isArray(props.dataPengiriman)
    ? props.dataPengiriman
    : [];

  if (dataPengiriman.length === 0) {
    return (
      <div>
        
      </div>
    );
  } else if (dataPengiriman.length <= 3) {
    return (
      <div>
        <div className="card-row" style={{ display: "flex" }}>
          {dataPengiriman.map((pengiriman) => (
            <Card
              key={pengiriman.id}
              className="text-center mx-auto my-auto"
              style={{ width: "260px" }}
            >
              <Card.Img variant="top" src={pengiriman.image_url}></Card.Img>
              <Card.Header>{pengiriman.jenis_bunga}</Card.Header>
              <Card.Body>
                <Card.Title>{pengiriman.kurir}</Card.Title>
                <Card.Text>{pengiriman.alamat_pengiriman}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => props.handleShowModal(pengiriman)}
                >
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  } else {
    const displayedData = dataPengiriman.slice(0, 3);

    return (
      <div>
        <div className="card-row" style={{ display: "flex" }}>
          {displayedData.map((pengiriman) => (
            <Card
              key={pengiriman.id}
              className="text-center  mx-auto my-auto"
              style={{ width: "260px" }}
            >
              <Card.Img variant="top" src={pengiriman.image_url}></Card.Img>
              <Card.Header>{pengiriman.jenis_bunga}</Card.Header>
              <Card.Body>
                <Card.Title>{pengiriman.kurir}</Card.Title>
                <Card.Text>{pengiriman.alamat_pengiriman}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => props.handleShowModal(pengiriman)}
                >
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default DashboardKurir;
