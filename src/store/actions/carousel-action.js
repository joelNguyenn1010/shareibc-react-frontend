import axios from 'axios'
export const DOWNLOAD_CAROUSEL = "download:carousel"
export const ERROR_CAROUSEL = "error:carousel"

export function download_carousel(carousel){
    return {
        type: DOWNLOAD_CAROUSEL,
        payload: {
            carousel
        }
    }
}

export function error_carousel(){
    return {
        type: ERROR_CAROUSEL,
    }
}

export function apiCarousel(){
    return dispatch => {
        axios.get('http://138.197.12.138/api/carousel/')
        .then(res => {
            dispatch(download_carousel(res.data))
        })
        .catch(error => dispatch(error_carousel))
    }
}