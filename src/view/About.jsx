import React from "react";
import './aboutStyles.css'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import NavbarManajer from "./NavbarManajer";

function About () {
    return (
    <section className="section-white">
    <NavbarManajer/>
    <div className="container">
        
        <div className="row">
            <div className="col-md-12 text-center">
                <h2 className="section-title" style={{fontWeight:'bolder'}}>The Team Behind OnlyFlorist</h2>
                <p className="section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div> 
             
            <div className="col-sm-6 col-md-3">
                <div className="team-item">
                    <img src="..\images\cblucherh.jpg" className="team-img" alt="pic" />                   
                    <h4 style={{fontWeight:'bold'}}>IBNU KHAIRY</h4>            
                    <div className="team-info"><p>Lorem Ipsum</p></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  
                    <ul className="team-icon">
                    
                        <li><a href="#" className="twitter">
                        <i><FaTwitter/></i>
                        </a></li>
                        
                        <li><a href="#" className="instagram">
                        <i><FaInstagram/></i>
                        </a></li>
                        
                        <li><a href="#" className="facebook">
                        <i><FaFacebook/></i>
                        </a></li>
                         
                    </ul>
                </div>
            </div> 
              
            <div className="col-sm-6 col-md-3">
                <div className="team-item">
                    <img src="..\images\cblucherh.jpg" className="team-img" alt="pic" />                   
                    <h4 style={{fontWeight:'bold'}}>ALIEFNAUFAL</h4>            
                    <div className="team-info"><p>Lorem Ipsum</p></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  
                    <ul className="team-icon">
                    
                        <li><a href="#" className="twitter">
                        <i><FaTwitter/></i>
                        </a></li>
                        
                        <li><a href="#" className="instagram">
                        <i><FaInstagram/></i>
                        </a></li>
                        
                        <li><a href="#" className="facebook">
                        <i><FaFacebook/></i>
                        </a></li>
                         
                    </ul>
                </div>
            </div> 

            <div className="col-sm-6 col-md-3">
                <div className="team-item">
                    <img src="..\images\cblucherh.jpg" className="team-img" alt="pic" />                   
                    <h4 style={{fontWeight:'bold'}}>SAMUEL ERIC</h4>            
                    <div className="team-info"><p>Lorem Ipsum</p></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  
                    <ul className="team-icon">
                    
                        <li><a href="#" className="twitter">
                        <i><FaTwitter/></i>
                        </a></li>
                        
                        <li><a href="#" className="instagram">
                        <i><FaInstagram/></i>
                        </a></li>
                        
                        <li><a href="#" className="facebook">
                        <i><FaFacebook/></i>
                        </a></li>
                         
                    </ul>
                </div>
            </div> 

            <div className="col-sm-6 col-md-3">
                <div className="team-item">
                    <img src="..\images\cblucherh.jpg" className="team-img" alt="pic" />                   
                    <h4 style={{fontWeight:'bold'}}>LUTHFI HANIF</h4>            
                    <div className="team-info"><p>Lorem Ipsum</p></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  
                    <ul className="team-icon">
                    
                        <li><a href="#" className="twitter">
                        <i><FaTwitter/></i>
                        </a></li>
                        
                        <li><a href="#" className="instagram">
                        <i><FaInstagram/></i>
                        </a></li>
                        
                        <li><a href="#" className="facebook">
                        <i><FaFacebook/></i>
                        </a></li>
                         
                    </ul>
                </div>
            </div>  
            
            </div> 
        </div> 
    </section>
    )
}

export default About;