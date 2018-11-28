
import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'

import './Product.css'
class Product extends React.Component {
    constructor(props) {
        super(props)
    }
    toDetail = () => {
        return (
            <NavLink to='/checkout' />
        );
    }

    render() {
        const style = {
            width: "14rem",

        }
        return (
            <React.Fragment>
                <section className="mx-auto mt-3 mb-3 ">
                    <div className="col-lg-3 col-md-4 w-100 h-100">
    
                        <div className="card h-100 card-single equal-height" onClick={this.toDetail} style={style} >
                            <div className="card-thumb">
                                <img src={this.props.img} alt="loading" />
                            </div>
                            <div className="card-body">
                            <NavLink to={`/product/${this.props.id}`}>
                                <h3 id="content" className="card-title">Name: {this.props.name}</h3>
                                <h6 className="card-subtitle text-muted">Company: {this.props.company}</h6>
                                </NavLink>
                                <div className="box">
                                    <div className="equal-height">
                                        <hr />
                                        <div className="pull-left card-info">
                                            <p className="card-text">Price: {this.props.price}</p>
                                            <p className="card-text">Value: {this.props.value}</p>
                                        </div>

                                        <div className="pull-right card-cart">
                                            <a href="#"><i className="fa fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </React.Fragment>
        )
    }
}

export default Product
