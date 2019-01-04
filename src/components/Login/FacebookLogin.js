import React from 'react'
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = (props) =>{
    return(
        <FacebookLogin
        appId="228261734554790"
        fields="name,email,picture"
        cssClass="btn btn-primary mx-auto mt-3 mb-3 btn-block"
        icon="fa-facebook mr-2"
        // onClick={props.onClickFacebook}
        callback={props.responseFacebook} />
    )
}

export default FacebookLoginButton