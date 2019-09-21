import React from "react";
import "./style.css";
import Section1 from "./images/create-section1.jpg";
import Share from "./images/share-section1.jpg";


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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam fugiat veniam sapiente ipsam mollitia pariatur minus, ea, accusantium est laudantium alias, amet tenetur aspernatur ipsa nostrum similique accusamus dolor.
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor atque a adipisci sapiente sequi odio aperiam eveniet doloribus dolore corporis beatae commodi maiores vero reprehenderit aut voluptatibus, delectus iste!.
                    </p>
                    <div classNameName="d-flex">
                        <div className="p-4 align-self-start">
                            <i className="fas fa-check fa-2x"></i>
                        </div>
                        <div className="p-4 align-self-end">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt commodi, tenetur nihil maiores dolorem at reiciendis eaque officia laudantium repellat, veniam, sapiente reprehenderit eius iusto alias placeat? Assumenda, fuga!
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="p-4 align-self-start">
                            <i className="fas fa-check fa-2x"></i>
                        </div>
                        <div className="p-4 align-self-end">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt commodi, tenetur nihil maiores dolorem at reiciendis eaque officia laudantium repellat, veniam, sapiente reprehenderit eius iusto alias placeat? Assumenda, fuga!
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
                    <h1 className="display-4">More Info About Bites</h1>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam fugiat veniam sapiente ipsam mollitia pariatur minus, ea, accusantium est laudantium alias, amet tenetur aspernatur ipsa nostrum similique accusamus dolor.
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor atque a adipisci sapiente sequi odio aperiam eveniet doloribus dolore corporis beatae commodi maiores vero reprehenderit aut voluptatibus, delectus iste!.
                    </p>
                    <div className="d-flex">
                        <div className="p-4 align-self-start">
                            <i className="fas fa-check fa-2x"></i>
                        </div>
                        <div className="p-4 align-self-end">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt commodi, tenetur nihil maiores dolorem at reiciendis eaque officia laudantium repellat, veniam, sapiente reprehenderit eius iusto alias placeat? Assumenda, fuga!
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="p-4 align-self-start">
                            <i className="fas fa-check fa-2x"></i>
                        </div>
                        <div className="p-4 align-self-end">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt commodi, tenetur nihil maiores dolorem at reiciendis eaque officia laudantium repellat, veniam, sapiente reprehenderit eius iusto alias placeat? Assumenda, fuga!
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