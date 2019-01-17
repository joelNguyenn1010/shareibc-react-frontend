import React from 'react'
import Carousel from '../../../Carousel/Carousel'
const Images = (props) => {
    // if (props.images) {
    let images = props.images.map((i, index) => {
           return (
                {
                    image: i.images
                }
            
        )
    })
    // }






    return (
        <React.Fragment>
            <Carousel
                images={images} />
            </React.Fragment>    
            )
}



export default Images
