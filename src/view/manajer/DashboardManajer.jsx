import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import "react-multi-carousel/lib/styles.css";

function DashboardManajer() {
  return (
    <div>
      <div className="pengiriman-co">
        <h4 class="text-center text-danger p-3"></h4>
        <div class="card-container mx-auto my-5">
          <div class="mx-5">
            <h3>Pengiriman teratas</h3>
          </div>
          <div class="row">
            <Card className="text-center w-25 col-lg-4 mx-auto my-auto">
              <Card.Img
                variant="top"
                src="..\src\assets\Sansevieria.png"
              ></Card.Img>
              <Card.Header>Sansevieria</Card.Header>
              <Card.Body>
                <Card.Title>Budi Pratama</Card.Title>
                <Card.Text>
                  Jl. Tubagus Islamiyyah no.18 Sumarno 086542729739
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card className="text-center w-25 col-lg-4 mx-auto my-auto">
              <Card.Img
                variant="top"
                src="..\src\assets\Sansevieria.png"
              ></Card.Img>
              <Card.Header>Sansevieria</Card.Header>
              <Card.Body>
                <Card.Title>Anita Disley</Card.Title>
                <Card.Text>
                  Jl. Tubagus Islamiyyah no.88 Sumarno 086541299739
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card className="text-center w-25 col-lg-4 mx-auto my-auto">
              <Card.Img
                variant="top"
                src="..\src\assets\Sansevieria.png"
              ></Card.Img>
              <Card.Header>Sansevieria</Card.Header>
              <Card.Body>
                <Card.Title>Alam Bar</Card.Title>
                <Card.Text>
                  Jl. Tubagus Islamiyyah no.15 Sumarno 086542728273
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <div class="buttons-container mt-3">
              <div>
                <Link to={"/daftar-pengiriman-manajer"} class="btn">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="akun-co">
        <div class="card-container mx-auto my-5">
          <div class="mx-5">
            <h3 class="text-center">Akun Kurir</h3>
          </div>
          <div class="row">
            <Card className="text-center w-25 col-lg-4 mx-auto my-auto">
              <Card.Img
                variant="top"
                src="..\src\assets\Sansevieria.png"
              ></Card.Img>
              <Card.Header>Sansevieria</Card.Header>
              <Card.Body>
                <Card.Title>Budi Pratama</Card.Title>
                <Card.Text>
                  Jl. Tubagus Islamiyyah no.18 Sumarno 086542729739
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card className="text-center w-25 col-lg-4 mx-auto my-auto">
              <Card.Img
                variant="top"
                src="..\src\assets\Sansevieria.png"
              ></Card.Img>
              <Card.Header>Sansevieria</Card.Header>
              <Card.Body>
                <Card.Title>Anita Disley</Card.Title>
                <Card.Text>
                  Jl. Tubagus Islamiyyah no.88 Sumarno 086541299739
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card className="text-center w-25 col-lg-4 mx-auto my-auto">
              <Card.Img
                variant="top"
                src="..\src\assets\Sansevieria.png"
              ></Card.Img>
              <Card.Header>Sansevieria</Card.Header>
              <Card.Body>
                <Card.Title>Alam Bar</Card.Title>
                <Card.Text>
                  Jl. Tubagus Islamiyyah no.15 Sumarno 086542728273
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <div class="buttons-container mt-3">
              <div>
                <Link to={"/daftar-pengiriman-manajer"} class="btn">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardManajer;
