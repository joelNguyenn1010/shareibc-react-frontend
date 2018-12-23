import React from 'react'
import './Details.css'
import { Progress } from 'mdbreact'
const Details = (props) => {
    return (
        <div className="d-flex flex-column justify-content-between h-100 ">
            <div className="p-2"><h1 className="project-title">{props.name}</h1></div>
            <div className="p-2">
                <div className="row">
                    <div className="col-4"><p>Location: {props.location}</p> </div>
                    <div className="col-4"><p>Area: {props.area}</p></div>
                    <div className="col-4"><p>Target: {props.target_fund}</p> </div>
                </div>
            </div>
            <div className="p-2">
                <p className="w-100 h-100">Completion: {props.target}%</p>
                <Progress value={Number(props.target)} />
            </div>
        </div>
    )
}
export default Details