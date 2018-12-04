import React from 'react'
import './ContactUsInfo.css'
const ContactUsInfo = () => {
    return (
        <div className="col-md-6">
            <div className="mt-custom">
                <h1 className="text-center">Contact us</h1>
                <hr />
                <div className="card w-75 mx-auto">
                    <div className="card-body text-center">
                        <h4>contact@shareibc.com</h4>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <p className="font-upper">Ask our team how we can help</p>
                    <p className="font-upper">-> Advise about what we can improved, make complains or raise any idea about a project that is in need of fund</p>
                    <p className="font-upper">-> Become a partner and offer deal to give back to the society and environment.</p>
                    <p className="font-upper">-> Learn about career or get in touch with our shareibc team</p>
                </div>
            </div>
        </div>

    )
}

export default ContactUsInfo