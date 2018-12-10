import React from 'react'
import { connect } from 'react-redux'
import { apiCarousel } from '../../store/actions/carousel-action'
class Carousel extends React.Component {

    state = {
        picture: []
    }
    componentDidMount() {
        this.props.apiCarousel()
    }


    render() {
        // need to fix the image with active class
        const renderImages = this.props.images.map(image => {
                return (
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={image.images} alt="Loading" />
                    </div>
                )
            })


        const style = {
            height: '42rem'
        }
        return (
            <div style={style} id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                    {/* <div className="carousel-item active">
                        <img className="d-block w-100" src="http://138.197.12.138/media/carousels/Home_Images-Free-Background-HD.jpg" alt="Loading" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="http://138.197.12.138/media/carousels/Home_Images-download.jpeg" alt="Loading" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="http://138.197.12.138/media/carousels/Home_Images-download.jpeg" alt="Loading" />
                    </div> */}
                    {renderImages}
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => (
    {
        images: state.carouselReducer.carousel
    }
)

const mapActionToProps = {
    apiCarousel
}

export default connect(mapStateToProps, mapActionToProps)(Carousel)