import React from 'react'
// import { connect } from 'react-redux'
// import { apiCarousel } from '../../store/actions/carousel-action'
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";
class Carousels extends React.Component {

    state = {
        picture: []
    }

    render() {
        // need to fix the image with active class
        const renderImages = this.props.images.map((image, index) => {
            // if(index === 0) {
            //     return (
            //         <div key={index} className="carousel-item active">
            //             <img className="d-block w-100" src={image.image} alt="Loading" />
            //         </div>
            //     )
            // } else {
            //     return (
            //         <div key={index} className="carousel-item">
            //             <img className="d-block w-100" src={image.image} alt="Loading" />
            //         </div>
            //     )
            // }
            return (


                <CarouselItem key={index} itemId={index + 1}>
                    <View>
                        <img className="d-block w-100" src={image.image} alt="Mattonit's item" />
                        <Mask overlay="black-light" />
                    </View>
                </CarouselItem>
            )

        })


        const style = {
            height: '42rem'
        }
        return (
            // <div style={style} id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

            //     <div className="carousel-inner">
            //         {/* <div className="carousel-item active">
            //             <img className="d-block w-100" src="http://138.197.12.138/media/carousels/Home_Images-download.jpeg" alt="Loading" />
            //         </div>
            //         <div className="carousel-item">
            //             <img className="d-block w-100" src="http://138.197.12.138/media/carousels/Home_Images-download.jpeg" alt="Loading" />
            //         </div>
            //         <div className="carousel-item">
            //             <img className="d-block w-100" src="http://138.197.12.138/media/carousels/Home_Images-download.jpeg" alt="Loading" />
            //         </div> */}
            //         {renderImages}
            //     </div>

            // </div>
            <Carousel style={style} activeItem={1} length={this.props.images.length} showControls={true} showIndicators={true} className="z-depth-1">
                <CarouselInner>
                {renderImages}
                </CarouselInner>
            </Carousel>
        )
    }
}
// const mapStateToProps = state => (
//     {
//         images: state.carouselReducer.carousel
//     }
// )

// const mapActionToProps = {
//     apiCarousel
// }

export default Carousels