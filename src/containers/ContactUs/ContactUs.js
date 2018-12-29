import React from 'react'
import SendMessage from './SendMessage/SendMessage'
import ContactUsInfo from './ContactUsInfo/ContactUsInfo'
const ContactUs = () => {
    return(
        <div className="container-fluid p-5">
            <div className="row">
           
                        <SendMessage />
                        <ContactUsInfo />
            </div>
        </div>
    )
}

export default ContactUs