import React from 'react'
const GeneralInfo = (props) => {
    return (
        <div className="border">
            <div class="card-header">
                <h1>General Info</h1>
            </div>
            <div className="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Total product: {props.total}</li>
                    <li class="list-group-item">Total price: {props.totalprice}</li>
                </ul>
            </div>
        </div>
    )
}
export default GeneralInfo