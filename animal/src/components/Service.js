import React, { Component } from 'react'
import {Link } from 'react-router-dom';
export default class Service extends Component {
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
                                    <h2>My Services</h2>
                                    <nav aria-label="breadcrumb ">
                                        <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item"><Link to="#">My Services</Link></li> 
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="categories-area categories-area2  section-padding30">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cat text-center mb-50">
                                <div class="cat-icon">
                                    <span class="flaticon-pen"></span>
                                </div>
                                <div class="cat-cap">
                                    <h5><a href="services.html">UI/UX Design</a></h5>
                                    <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cat text-center mb-50">
                                <div class="cat-icon">
                                    <span class="flaticon-speaker"></span>
                                </div>
                                <div class="cat-cap">
                                    <h5><a href="services.html">Digital Marketing</a></h5>
                                    <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cat text-center mb-50">
                                <div class="cat-icon">
                                    <span class="flaticon-portfolio"></span>
                                </div>
                                <div class="cat-cap">
                                    <h5><a href="services.html">Website Design</a></h5>
                                    <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cat text-center mb-50">
                                <div class="cat-icon">
                                    <span class="flaticon-portfolio"></span>
                                </div>
                                <div class="cat-cap">
                                    <h5><a href="services.html">Website Design</a></h5>
                                    <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cat text-center mb-50">
                                <div class="cat-icon">
                                    <span class="flaticon-speaker"></span>
                                </div>
                                <div class="cat-cap">
                                    <h5><a href="services.html">Digital Marketing</a></h5>
                                    <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cat text-center mb-50">
                                <div class="cat-icon">
                                    <span class="flaticon-pen"></span>
                                </div>
                                <div class="cat-cap">
                                    <h5><a href="services.html">UI/UX Design</a></h5>
                                    <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="wantToWork-area w-padding2">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-xl-6 col-lg-8 col-md-8">
                            <div class="wantToWork-caption wantToWork-caption2">
                                <h2>Dont worry for contact i`m available</h2>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3">
                            <a href="#" class="btn btn-black f-right">Contact Me Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <div class="contact-info-area w-padding2 bg-danger" data-background="assets/img/gallery/section_bg04.jpg">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-xl-5 col-lg-7">
                        <div class="contact-caption mb-50">
                                <h3>If Not Now, When? Let’s Work Together!</h3>
                                <p>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra.</p>
                                <img src="assets/img/gallery/sin.png" alt=""/>
                        </div>
                        </div>
                        <div class="col-xl-5 col-lg-5">
                            <form action="#" class="contact-wrapper">
                                <input type="text" name="name" placeholder="Full Name"/>
                                <input type="email" name="email" placeholder="Email Address"/>
                                <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                <button class="submit-btn2" type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      </div>
    )
  }
}
