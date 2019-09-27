import React from "react";
import "./style.css";
import Section1 from "./images/Restaurant1.jpg";
import Share from "./images/FriendsDinner.jpg";



function HomeBody() {

    return(

        <div>
            <div className="jumbotron jumbotron-fluid mb-0">
                <div className="dark-overlay">
                    <div className="jumbo-inner container">
                        <div className="row">
                            <div className="col text-center">
                                <h1 className="display-2 text-white" id="slogan">Take a Bite,<br/> Leave No Crumbs</h1>
                                <h3 className="text-white mx-auto" id="slogan-text">Leave reviews on all your favorite (and not so favorite) restaurants without anyone knowing.</h3>
                            </div>
                        </div>
                        <div className="row mt-3" id="btn-row">
                            <button type="button" href="#" data-toggle="modal" data-target="#loginModal" role="button" className="btn rounded-pill btn-lg btn-block mb-2" id="login-btn-2"><span className="btn-span-op">LOG IN</span></button>
                            <button type="button" href="#" data-toggle="modal" data-target="#signUpModal" role="button" className="btn rounded-pill btn-lg btn-block" id="signUp-btn-2">Sign Up</button>
                        </div>
                        <div className="row" id="arrow-div">
                            <div className="col text-center text-white">
                                <a className="btn" href="#sect-header-1" id="more-btn">
                                    <i className="fas fa-chevron-down fa-3x"></i>
                                </a>
                            </div>
                        </div>       
                    </div>
                </div>
            </div>


            <section className="text-white" id="sect-header-1">
                <div className="container">
                    <div className="row">
                        <div className="col text-center py-5">
                            <h1 className="display-4">Why Use Bites</h1>
                            <p className="lead">
                            Bites allows you to keep track of all of your favorite foods and restaurants. If you liked or hated your last meal out, Bites will remember and allow you to filter based on your history.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5 info-sections" id="sect-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-2">
                            <img src={Section1} alt="" className="img-fluid mb-3"/>
                        </div>
                        <div className="col-md-6 order-1">
                            <h3>Reason Number 1</h3>
                            <p>You get to rate your favorite eats! Keep track of the last time that meal hit the perfect spot or the last time you had a bad experience. Bites will save and store your information every time you go out to eat. 
                            </p>
                            <div className="d-flex">
                                <div className="p-4 align-self-start">
                                    <i className="fas fa-check fa-2x"></i>
                                </div>
                                <div className="p-4 align-self-end">
                                With our location mapping, you get to search for the restaurants you want to keep track of. If you liked your last meal, we will let you know about similar foods in the area. Maybe you will find a new place you’ve never been to?
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-4 align-self-start">
                                    <i className="fas fa-check fa-2x"></i>
                                </div>
                                <div className="p-4 align-self-end">
                                If you went to a restaurant and hated it, we will make sure you don’t have that experience again. This works great for picky eaters. It’s easy to find if a restaurant doesn’t serve gluten-free, vegetarian/vegan options, or other dietary restrictions.
                                </div>
                            </div>
                        </div>                
                    </div>
                </div>
            </section>

    

            <section id="sect-header-2" className="">
                <div className="container">
                    <div className="row">
                        <div className="col text-center py-5">
                            <h1 className="display-4">Private and Discrete</h1>
                            <p className="lead">
                            With Bites, your account in personal and private. Don’t worry about hurting anyone’s feelings if you had a crappy experience at your local pub one night. All the locations you’ve been and rated meals will be stored in your account ONLY and will not be shared online.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5 info-sections" id="sect-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Share} alt="" className="img-fluid mb-3"/>
                        </div>
                        <div className="col-md-6">
                            <h3>Reason Number 2</h3>
                            <p> Sick and tired of going to the same place to eat every weekend? Bites will help you find your new favorite place to eat.
                            </p>
                            <div className="d-flex">
                                <div className="p-4 align-self-start">
                                    <i className="fas fa-check fa-2x"></i>
                                </div>
                                <div className="p-4 align-self-end">
                                Enter what you are in the mood for and Bites will use your location to give you the best results!
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-4 align-self-start">
                                    <i className="fas fa-check fa-2x"></i>
                                </div>
                                <div className="p-4 align-self-end">
                                Make return trips to places you love or become the go to person to give recomendations to friends and family. 
                                </div>
                            </div>
                        </div>                
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomeBody;