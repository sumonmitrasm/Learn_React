import React, { Component } from 'react'
import {Link } from 'react-router-dom';
 class Home extends Component {
  render() {
    return (
      <div>
          <main>
            <div class="slider-area ">
                <div class="slider-active">
                    <div class="single-slider slider-height d-flex align-items-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-8">
                                    <div class="hero__caption">
                                        <span data-animation="fadeInUp" data-delay=".4s">Get Every Single Solutions.</span>
                                        <h1 data-animation="fadeInUp" data-delay=".6s">I’m Designer Haris F. Watson</h1>
                                        <p data-animation="fadeInUp" data-delay=".8s">jhorem rfpsum golor sidt amet, consectetur adipiscing elit, eiusmod tempor incididunt utcjhg labore bet dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                        <div class="hero__btn">
                                            <Link href="industries.html" class="btn hero-btn"  data-animation="fadeInLeft" data-delay=".8s">Learn More</Link>
                                            <Link href="industries.html" class="btn border-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">Hire Me</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="about-area section-paddingt30">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-5">
                            <div class="about-caption mb-50">
                                <h3>Designing With Passion While Exploring The World.</h3>
                                <p class="pera1">Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                                <p>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1">
                            <div class="about-caption2">
                                <h3>Any Type Of Query & Discussion.</h3>
                                <p>Late talk with me</p>
                              <div class="send-cv">
                                    <Link href="#">hire@colorlib.com</Link>
                                    <i class="ti-arrow-right"></i>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="categories-area section-padding3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-tittle mb-70">
                                <h2>What Services you will Get from me!</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cat text-center mb-50">
                                <div class="cat-icon">
                                    <span class="flaticon-pen"></span>
                                </div>
                                <div class="cat-cap">
                                    <h5><Link to="services.html">UI/UX Design</Link></h5>
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
                                    <h5><Link to="services.html">Digital Marketing</Link></h5>
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
                                    <h5><Link to="services.html">Website Design</Link></h5>
                                    <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                            <Link class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false"> All</Link>
                                            <Link class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"> Branding</Link>
                                            <Link class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Logo</Link>
                                            <Link class="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">UI/UX </Link>
                                            <Link class="nav-item nav-link" id="nav-technology" data-toggle="tab" href="#nav-techno" role="tab" aria-controls="nav-contact" aria-selected="false">Web Design</Link>
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
            <section class="wantToWork-area w-padding2">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-xl-6 col-lg-8 col-md-8">
                            <div class="wantToWork-caption wantToWork-caption2">
                                <h2>Dont worry for contact i`m available</h2>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3">
                            <Link to="#" class="btn btn-black f-right">Contact Me Now</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="client-comments section-paddingt30">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-8 col-md-10">
                            <div class="section-tittle mb-70">
                                <h2>Some Possitive Feedback  That Encourage Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="latest-blog-area">
                    <div class="container">
                        <div class="row">
                            
                                <div class="col-xl-4 col-lg-4">
                                    <div class="blog-wrapper">
                                        <div class="blog-inner">
                                        <div class="blog-top">
                                                <div class="person-img">
                                                    <img src="assets/img/gallery/blog1.png" alt=""/>
                                                </div>
                                                <div class="comment-person">
                                                    <h2>Bradley Erickson</h2>   
                                                    <span>UI/UX Designer</span>
                                                </div>
                                        </div>
                                            <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4">
                                    <div class="blog-wrapper">
                                        <div class="blog-inner">
                                        <div class="blog-top">
                                                <div class="person-img">
                                                    <img src="assets/img/gallery/blog2.png" alt=""/>
                                                </div>
                                                <div class="comment-person">
                                                    <h2>Bradley Erickson</h2>   
                                                    <span>UI/UX Designer</span>
                                                </div>
                                        </div>
                                            <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4">
                                    <div class="blog-wrapper">
                                        <div class="blog-inner">
                                        <div class="blog-top">
                                                <div class="person-img">
                                                    <img src="assets/img/gallery/blog3.png" alt=""/>
                                                </div>
                                                <div class="comment-person">
                                                    <h2>Bradley Erickson</h2>   
                                                    <span>UI/UX Designer</span>
                                                </div>
                                        </div>
                                            <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4">
                                    <div class="blog-wrapper">
                                        <div class="blog-inner">
                                        <div class="blog-top">
                                                <div class="person-img">
                                                    <img src="assets/img/gallery/blog2.png" alt=""/>
                                                </div>
                                                <div class="comment-person">
                                                    <h2>Bradley Erickson</h2>   
                                                    <span>UI/UX Designer</span>
                                                </div>
                                        </div>
                                            <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
                                        </div>
                                    </div>
                                </div>
                          
                        </div>
                    </div>
                </div>           
            </section>

            <section class="contact-info-area w-padding2 bg-blue" data-background="assets/img/gallery/section_bg04.jpg">
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
            </section>
            </main>
      </div>
    )
  }
  
}
export default Home