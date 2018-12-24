
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Product.css'
class Product extends React.Component {

    toDetail = () => {
        return (
            <NavLink to='/checkout' />
        );
    }

    render() {
        const style = {
            width: "18rem"

        }



        return (
            <React.Fragment>
            <section className="text-center mt-3 mb-3 " >
    
       
                <div className="col-lg-3 col-md-4 w-100 h-100 ">
                    <NavLink to={`/product/${this.props.id}`}>
                    <div className="card h-100 card-single" style={style} >
                        <div className="">
                            <img className="card-img-top" src={this.props.img} alt="Can't get image" />

                        </div>
                        <div className="card-body">
                            <h4 id="content" className="card-title">{this.props.name}</h4>
                        </div>
                        <div className="card-footer">
                        <div className="box">          
                            <p className="card-text">Company: {this.props.company}</p>
                            <p className="card-text">Price: ${this.props.price}</p>
                            <p className="card-text">Value: ${this.props.value}</p>
                        </div>
                        </div>
                    </div>
                    </NavLink>
                </div>
            </section>
        </React.Fragment>
        )
    }
}

export default Product
