import React, { Component } from 'react'
import Background from './Image/Home.jpg'
import { Link } from 'react-router-dom'
import "./Home.css"
import axios from 'axios'


class Home extends Component {

    render() {
        const style = {
            backgroundImage: `url('${Background}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: '100%',
            width: '100%'
        }
        return (
            <div className="Home w-100 h-100" >
                <div id="carouselExampleControls" className="carousel slide w-100 h-100" data-ride="carousel">
                    <div className="carousel-inner w-100 h-100">
                        <div className="carousel-item w-100 h-100 active">
                            <div className="views darken-theme" style={style}>
        
                            </div>

                            <div className="carousel-caption transform__home__button">
                            <h1>Better Lifestyle, Better World</h1>
                                    <Link to='/products' className="btn btn-lg btn-elegant mx-shop">Shop</Link>
                                    <Link to='/projects' className="btn btn-lg btn-elegant mx-project">Projects</Link>
                                </div>


                        </div>


                    </div>


                    {/* <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a> */}
                </div>
            </div>
        )
    }
}

export default Home