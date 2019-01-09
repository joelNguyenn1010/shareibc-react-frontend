import React from 'react'
import Loader from '../Loading/Loading'
import {
    MDBCol,
} from "mdbreact";
import { compose } from 'redux';
import { connect } from 'react-redux'
import axios from 'axios'
import { reduxForm, Field } from 'redux-form'
import * as field from '../../form-validation'
class MyAccount extends React.Component {
    state = {
        loader: true,
        user: {
            first_name: '',
            last_name: '',
            email: '',
            userprofile: {
                phone_number: ''
            }
        },
        mess: '',
        type: ''
    }

    handleSubmit = (e) => {
        this.setState({
            mess: '',
            type: ''
        })

        const data = e
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/user/update/`, data,{ headers: this.props.user.headers })
        .then(res => {
            if(res.status === 200) {
                this.setState({
                    mess: 'Success updated',
                    type: 'text-success'
                })
            } else {
                this.setState({
                    mess: 'Error, please try again',
                    type: 'text-danger'
                })
            }
        })
        .catch(error => {
            this.setState({
                mess: 'Error, please try again',
                type: 'text-danger'
            })
        })
    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/retrieve/`, { headers: this.props.user.headers })
            .then(res => {
                if (res.data) {
                    this.setState({
                        user: res.data,
                        loader: false
                    })
                }
            })
            .catch(error => {
                this.setState({
                    loader: true
                })
            })
    }
    render() {
        const { handleSubmit } = this.props

        return (
            <MDBCol size="12" md="8">
                <Loader loader={this.state.loader} />
                {this.state.loader === false ?
                <div className="card" style={{ marginTop: '15px' }}>
                    <div className="card-body">
                    <h1 className={this.state.type}>{this.state.mess}</h1>
                        <form onSubmit={handleSubmit(this.handleSubmit)} className="form-root needs-validation">
                            <div className="form-group">
                                <Field
                                    component={field.renderField}
                                    label="First Name"
                                    name="first_name"
                                    hint={this.state.user.first_name}
                                    className="w-100 p-4 form-control"
                                    onChange={(event) => this.setState({ username: event.target.value })} />
                                {/* <label >Password:</label> */}
                                {/* <input type="password" onChange={(event) => this.setState({ password: event.target.value })} /> */}
                            </div>

                            <Field
                                component={field.renderField}
                                label="Last Name"
                                className="w-100 p-4 mb-3 form-control"
                                hint={this.state.user.last_name}

                                name="last_name"
                                onChange={(event) => this.setState({ password: event.target.value })}
                            />

                            <Field
                                component={field.renderField}
                                label="Phone number"
                                className="w-100 p-4 mb-3 form-control"
                                hint={this.state.user.userprofile !== null ? this.state.user.userprofile.phone_number: ''}

                                name="userprofile.phone_number"
                                onChange={(event) => this.setState({ password: event.target.value })}
                            />


                            {/* <div className="text-center button-transform">
                                </div> */}
                                <button className="btn btn-outline-info">Set</button>
                        </form>


                    </div>
                </div> : ''
                }
            </MDBCol>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.userReducer
    }
}

export default compose(
    connect(mapStateToProps),
    reduxForm({
        form: 'user-info',
        validate: field.validate,
    })
)(MyAccount)
