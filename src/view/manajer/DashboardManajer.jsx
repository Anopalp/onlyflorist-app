/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavbarManajer from "../NavbarManajer";
import supabase from "../../config/supabaseClient";
import Modal from "react-bootstrap/Modal";

function DashboardManajer() {
  const [fetchErrorPengiriman, setFetchErrorPengiriman] = useState(null);
  const [dataPengiriman, setDataPengiriman] = useState(null);
  const [fetchErrorKurir, setFetchErrorKurir] = useState(null);
  const [dataKurir, setDataKurir] = useState(null);

  useEffect(() => {
    const fetchDataPengiriman = async () => {
      const { data, error } = await supabase
        .from("dataPengiriman")
        .select("*, dataKurir (nama_lengkap)");

      if (error) {
        setFetchErrorPengiriman("Could not fetch dataPengiriman");
        setDataPengiriman(null);
        console.log(error);
      }
      if (data) {
        setDataPengiriman(data);
        setFetchErrorPengiriman(null);
      }
    };

    const fetchDataKurir = async () => {
      const { data, error } = await supabase.from("dataKurir").select();

      if (error) {
        setFetchErrorKurir("Could not fetch dataKurir");
        setDataKurir(null);
        console.log(error);
      }
      if (data) {
        setDataKurir(data);
        setFetchErrorKurir(null);
      }
    };

    fetchDataKurir();
    fetchDataPengiriman();
  }, []);

  return (
    <div className="page dashboard">
      {fetchErrorKurir && <p>{fetchErrorKurir}</p>}
      {fetchErrorPengiriman && <p>{fetchErrorPengiriman}</p>}
      {dataKurir && dataPengiriman && (
        <div>
          <NavbarManajer />
          <div className="container min-vh-100">
            <div className="pengiriman-co">
              <h4 className="text-center text-danger p-3"></h4>
              <div className="card-container mx-auto my-5">
                <div className="mx-5">
                  <h3
                    className="my-2"
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "aliceblue",
                    }}
                  >
                    {dataPengiriman.length
                      ? "Pengiriman teratas"
                      : "Tidak ada pengiriman"}
                  </h3>
                </div>
                <div className="row card-row">
                  <CardPengiriman dataPengiriman={dataPengiriman} />
                  <div className="buttons-container mt-3">
                    <div>
                      {dataPengiriman.length ? (
                        <Link to={"/daftar-pengiriman-manajer"}>
                          <Button variant="outline-light" className="rounded-5">
                            See More
                          </Button>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="akun-co">
              <div className="card-container mx-auto my-5">
                <div className="mx-5">
                  <h3
                    className="my-2"
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "aliceblue",
                    }}
                  >
                    {dataKurir.length ? "Akun kurir" : "Tidak ada kurir"}
                  </h3>
                </div>
                <div className="row card-row">
                  <CardKurir dataKurir={dataKurir} />
                  <div className="buttons-container mt-3">
                    <div>
                      {dataKurir.length ? (
                        <Link to={"/daftar-kurir"}>
                          <Button variant="outline-light" className="rounded-5">
                            See More
                          </Button>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CardPengiriman(props) {
  // Ensure that props.dataPengiriman is an array before trying to access its properties
  const dataPengiriman = Array.isArray(props.dataPengiriman)
    ? props.dataPengiriman
    : [];

  const [showModal, setShowModal] = useState(false);
  const [selectedPengiriman, setSelectedPengiriman] = useState(null);

  const handleShowModal = (pengiriman) => {
    setSelectedPengiriman(pengiriman);
    setShowModal(true);
  };

  if (dataPengiriman.length === 0) {
    return <div style={{ height: "30vh" }}></div>;
  } else if (dataPengiriman.length <= 3) {
    return (
      <div>
        <div className="card-row" style={{ display: "flex" }}>
          {dataPengiriman.map((pengiriman) => (
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
                  onClick={() => handleShowModal(pengiriman)}
                >
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ fontWeight: "Bold", color: "#29335c" }}>
              Detail Pengiriman
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Render details of selectedPengiriman */}

            {selectedPengiriman && (
              <div>
                <div className="d-flex align-items-center mb-4">
                  <img
                    style={{ width: "120px", borderRadius: "50%" }}
                    src={selectedPengiriman.image_url}
                    alt="profile picture"
                  ></img>
                  <h3
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "#29335c",
                      marginLeft: "10%",
                    }}
                  >
                    {selectedPengiriman.jenis_bunga}
                  </h3>
                </div>
                <div className="mb-3">
                  <strong style={{ color: "#29335c" }}>ID Pengiriman</strong>
                  <output className="form-control" style={{ color: "#29335c" }}>
                    {selectedPengiriman.id}
                  </output>
                </div>
                <div className="mb-3">
                  <strong style={{ color: "#29335c" }}>
                    Alamat Pengiriman
                  </strong>
                  <output className="form-control" style={{ color: "#29335c" }}>
                    {selectedPengiriman.alamat_pengiriman}
                  </output>
                </div>
                <div className="mb-3">
                  <strong style={{ color: "#29335c" }}>
                    No. Telp Pelanggan
                  </strong>
                  <output className="form-control" style={{ color: "#29335c" }}>
                    {selectedPengiriman.nomor_telp_pelanggan}
                  </output>
                </div>
                <div className="mb-3">
                  <strong style={{ color: "#29335c" }}>Catatan</strong>
                  <output className="form-control" style={{ color: "#29335c" }}>
                    {selectedPengiriman.catatan
                      ? selectedPengiriman.catatan
                      : "-"}
                  </output>
                </div>
                <div className="mb-3">
                  <strong style={{ color: "#29335c" }}>Kurir</strong>
                  <output className="form-control" style={{ color: "#29335c" }}>
                    {selectedPengiriman.dataKurir?.nama_lengkap}
                  </output>
                </div>
                {selectedPengiriman.laporanMasalah != null ? (
                  <div className="mb-3">
                    <strong style={{ color: "#29335c" }}>
                      Laporan Masalah
                    </strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedPengiriman.laporan_masalah}
                    </output>
                  </div>
                ) : null}
                <div className="mb-4">
                  <strong style={{ color: "#29335c" }}>
                    Status Pengiriman
                  </strong>
                  <output className="form-control" style={{ color: "#29335c" }}>
                    {selectedPengiriman.status_pengiriman}
                  </output>
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
                <Card.Text>{pengiriman.nomor_telp_pelanggan}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleShowModal(pengiriman)}
                >
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Modal Trigger */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ fontWeight: "Bold", color: "#29335c" }}>
              Detail Pengiriman
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Render details of selectedPengiriman */}

            {selectedPengiriman && (
              <div>
                <div className="d-flex align-items-center mb-4">
                  <img
                    style={{ width: "120px", borderRadius: "50%" }}
                    src={selectedPengiriman.image_url}
                    alt="profile picture"
                  ></img>
                  <h3
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "#29335c",
                      marginLeft: "10%",
                    }}
                  >
                    {selectedPengiriman.jenis_bunga}
                  </h3>
                </div>
                <div className="mb-3">
                  <strong style={{ color: "#29335c" }}>ID Pengiriman</strong>
                  <output className="form-control" style={{ color: "#29335c" }}>
                    {selectedPengiriman.id}
                  </output>
                </div>
                <div className="mb-3">
                  <strong style={{ color: "#29335c" }}>
                    Alamat Pengiriman
                  </strong>
                  <output className="form-control" style={{ color: "#29335c" }}>
                    {selectedPengiriman.alamat_pengiriman}
                  </output>
                </div>
                <div className="mb-3">
                  <strong style={{ color: "#29335c" }}>
                    No. Telp Pelanggan
                  </strong>
                  <output className="form-control" style={{ color: "#29335c" }}>
                    {selectedPengiriman.nomor_telp_pelanggan}
                  </output>
                </div>
                <div className="mb-3">
                  <strong style={{ color: "#29335c" }}>Catatan</strong>
                  <output className="form-control" style={{ color: "#29335c" }}>
                    {selectedPengiriman.catatan
                      ? selectedPengiriman.catatan
                      : "-"}
                  </output>
                </div>
                <div className="mb-3">
                  <strong style={{ color: "#29335c" }}>Kurir</strong>
                  <output className="form-control" style={{ color: "#29335c" }}>
                    {selectedPengiriman.kurir}
                  </output>
                </div>
                {selectedPengiriman.laporanMasalah != null ? (
                  <div className="mb-3">
                    <strong style={{ color: "#29335c" }}>
                      Laporan Masalah
                    </strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedPengiriman.laporan_masalah}
                    </output>
                  </div>
                ) : null}
                <div className="mb-4">
                  <strong style={{ color: "#29335c" }}>
                    Status Pengiriman
                  </strong>
                  <output className="form-control" style={{ color: "#29335c" }}>
                    {selectedPengiriman.status_pengiriman}
                  </output>
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

  // Display only the first three items
}

