import React, { Component } from 'react'
import {Link } from 'react-router-dom';
export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <main>
            <div class="slider-area ">
                <div class="slider-height2 d-flex align-items-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="hero-cap">
                                    <h2>My Portfolio</h2>
                                    <nav aria-label="breadcrumb ">
                                        <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item"><Link to="#">My Portfolio</Link></li> 
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="services-area  services-padding">
                <div class="container">
                <div class="project-heading mb-35">
                        <div class="row align-items-end">
                            <div class="col-lg-6">
                                <div class="section-tittle">
                                    <h2>What Services you will Get from me!</h2>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="properties__button">                                           
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false"> All</a>
                                            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"> Branding</a>
                                            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Logo</a>
                                            <a class="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">UI/UX </a>
                                            <a class="nav-item nav-link" id="nav-technology" data-toggle="tab" href="#nav-techno" role="tab" aria-controls="nav-contact" aria-selected="false">Web Design</a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="tab-content active" id="nav-tabContent">
                                <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">           
                                    <div class="services-caption">
                                        <div class="row">
                                            <div class="col-lg-8 col-md-8 col-sm-8">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services1.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="single-services mb-30">
                                                            <img src="assets/img/service/services2.png" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="single-services mb-30">
                                                            <img src="assets/img/service/services3.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services4.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services5.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services6.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div class="services-caption">
                                        <div class="row">
                                            <div class="col-lg-8 col-md-8 col-sm-8">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services6.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="single-services mb-30">
                                                            <img src="assets/img/service/services2.png" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="single-services mb-30">
                                                            <img src="assets/img/service/services3.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services4.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services5.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services1.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div class="services-caption">
                                        <div class="row">
                                            <div class="col-lg-8 col-md-8 col-sm-8">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services2.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="single-services mb-30">
                                                            <img src="assets/img/service/services1.png" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="single-services mb-30">
                                                            <img src="assets/img/service/services3.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services4.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services5.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services6.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                    <div class="services-caption">
                                        <div class="row">
                                            <div class="col-lg-8 col-md-8 col-sm-8">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services1.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="single-services mb-30">
                                                            <img src="assets/img/service/services2.png" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="single-services mb-30">
                                                            <img src="assets/img/service/services3.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services4.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services5.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services6.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-techno" role="tabpanel" aria-labelledby="nav-technology">
                                    <div class="services-caption">
                                        <div class="row">
                                            <div class="col-lg-8 col-md-8 col-sm-8">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services3.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="single-services mb-30">
                                                            <img src="assets/img/service/services2.png" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="single-services mb-30">
                                                            <img src="assets/img/service/services1.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services4.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services5.png" alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="single-services mb-30">
                                                    <img src="assets/img/service/services6.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
      </div>
    )
  }
}
