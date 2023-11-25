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
                >Pengiriman teratas
                </h3>
              </div>

              <div className="row card-row">
                <CardPengirimanKurir
                  dataPengiriman={dataPengiriman}
                  handleShowModal={handleShowModal}
                />
                <div className="buttons-container mt-3">
                  <div>
                    <Link to={"/daftar-pengiriman-kurir"}>
                      <Button variant="outline-light" className="rounded-5">
                        See More
                      </Button>
                    </Link>
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
          <Modal.Title>Pengiriman Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render details of selectedPengiriman */}
          {selectedPengiriman && (
            <div>
              <p>Jenis Bunga: {selectedPengiriman.jenis_bunga}</p>
              <p>Kurir: {selectedPengiriman.kurir}</p>
              {/* Add other details as needed */}
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
      <div style={{ width: "260px", height: "280px" }}>
        <h2 style={{ color: "white", overflow: "visible" }}></h2>
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
