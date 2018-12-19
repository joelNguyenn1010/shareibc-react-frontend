import React from 'react'
import CardDetails from '../CardDetails/CardDetails'
import ImageGallery from 'react-image-gallery';

const ProductInfo = (props) => {
    let images = [];
    if (props.state.product.images_product) {
        images = [
            {
                original: props.state.product.front_images,
                thumbnail: props.state.product.front_images,
                sizes: '100px',
                originalAlt: "Can't find image",

            }
        ]
        props.state.product.images_product.slice(0, 11).map(i => {
            let temp = {
                original: i.image,
                thumbnail: i.image,
            }
            images.push(temp)
        })

    }


    return (
        <React.Fragment>
            <div className="product-carousel">

                <ImageGallery
                    items={images}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    disableArrowKeys={true} />

            </div>

            <CardDetails
                toggle={props.toggle}
                product={props.state.product}
                add_cart={props.add_cart}
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
                <div className="tab-pane fade show active paragraph" id="description" role="tabpanel" aria-labelledby="home-tab">{props.state.product.description}</div>
                <div className="tab-pane fade paragraph" id="howtouse" role="tabpanel" aria-labelledby="profile-tab">{props.state.product.how_to_use}</div>
                {/* <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="contact-tab">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</div> */}
            </div>

        </React.Fragment>
    )
}

export default ProductInfo