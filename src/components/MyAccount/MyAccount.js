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
        }
    }

    handleSubmit = (e) => {
        console.log(e)
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/user/retrieve/', { headers: this.props.user.headers })
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
        console.log(this.state)

        return (
            <MDBCol size="12" md="8">
                <Loader loader={this.state.loader} />
                {this.state.loader === false ?
                <div className="card" style={{ marginTop: '15px' }}>
                    <div className="card-body">

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
