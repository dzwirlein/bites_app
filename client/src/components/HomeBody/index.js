import React from "react";
import "./style.css";
import Section1 from "./images/create-section1.jpg";
import Share from "./images/share-section1.jpg";


function HomeBody() {

    return(

    <div>
    
        <div class="jumbotron jumbotron-fluid mb-0">
        <div class="dark-overlay">
            <div class="jumbo-inner container">
                <div class="row">
                    <div class="col text-center">
                        <h1 class="display-2 text-white" id="slogan">Take a Bite,<br/> Leave No Crumbs</h1>
                        <h3 class="text-white mx-auto" id="slogan-text">Leave reviews on all your favorite (and not so favorite) restaurants without anyone knowing.</h3>
                    </div>
                </div>
                <div class="row mt-3" id="btn-row">
                    <button type="button" href="#" data-toggle="modal" data-target="#loginModal" role="button" class="btn rounded-pill btn-lg btn-block mb-2" id="login-btn-2"><span class="btn-span-op">LOG IN</span></button>
                    <button type="button" href="#" data-toggle="modal" data-target="#signUpModal" role="button" class="btn rounded-pill btn-lg btn-block" id="signUp-btn-2">Sign Up</button>
                </div>
                <div class="row" id="arrow-div">
                    <div class="col text-center text-white">
                        <a class="btn" href="#sect-header-1" id="more-btn">
                            <i class="fas fa-chevron-down fa-3x"></i>
                        </a>
                    </div>
                </div>       
            </div>
        </div>
    </div>


    <section class="text-white" id="sect-header-1">
        <div class="container">
            <div class="row">
                <div class="col text-center py-5">
                    <h1 class="display-4">Why Use Bites</h1>
                    <p class="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam fugiat veniam sapiente ipsam mollitia pariatur minus, ea, accusantium est laudantium alias, amet tenetur aspernatur ipsa nostrum similique accusamus dolor.
                    </p>
                </div>
            </div>
        </div>
    </section>


    <section class="py-5 info-sections" id="sect-1">
        <div class="container">
            <div class="row">
                <div class="col-md-6 order-2">
                    <img src={Section1} alt="" class="img-fluid mb-3"/>
                </div>
                <div class="col-md-6 order-1">
                    <h3>Reason Number 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor atque a adipisci sapiente sequi odio aperiam eveniet doloribus dolore corporis beatae commodi maiores vero reprehenderit aut voluptatibus, delectus iste!.
                    </p>
                    <div class="d-flex">
                        <div class="p-4 align-self-start">
                            <i class="fas fa-check fa-2x"></i>
                        </div>
                        <div class="p-4 align-self-end">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt commodi, tenetur nihil maiores dolorem at reiciendis eaque officia laudantium repellat, veniam, sapiente reprehenderit eius iusto alias placeat? Assumenda, fuga!
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="p-4 align-self-start">
                            <i class="fas fa-check fa-2x"></i>
                        </div>
                        <div class="p-4 align-self-end">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt commodi, tenetur nihil maiores dolorem at reiciendis eaque officia laudantium repellat, veniam, sapiente reprehenderit eius iusto alias placeat? Assumenda, fuga!
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </section>

   

    <section id="sect-header-2" class="">
        <div class="container">
            <div class="row">
                <div class="col text-center py-5">
                    <h1 class="display-4">More Info About Bites</h1>
                    <p class="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam fugiat veniam sapiente ipsam mollitia pariatur minus, ea, accusantium est laudantium alias, amet tenetur aspernatur ipsa nostrum similique accusamus dolor.
                    </p>
                </div>
            </div>
        </div>
    </section>


    <section Class="py-5 info-sections" id="sect-2">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src={Share} alt="" class="img-fluid mb-3"/>
                </div>
                <div class="col-md-6">
                    <h3>Reason Number 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor atque a adipisci sapiente sequi odio aperiam eveniet doloribus dolore corporis beatae commodi maiores vero reprehenderit aut voluptatibus, delectus iste!.
                    </p>
                    <div class="d-flex">
                        <div class="p-4 align-self-start">
                            <i class="fas fa-check fa-2x"></i>
                        </div>
                        <div class="p-4 align-self-end">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt commodi, tenetur nihil maiores dolorem at reiciendis eaque officia laudantium repellat, veniam, sapiente reprehenderit eius iusto alias placeat? Assumenda, fuga!
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="p-4 align-self-start">
                            <i class="fas fa-check fa-2x"></i>
                        </div>
                        <div class="p-4 align-self-end">
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