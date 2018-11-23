import React from 'react'
import {NavLink} from 'react-router-dom'
import './Product.css'
const product = (props) => {
    console.log(props)
    const style = {
        width: "14rem",

    }
    return (
        <React.Fragment>
            <section className="mx-auto mt-3 mb-3 ">
            <div className="col-lg-3 col-md-4 w-100 h-100">
            <NavLink to={`/product/${props.id}`}>
                    <div className="card h-100 card-single" style={style} >
                        <div className="card-thumb">
                            <img src={props.img} alt="Can't get image" />
                        </div>
                        <div className="card-body">
                            <h3 id="content" className="card-title">Name: {props.name}</h3>
                            <h6 className="card-subtitle text-muted">Company: {props.company}</h6>
                            <hr />
                            <div class="pull-left card-info">
                                <p className="card-text">Price: {props.price}</p>
                                <p className="card-text">Value: {props.value}</p>
                            </div>
                            <div class="pull-right card-cart">
                                <a href="#"><i class="fa fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                    </NavLink>
                </div>
                {/* <div className="col-lg-3 col-md-4 w-100 h-100 ">
                    <NavLink to={`/product/${props.id}`}>
                    <div className="card h-100" style={style} >
                        <div className="">
                            <img className="card-img-top" src={props.img} alt="Can't get image" />

                        </div>
                        <div className="card-body">
                            <h4 id="content" className="card-title">{props.name}</h4>
                        </div>
                        <div className="card-footer">
                        <div className="box">
                            <div className="equal-height">
                            <p className="card-text">Company: {props.company}</p>
                            <p className="card-text">Price: {props.price}</p>
                            <p className="card-text">Value: {props.value}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </NavLink>
                </div> */}
            </section>
        </React.Fragment>
    )
}

export default product