function CardKurir(props) {
  const dataKurir = Array.isArray(props.dataKurir) ? props.dataKurir : [];
  const [showModal, setShowModal] = useState(false);
  const [selectedKurir, setSelectedKurir] = useState(null);

  const handleShowModal = (kurir) => {
    setSelectedKurir(kurir);
    setShowModal(true);
  };

  if (dataKurir.length === 0) {
    return <div></div>;
  } else if (dataKurir.length <= 3) {
    return (
      <div>
        <div className="card-row" style={{ display: "flex" }}>
          {dataKurir.map((kurir) => (
            <Card
              key={kurir.username}
              className="text-center mx-auto my-auto"
              style={{ width: "230px" }}
            >
              <Card.Header>{kurir.nama_lengkap}</Card.Header>
              <Card.Body>
                <Card.Title>{kurir.phone}</Card.Title>
                <Card.Text>{kurir.alamat}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleShowModal(kurir)}
                >
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Modal Trigger */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ fontWeight: "Bold", color: "#29335c" }}>
              Detail Kurir
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Render details of selectedKurir */}
            {selectedKurir && (
              <div>
                <div className="profile-header">
                  <img
                    className="profile-pic"
                    src={selectedKurir.image_url}
                    alt="profile picture"
                  ></img>
                  <h3 className="profile-name">{selectedKurir.username}</h3>
                </div>

                <div className="profile-data">
                  <p>
                    <strong style={{ color: "#29335c" }}>Username</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.username}
                    </output>
                  </p>
                  <p>
                    <strong style={{ color: "#29335c" }}>Password</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.password}
                    </output>
                  </p>
                  <p>
                    <strong style={{ color: "#29335c" }}>Nama Lengkap</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.nama_lengkap}
                    </output>
                  </p>
                  <p>
                    <strong style={{ color: "#29335c" }}>NIK</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.nik}
                    </output>
                  </p>
                  <p>
                    <strong style={{ color: "#29335c" }}>Tanggal Lahir</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.tanggal_lahir}
                    </output>
                  </p>
                  <p>
                    <strong style={{ color: "#29335c" }}>Phone</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.phone}
                    </output>
                  </p>
                  <p>
                    <strong style={{ color: "#29335c" }}>Alamat</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.alamat}
                    </output>
                  </p>
                </div>
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
  } else {
    const displayedData = dataKurir.slice(0, 3);

    return (
      <div>
        <div className="card-row" style={{ display: "flex" }}>
          {displayedData.map((kurir) => (
            <Card
              key={kurir.username}
              className="text-center mx-auto my-auto"
              style={{ width: "230px" }}
            >
              <Card.Header>{kurir.nama_lengkap}</Card.Header>
              <Card.Body>
                <Card.Title>{kurir.phone}</Card.Title>
                <Card.Text>{kurir.alamat}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleShowModal(kurir)}
                >
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Modal Trigger */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ fontWeight: "Bold", color: "#29335c" }}>
              Detail Kurir
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Render details of selectedKurir */}
            {selectedKurir && (
              <div>
                <div className="profile-header">
                  <img
                    className="profile-pic"
                    src={selectedKurir.image_url}
                    alt="profile picture"
                  ></img>
                  <h3 className="profile-name">{selectedKurir.username}</h3>
                </div>

                <div className="profile-data">
                  <p>
                    <strong style={{ color: "#29335c" }}>Username</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.username}
                    </output>
                  </p>
                  <p>
                    <strong style={{ color: "#29335c" }}>Password</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.password}
                    </output>
                  </p>
                  <p>
                    <strong style={{ color: "#29335c" }}>Nama Lengkap</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.nama_lengkap}
                    </output>
                  </p>
                  <p>
                    <strong style={{ color: "#29335c" }}>NIK</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.nik}
                    </output>
                  </p>
                  <p>
                    <strong style={{ color: "#29335c" }}>Tanggal Lahir</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.tanggal_lahir}
                    </output>
                  </p>
                  <p>
                    <strong style={{ color: "#29335c" }}>Phone</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.phone}
                    </output>
                  </p>
                  <p>
                    <strong style={{ color: "#29335c" }}>Alamat</strong>
                    <output
                      className="form-control"
                      style={{ color: "#29335c" }}
                    >
                      {selectedKurir.alamat}
                    </output>
                  </p>
                </div>
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
}

export default DashboardManajer;
