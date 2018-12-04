import React from 'react'
import MessageField from './MessageField/MessageField'
const SendMessage = () => {
    return (
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <h1>SEND US A MESSAGE</h1>
                    <MessageField />

                    
                </div>
            </div>
        </div>

    )
}

export default SendMessage