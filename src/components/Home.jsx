import React, { Component } from "react";
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>

                <div className="container-fluid section1">
                    <div className="row">
                        <div className='col'></div>
                        <div className="col-sm-12 col-md-6">
                            <h1>Welcome</h1>
                            <hr className="line"></hr>
                            <h3 className="font1">Don't get facinated just here, scroll for more!</h3>
                        </div>
                        <div className='col'></div>
                    </div>
                </div>

                <div className="container-fluid section2">
                    <div className="row">
                        <div className='col'></div>
                        <div className="col-sm-12 col-md-6">
                            <h1>Which traits are in my jack?</h1>
                            <h3>Every human on the planet has some talents and aquired skills, lets look at mine:</h3>
                        </div>
                        <div className='col'></div>
                    </div>
                    <div className="row skillList">
                        <div className="col-sm-12 col-md-2 offset-md-2">
                            <img class="img-fluid leftImage" src="https://hearingelmo.files.wordpress.com/2014/02/skills-and-talents.jpg" />
                        </div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-12 col-md-4">
                            <div className="row">
                                <div className='col-md-1 col-sm-1'>
                                    <img class="bullet" src="https://cdn2.iconfinder.com/data/icons/bullet-points/64/Bulletpoint_Bullet_Listicon_Shape_Bulletfont_Glyph_Typography_Bullet_Point_Customshape_Wingding_Custom_Smooth_Square_Double_Tick_Accept_Check_Ok_Yes-512.png" />
                                </div>
                                <div className="col-md-10 skillLeft">
                                    <h4>Programmer</h4>
                                    <p>A passionate software engineer.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-md-1 col-sm-1'>
                                    <img class="bullet" src="https://cdn2.iconfinder.com/data/icons/bullet-points/64/Bulletpoint_Bullet_Listicon_Shape_Bulletfont_Glyph_Typography_Bullet_Point_Customshape_Wingding_Custom_Smooth_Square_Double_Tick_Accept_Check_Ok_Yes-512.png" />
                                </div>
                                <div className="col-md-10 skillLeft">
                                    <h4>Poet</h4>
                                    <p>Because feelings can not always be expressed verbally.</p>

                                </div>
                            </div>

                            <div className="row">
                                <div className='col-md-1 col-sm-1'>
                                    <img class="bullet" src="https://cdn2.iconfinder.com/data/icons/bullet-points/64/Bulletpoint_Bullet_Listicon_Shape_Bulletfont_Glyph_Typography_Bullet_Point_Customshape_Wingding_Custom_Smooth_Square_Double_Tick_Accept_Check_Ok_Yes-512.png" />
                                </div>
                                <div className="col-md-10 skillLeft">
                                    <h4>Learner</h4>
                                    <p>My curiosity never ends :p.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid section3">
                    <h1>My Education</h1>
                    <hr className="line"></hr>
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <img className="image-fluid institute" src="https://s3.ap-south-1.amazonaws.com/schoolconnects.in/files/logo/Victor-Public-School-Maujpur.png"></img>
                            <h2>High School</h2>
                            <h3>Victor Public School</h3>
                            <h5>Year: 2013</h5>
                            <h5>Percentage: 95</h5>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <img className="image-fluid institute" src="https://content3.jdmagicbox.com/comp/delhi/h5/011pxx11.xx11.000204659694.m9h5/catalogue/greenway-modern-school-dilshad-garden-delhi-cbse-schools-rr7kutc5wn.jpg"></img>
                            <h2>Intermediate(PCMB)</h2>
                            <h3>Greenway Modern School</h3>
                            <h5>Year: 2015</h5>
                            <h5>Percentage: 94</h5>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <img className="image-fluid institute" src="http://adgitmdelhi.ac.in/wp-content/uploads/2018/07/logo-adgitm-small2.jpg"></img>
                            <h2>Graduation(B.Tech-IT)</h2>
                            <h3>ADGITM</h3>
                            <h5>Year: 2019</h5>
                            <h5>Percentage: 83</h5>
                        </div>
                    </div>
                </div>

                <div className="container-fluid section4">
                    <h1>Only B.Tech? HaHa No! </h1>
                    <div className="row techRow">
                        <div className="col"></div>
                        <div className="col-sm-12 col-md-1">
                            <img className="techIcon" src="https://www.edx.org/sites/default/files/discover-card.png"></img>
                        </div>

                        <div className="col-sm-12 col-md-1">
                            <img className="techIcon" src="https://strategisminc.com/wp-content/uploads/2017/05/python.jpg"></img>
                        </div>

                        <div className="col-sm-12 col-md-1">
                            <img className="techIcon" src="https://cdn-images-1.medium.com/max/1200/1*ZkZS46p7Lbw-PDBtPMfEEw.jpeg"></img>
                        </div>

                        <div className="col-sm-12 col-md-1">
                            <img className="techIcon" src="http://jtcindia.org/wp-content/uploads/2017/09/bigdata-hadoop.jpg"></img>
                        </div>

                        <div className="col-sm-12 col-md-1">
                            <img className="techIcon" src="https://sg.fiverrcdn.com/photos/58033734/original/8ac4b40284685fa7b8be8ca8f6af902d7113aa9c.png?1474487142"></img>
                        </div>

                        <div className="col-sm-12 col-md-1">
                            <img className="techIcon" src="https://images.techhive.com/images/article/2015/05/aws-logo-100584713-primary.idge.jpg"></img>
                        </div>

                        <div className="col"></div>
                    </div>
                </div>

                <div className="container-fluid section5">
                    <h1>My Projects</h1>
                    <div className="row projRow">
                        <div className="col"></div>
                        <div className="col-sm-12 col-md-3  projcol">
                            <h1>MediKit</h1>
                            <p>A web application developed using React Js and AWS rekonginition.</p>
                            <a href="https://github.com/vsarthak21/React-medikit" class="btn btn-primary git">See Code</a>
                        </div>
                        <div className="col-sm-12 col-md-3  projcol">
                            <h1>E-Challan System</h1>
                            <p>College Major project developed using machine learning and React Js.</p>
                            <a href="https://github.com/vsarthak21" class="btn btn-primary git">See Code</a>
                        </div>
                        <div className="col-sm-12 col-md-3 projcol">
                            <h1>Sentimental Analysis</h1>
                            <p>Of Realtime tweets using Natural Languge Processing.</p>
                            <a href="https://github.com/vsarthak21/Twitter-Sentimental-Analysis-Using-NLP" class="btn btn-primary git">See Code</a>
                        </div>
                        <div className="col"></div>
                    </div>

                    <div className="row projRow">
                        <div className="col"></div>
                        <div className="col-sm-12 col-md-3 projcol">
                            <h1>Price Prediction</h1>
                            <p>Prediction of used cars price using Classifiers.</p>
                            <a href="https://github.com/vsarthak21/Used-Cars-Price-Prediction-Project" class="btn btn-primary git">See Code</a>
                        </div>
                        <div className="col-sm-12 col-md-3 projcol">
                            <h1>Reviews Analysis</h1>
                            <p>Of movies data set using NLP and Classifiers.</p>
                            <a href="https://github.com/vsarthak21/Movie-Reviews-Sentimental-Analysis" class="btn btn-primary git">See Code</a>
                        </div>
                        <div className="col-sm-12 col-md-3 projcol">
                            <h1>Realtime Stock</h1>
                            <p>Fetching stock market value using Python.</p>
                            <a href="https://github.com/vsarthak21" class="btn btn-primary git">See Code</a>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>

                <div className="container-fluid section6">
                    <h1>"  Testimonials.....  "</h1>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner caro">
                            <div class="carousel-item active">
                                <div className="row">
                                    <div className="col-sm-12 col-md-3 offset-md-3">
                                        <img class="testimage img-fluid" src="https://static.wixstatic.com/media/cdf2a2_aee27195bd5e4f119f2c15d8f6d290fc~mv2_d_6000_2000_s_2.png/v1/fill/w_150,h_50,al_c,q_80,usm_0.66_1.00_0.01/CodeBlock%20Logo_Out%20of%20the%20Box%20Thinkers%20(.webp" alt="First slide" />
                                    </div>
                                    <div className="col-sm-12 col-md-4 testtext">
                                        <p>Sarthak is a fast learner and brilliant thinker, he manages to complete the task before any deadline. During his internship in our organisation he worked nicely on React Js, Machine Learning, Python and AWS.</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="carousel-item">
                            <div className="row">
                                    <div className="col-sm-12 col-md-3 offset-md-3">
                                        <img class="testimage img-fluid" src="https://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/03/13/Pictures/official-logo-of-ntpc-limited_a6ab6d28-e938-11e5-872f-c4e2863eb78d.jpg" alt="First slide" />
                                    </div>
                                    <div className="col-sm-12 col-md-4 testtext">
                                        <p>Sarthak is a fast learner and brilliant thinker, he manages to complete the task before any deadline. During his internship in our organisation he worked nicely on React Js, Machine Learning, Python and AWS.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                            <div className="row">
                                    <div className="col-sm-12 col-md-3 offset-md-3">
                                        <img class="testimage img-fluid" src="https://codingninjas.in/assets-landing/images/CNLOGO.svg" alt="First slide" />
                                    </div>
                                    <div className="col-sm-12 col-md-4 testtext">
                                        <p>Sarthak is a fast learner and brilliant thinker, he manages to complete the task before any deadline. During his internship in our organisation he worked nicely on React Js, Machine Learning, Python and AWS.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                </div>




            </div >
        )
    }
}

export default Home;