import React from 'react'
import SendMessage from './SendMessage/SendMessage'
import ContactUsInfo from './ContactUsInfo/ContactUsInfo'
const ContactUs = () => {
    return(
        <div className="container-fluid">
            <div className="row">
           
                        <SendMessage />
                        <ContactUsInfo />
            </div>
        </div>
    )
}

export default ContactUs