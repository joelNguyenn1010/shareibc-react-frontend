import React from 'react'
import ProjectDetails from '../../ProjectDetails/ProjectDetails'
import Images from './Images'
import AboutProject from './AboutProject/AboutProject'


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
                    <button className="btn btn-primary" >Share this on Facebook</button>
                </div>

                <hr />
                <AboutProject
                    about_this_project={props.project.about_this_project} />
            </div>

        </React.Fragment>
    )
}
export default Info