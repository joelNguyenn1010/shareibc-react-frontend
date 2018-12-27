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
        //     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        //     <div class="carousel-inner">
        //       <div class="carousel-item active">
        //         <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg" alt="First slide" />
        //       </div>
        //       <div class="carousel-item">
        //         <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg" alt="Second slide" />
        //       </div>
        //       <div class="carousel-item">
        //         <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg" alt="Third slide" />
        //       </div>
        //     </div>
        //     <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //       <span class="sr-only">Previous</span>
        //     </a>
        //     <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //       <span class="sr-only">Next</span>
        //     </a>
        //   </div>
     
            <Carousel activeItem={1} length={this.props.images.length} showControls={true} showIndicators={true} className="z-depth-1">
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