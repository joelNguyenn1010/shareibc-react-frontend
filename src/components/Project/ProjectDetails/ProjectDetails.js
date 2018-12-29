import React from 'react'
import Details from './Details/Details'
import './ProjectDetails.css'
const ProjectDetails =(props) => {

    return (
        <div className="card m-4">
            <div className='card-body'>
                <div className="row">
                    <div className="col-sm-12 col-12 col-md-5 col-lg-5 col-xl-4">
                        <img src={props.project.image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm-12 col-12 col-md-7 col-lg-7 col-xl-8">
                        <Details 
                        name={props.project.name}
                        location={props.project.location}
                        target_fund={props.project.target_fund}
                        area={props.project.area}
                        target={Number((props.project.fund*100)/(props.project.target_fund)).toFixed(2)}
                        fund={props.project.fund}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
    
}



export default ProjectDetails