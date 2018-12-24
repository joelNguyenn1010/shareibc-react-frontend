import React from 'react'
import './AboutProject.css'
const AboutProject = (props) => {
    return (
        <React.Fragment>
            <h1 className="custom-font-size-title">About this project</h1>
            <p className="paragraph custom-font-size">
                {props.about_this_project}
            </p>
        </React.Fragment>
    )
}
export default AboutProject