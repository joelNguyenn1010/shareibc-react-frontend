import React from 'react'
// import { connect } from 'react-redux'
// import { apiCarousel } from '../../store/actions/carousel-action'
import './Carousel.css'
import Catalogies from '../Catalogies/Catalogies'
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";
class Carousels extends React.Component {

    state = {
        picture: []
    }
    Caption = () => {
        if( window.location.pathname === '/products') {
            return(
                   <Catalogies />
            )
        }
    }
    render() {
        // need to fix the image with active class
        const renderImages = this.props.images.map((image, index) => {
            let style = {
                backgroundImage: `url(${image.image})`
            }
            if(index === 0) {
                return (
                    <div key={index} className="carousel-item active" >
                        <div className="view" alt="First slide">
                        <img className="d-block w-100" src={image.image} alt="Loading" />
                        </div>
                    </div>
                )
            } else {
                return (
                    <div key={index} className="carousel-item">
                        <img className="d-block w-100 carousel__image" src={image.image} alt="First slide" />
                    </div>

                )
            }
            // return (
                // <CarouselItem key={index} itemId={index + 1}>
                //     <View>
                //         <img className="d-block w-100" src={image.image} alt="Mattonit's item" />
                //         <Mask overlay="black-light" />
                //     </View>
                // </CarouselItem>
            // )

        })

      
        const style = {
            height: '62vh'
        }
        return (
            <React.Fragment>
                <div id="carouselExampleControls" class="carousel slide carousel__half" data-ride="carousel">
                <div class="carousel-inner">
                    {renderImages}
                </div>
            
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <div className="catalogies-position">
              {this.Caption()}
              </div>

</React.Fragment>
            // <div className="row">
            // <section > 
            //     {/* <div className="col-md-6"> */}
            //         <Carousel activeItem={1} length={this.props.images.length} showControls={true} showIndicators={true} className="z-depth-1">
            //             <CarouselInner>
            //                 {renderImages}
            //             </CarouselInner>
            //         </Carousel>
            //     {/* </div> */}
            // {/* </div> */}
            // </section>
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