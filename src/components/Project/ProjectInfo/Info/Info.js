import React from 'react'
import ProjectDetails from '../../ProjectDetails/ProjectDetails'
import Images from './Images'
import AboutProject from './AboutProject/AboutProject'
import {
    FacebookShareButton} from 'react-share'


const Info = (props) => {
    console.log(props)
    return (

        <React.Fragment>
            <Images
                images={props.project.images_project}
            />



            <div className="container">
                <ProjectDetails
                    project={props.project}
                />
                <div className="m-4 d-flex flex-row-reverse justify-content-between">
                    <button className="btn btn-primary">Donate</button>
                    <FacebookShareButton 
                    className="btn btn-primary"
                    url={window.location.href}
                    >Share this on Facebook</FacebookShareButton>
                </div>

                <hr />
                <AboutProject
                    about_this_project={props.project.about_this_project} />
            </div>

        </React.Fragment>
    )
}
export default Info