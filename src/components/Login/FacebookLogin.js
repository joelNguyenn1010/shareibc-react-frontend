import React from 'react'
import { FacebookLogin } from 'react-facebook-login-component';


const FacebookLoginButton = (props) =>{
    return(
        // <FacebookLogin
        // appId="228261734554790"
        // fields="name,email,picture"
        // cssClass="btn btn-primary mx-auto mt-3 mb-3 btn-block"
        // icon="fa-facebook mr-2"
        // // onClick={props.onClickFacebook}
        // callback={props.responseFacebook} />

        <FacebookLogin socialId={process.env.REACT_APP_FACEBOOK_API}
        language="en_US"
        scope="public_profile,email"
        responseHandler={props.responseFacebook}
        xfbml={true}
        fields="id,email,name"
        version="v2.5"
        className="btn btn-primary mx-auto mt-3 mb-3 btn-block"
        buttonText="Login With Facebook"/>


    )
}

export default FacebookLoginButton