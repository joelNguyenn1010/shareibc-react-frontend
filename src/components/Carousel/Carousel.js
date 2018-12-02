import React from 'react'
const Carousel = () => {
    const style = {
        height: '42rem'
    }
    return (
        <div style={style} id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="http://138.197.12.138/media/background/sydney_5.jpg" alt="Loading" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="http://138.197.12.138/media/background/sydney_5.jpg" alt="Loading" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="http://138.197.12.138/media/background/sydney_5.jpg" alt="Loading" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel