import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Loading from '../../Loading/Loading'
import { add_to_card, delete_from_cart, set_quantity } from '../../../store/actions/cart-action'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardDetails from './CardDetails/CardDetails'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import "./Details.css"
class Details extends Component {
    state = {
        product: {},
        mess: '',
        loader: true
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/product/${this.props.match.params.id}/`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    product: res.data,
                    loader: false
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    set_quantity = () => {
        this.props.set_quantity(this.props.match.params.id, 2)
    }
    add_cart = () => {
        this.props.add_to_card(this.state.product)
    }

    delete_item = () => {
        this.props.delete_from_cart(this.state.product.id)
    }
    test = () => {
        return (
            <h1>Hellllloo</h1>
        )
    }

    renderDetails = () => {
        let images = [];
        if (this.state.product.images_product) {
            images = [
                {
                    original: this.state.product.front_images,
                    thumbnail: this.state.product.front_images,
                    sizes: '100px',
                    originalAlt: "Can't find image",
                    
                }
            ]
            this.state.product.images_product.slice(0, 11).map(i => {
                let temp = {
                    original: i.image,
                    thumbnail: i.image,
                }
                images.push(temp)
                //     return (
                //         <div>
                //             <img className="img-carousel" src={i.image} />

                //         </div>

                //     )
            })

        }

        console.log(images)

        // const images = [
        //     {
        //       original: 'http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel_Bt8yM71.jpeg',
        //       thumbnail: 'http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel_Bt8yM71.jpeg',
        //     },
        //     {
        //         original: 'http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel_Bt8yM71.jpeg',
        //         thumbnail: 'http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel_Bt8yM71.jpeg',
        //       },
        //       {
        //         original: 'http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel_Bt8yM71.jpeg',
        //         thumbnail: 'http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel_Bt8yM71.jpeg',
        //       }
        //   ]



        return (
            <React.Fragment>
                <div className="product-carousel">
                    {/* <Carousel
                        showStatus={false}
                        emulateTouch
                        showArrows={false}
                        useKeyboardArrows
                    >
                        {images}
                    </Carousel> */}



                    <ImageGallery 
                    items={images} 
                    showFullscreenButton={false}
                    showPlayButton={false}
                    disableArrowKeys={true}/>

                </div>


                <CardDetails
                    product={this.state.product}
                    add_cart={this.add_cart}
                />

                <ul className="nav nav-tabs nav-fill description" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="howtouse-tab" data-toggle="tab" href="#howtouse" role="tab" aria-controls="howtouse" aria-selected="false">How to use</a>
                    </li>
                    {/* <li className="nav-item">
                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
            </li> */}
                </ul>
                <div className="tab-content border p-3 description" id="myTabContent">
                    <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="home-tab">{this.state.product.description}</div>
                    <div className="tab-pane fade" id="howtouse" role="tabpanel" aria-labelledby="profile-tab">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</div>
                    {/* <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="contact-tab">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</div> */}
                </div>
            </React.Fragment>
        )
    }
    render() {


        return (
            <div className="container">
                <Loading loader={this.state.loader} />
                {this.state.loader === false ? this.renderDetails() : ""}


            </div >

        )
    }
}

const mapStateToProps = state => (
    {
        product: state.cartReducer.products
    }
)

const mapActionsToProps = {
    add_to_card,
    delete_from_cart,
    set_quantity,
}

export default connect(mapStateToProps, mapActionsToProps)(Details)