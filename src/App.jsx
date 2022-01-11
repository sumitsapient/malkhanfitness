import React from 'react';
import "./css/styles.css"
import logo from "./assets/img/logos/logo.svg";
import p1 from "./assets/img/portfolio/1.jpg";
import cardio from "./assets/img/fitness/cardio.jpg"
import dumbells from "./assets/img/fitness/dumbells.jpg"
import imageThree from "./assets/img/fitness/dumbelltwo.jpg"
import enrancetwo from "./assets/img/fitness/enrancetwo.jpg"
import imageFive from "./assets/img/fitness/entrance.jpg"
import legpress from "./assets/img/fitness/legpress.jpg"
import mainentry from "./assets/img/fitness/mainentry.jpg"
import mainentrytwo from "./assets/img/fitness/mainentrytwo.jpg"
import weight from "./assets/img/fitness/weight.jpg"
import wageesha from "./assets/img/fitness/wageesha.png"
import prashant from "./assets/img/fitness/prashant.png"
import vaibhav from "./assets/img/fitness/vaibhav.png"
import logonew from "./assets/img/logos/logo.jpg"

export const App = () => {
    return (
        <div>
            {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"><img className="img-fluid" src={logonew} alt="..." /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Gallery</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Testimony</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* Masthead */}
        <header className="masthead">
            <div className="container">
                {/* <div className="masthead-subheading">Welcome To </div> */}
                <div className="masthead-heading text-uppercase opacity-50">Malkhan Fitness <a className="btn btn-danger btn-social mx-2" target="_blank" href="https://www.instagram.com/malkhanfitness/?hl=en"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-info btn-social mx-2" target="_blank" href="https://www.facebook.com/malkhan.fitness/?ref=py_c"><i className="fab fa-facebook-f"></i></a></div>
                <a className="btn btn-primary btn-lg text-uppercase" href="#services">Our Services</a>
            </div>
        </header>
        {/* <!-- Services--> */}
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Malkhan Fitness,the leading fitness center & Bodybuilding in india with world class health club equipment, Certified Gym trainers, group exercise classes, freestyle workout, we care for customers hygeine</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-dumbbell fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Weight Training</h4>
                        <p className="text-muted">Squat Rack,Leg Press,Adjustable Bench,Cable CrossOver,Flat Bench Press,Inclined Bench Press,Lat Pulling Down,Leg Curl Extension and more.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-dumbbell fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Cardio & CrossFit</h4>
                        <p className="text-muted">Treadmill,Elliptical,Rowing machine,Battle Ropes,Indoor cycling,Kettlebells,Sprint Bike,</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-dumbbell fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Kick Boxing</h4>
                        <p className="text-muted">Boxing Bag,Pads,Gloves.If there was ever a one-stop solution to tone up and lose weight it would have to be kickboxing.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-dumbbell fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Shower rooms</h4>
                        <p className="text-muted">You might want to grab a quick rinse at the gym before you leave.A cold shower can also help boost your metabolism to help with weight loss.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Steam Bath</h4>
                        <p className="text-muted">Sitting in a steam room might significantly improve your cardiovascular health.Steam opens your pores and cleanses your skin.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Lockers</h4>
                        <p className="text-muted">To make sure your personal belongings are safe and secure.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Portfolio Grid--> */}
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Gallery</h2>
                    {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 1--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={cardio} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                {/* <div className="portfolio-caption-heading">Threads</div> */}
                                <div className="portfolio-caption-subheading text-muted">Cardio and CrossFit</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 2--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={dumbells} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                {/* <div className="portfolio-caption-heading">Explore</div> */}
                                <div className="portfolio-caption-subheading text-muted">Weight Training</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 3--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={legpress} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                {/* <div className="portfolio-caption-heading">Finish</div> */}
                                <div className="portfolio-caption-subheading text-muted">Being Strong Equipments</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        {/* <!-- Portfolio item 4--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={weight} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                {/* <div className="portfolio-caption-heading">Lines</div> */}
                                <div className="portfolio-caption-subheading text-muted">Weight Training & Equipments</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        {/* <!-- Portfolio item 5--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={mainentry} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                {/* <div className="portfolio-caption-heading">Southwest</div> */}
                                <div className="portfolio-caption-subheading text-muted">Main Entrance</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        {/* <!-- Portfolio item 6--> */}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={enrancetwo} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                {/* <div className="portfolio-caption-heading">Window</div> */}
                                <div className="portfolio-caption-subheading text-muted">Reception</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About--> */}
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Malkhan Fitness,the leading fitness center & Bodybuilding in india with world class health club equipment, Certified Gym trainers, group exercise classes, freestyle workout, we care for customers hygeine, Facilities by Malkhan fitness: *Persional trainig *Weight training * Cardio & crossfit *Kick boxing *Shower rooms *Steam Bath *Lockers Room.</h3>
                </div>
                {/* <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2015</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2020</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul> */}
            </div>
        </section>
        {/* <!-- Team--> */}
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Testimony</h2>
                    <h3 className="section-subheading text-muted">What clients have to say</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={prashant} alt="..." />
                            <h4>Prashant</h4>
                            <p className="text-muted">"Best Gym with all modern machinery.Best part is owner is very down to earth and supportive.Special Thanks to Narendra bhai.I Joined for weight loss and lost 7kg till now and counting, if you have to loose weight and build your body join without second thought."</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={vaibhav} alt="..." />
                            <h4>Vaibhav</h4>
                            <p className="text-muted">"Malkhan Fitness is one of the finest gym I've ever seen . Iam using this gym since last one year and find it perfect in terms of  equipments, hygiene , cleanliness, behaviour and everything . Gym tariff is also very reasonable for the facility they are providing . The aim of the owner is fitness of their members unlike other gym who juzz want to make money out it ."</p>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={wageesha} alt="..." />
                            <h4>Wageesha</h4>
                            <p className="text-muted">"Malkhan Fitness is the perfect gym if you want to get in great shape! From the very beginning  i know that it is a great gym. Gym is well equipped with varied and maintained equipments and they also provide steam bath....Its much better than going to any gym and trying to figure out what to do on your own. This place teaches you the proper way to do things..... The trainer is very polite and  professional......I feel so motivated here.... Love this gym❤❤"</p>
                    
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><a target="_blank" href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zMqLL86JNzI1YLRSNagwtrQwNTZNSks0S7FIMko2tjKoSExJSTQ1TjIyNE6xNDC2NPHiz03Myc5IzFNIyyzJSy0uBgDVbBVD&q=malkhan+fitness&rlz=1C1GCEU_en-GBIN961IN961&oq=Malkan+Fitless&aqs=chrome.1.69i57j46i13i175i199.5997j0j7&sourceid=chrome&ie=UTF-8#lrd=0x398535bfa6d8b2c3:0xadda53b213d90394,1,,," className="large text-muted">See More Reviews</a></div>
                </div>
            </div>
        </section>
        {/* <!-- Clients--> */}
        {/* <!-- Contact--> */}
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Address: Gangotri Nagar, Prayagraj, Uttar Pradesh 211008 , Phone: 097929 34169</h3>
                </div>
                
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2021</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" target="_blank" href="https://www.facebook.com/malkhan.fitness/?ref=py_c"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-dark btn-social mx-2" target="_blank" href="https://www.instagram.com/malkhanfitness/?hl=en"><i className="fab fa-facebook-f"></i></a>
                        
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer> 
        </div>
    )
}
