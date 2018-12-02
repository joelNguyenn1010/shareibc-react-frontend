import React from 'react'
import './MessageField.css'
class MessageField extends React.Component {
    state = {

    }

    submit = (e) => {
        e.preventDefault()


    }
    render() {
        return (
            <form className="mt-5" onSubmit={this.submit}>

                <label htmlFor="option-label">Type of inquiry: </label>
                <div className='option-box mb-4'>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" name="inquiry" id="general" />
                        <label class="custom-control-label" for="general">General</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" name="inquiry" id="payment" />
                        <label class="custom-control-label" for="payment">Payment</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" name="inquiry" id="registration" />
                        <label class="custom-control-label" for="registration">User Registration</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" name="inquiry" id="services" />
                        <label class="custom-control-label" for="services">Our Services</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" name="inquiry" id="career" />
                        <label class="custom-control-label" for="career">Career Oppotunities</label>
                    </div>
                </div>

                <label htmlFor="first_name">First Name *</label>
                <input type="text" required id="first_name" className="form-control mb-4 border p-3" />
                <label>Last Name *</label>
                <input required className="form-control mb-4 border p-3" />
                <label>Email *</label>
                <input required className="form-control mb-4 border p-3" />
                <label>Your message *</label>
                <textarea required className="form-control mb-4 border p-3" rows="12"></textarea>
                <button className='btn btn-primary float-right' type="submit">Send</button>
            </form>
        )
    }
}


export default MessageField