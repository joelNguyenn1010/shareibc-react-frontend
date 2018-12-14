import React, { Component } from 'react'
import "./Home.css"
import axios from 'axios'


class Home extends Component {
    componentDidMount() {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im5ndXllbm5nb2Nhbmg1OTBAZ21haWwuY29tIiwiZXhwIjoxNTQ0Njc1MTEwLCJlbWFpbCI6Im5ndXllbm5nb2Nhbmg1OTBAZ21haWwuY29tIn0.gjCOCmnanc9nmGGI2QTLAoGeg8YRdS_Hxxou6hpz8OE`
        }

        axios.get("http://127.0.0.1:8000/api/user/verify", {headers})
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    }

    render() {
        const style = {
            backgroundImage: "url('http://138.197.12.138/media/background/sydney_5.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: '100%',
            width: '100%'
        }
        return (
            <div className="Home w-100 h-100" >
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="views darken-theme" style={style}></div>
                        </div>
          


                        {/* <div className="carousel-item">
                            <img className="d-block w-100 h-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 h-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg" alt="Third slide" />
                        </div> */}

                    </div>


                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Home