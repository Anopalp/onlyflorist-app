import React from "react";
import "./aboutStyles.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import NavbarManajer from "./NavbarManajer";

function About() {
  return (
    <section className="section-white">
      <NavbarManajer />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h4 className="section-title" style={{ fontWeight: "bolder" }}>
              The OnlyFlorist
            </h4>
            <br />
            <img src="/onlyflorist.svg" alt="" />
            <br />
            <br />
            <p className="section-subtitle">
              OnlyFlorist merupakan sebuah aplikasi manajemen pengiriman bunga
              yang dibuat atas dasar kebutuhan manajer pemilik sebuah toko bunga
              terkenal di Kota Bandung. OnlyFlorist bekerja dengan mengolah data
              pengiriman agar pengiriman bunga dapat lebih efisien dan efektif.
              Onlyflorist ditujukan sebagai aplikasi berbasis web agar dapat
              kompatibel dengan semua perangkat pengguna. Diharapkan adanya
              OnlyFlorist dapat membantu manajer pemiliki toko bunga ini.
            </p>

            <h3 className="section-title" style={{ fontWeight: "bolder" }}>
              The Team Behind OnlyFlorist
            </h3>
            <p className="section-subtitle">
              OnlyFlorist dibuat dari semangat yang dalam untuk menciptakan
              solusi yang memecahkan masalah dan meningkatkan hidup sehari-hari.
              Kami percaya bahwa kolaborasi yang kuat dan kerja tim yang
              harmonis adalah kunci keberhasilan. Dalam setiap langkah pembuatan
              aplikasi, kami berusaha untuk tidak hanya memenuhi harapan
              pengguna, tetapi juga melampaui batas ekspektasi.
              <br /> <br />
              Tim kami terdiri atas 4 orang mahasiswa Sistem dan Teknologi
              Informasi ITB angkatan 21 yaitu
            </p>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img
                src="..\images\cblucherh.jpg"
                className="team-img"
                alt="pic"
              />
              <h4 style={{ fontWeight: "bold" }}>IBNU KHAIRY</h4>
              <div className="team-info">
                <p>FE</p>
              </div>
              <p>
                Seorang mahasiswa Sistem dan Teknologi Informasi ITB yang selalu
                penasaran dan ingin mencoba hal baru
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://instagram.com/algi.ibnu_"
                    className="instagram"
                  >
                    <i>
                      <FaInstagram />
                    </i>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <i>
                      <FaFacebook />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img
                src="..\images\cblucherh.jpg"
                className="team-img"
                alt="pic"
              />
              <h4 style={{ fontWeight: "bold" }}>ALIEFNAUFAL</h4>
              <div className="team-info">
                <p>BE</p>
              </div>
              <p>
                Seorang mahasiswa Sistem dan Teknologi Informasi ITB yang
                kritis, fokus dan suka mengulik informasi baru
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://instagram.com/m.aliefnp"
                    className="instagram"
                  >
                    <i>
                      <FaInstagram />
                    </i>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <i>
                      <FaFacebook />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img
                src="..\images\cblucherh.jpg"
                className="team-img"
                alt="pic"
              />
              <h4 style={{ fontWeight: "bold" }}>SAMUEL ERIC</h4>
              <div className="team-info">
                <p>BE</p>
              </div>
              <p>
                Seorang mahasiswa Sistem dan Teknologi Informasi ITB yang gigih
                dalam bekerja, optimis serta disiplin terhadap waktu.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://instagram.com/samuel._eric"
                    className="instagram"
                  >
                    <i>
                      <FaInstagram />
                    </i>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <i>
                      <FaFacebook />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="team-item">
              <img
                src="..\images\cblucherh.jpg"
                className="team-img"
                alt="pic"
              />
              <h4 style={{ fontWeight: "bold" }}>LUTHFI HANIF</h4>
              <div className="team-info">
                <p>FE</p>
              </div>
              <p>
                Seorang mahasiswa Sistem dan Teknologi Informasi ITB yang
                kreatif, empati serta bersemangat dalam bekerja.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://instagram.com/lthf.hanif"
                    className="instagram"
                  >
                    <i>
                      <FaInstagram />
                    </i>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <i>
                      <FaFacebook />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
