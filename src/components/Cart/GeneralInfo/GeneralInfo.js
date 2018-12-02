import React from 'react'



class GeneralInfo extends React.Component {
    items = () => {
        return(
            <li className="list-group-item">{this.items()}</li>
        )
    }
    render() {
        return (
            <div className="border">
                <div class="card-header">
                    <h1>General Info</h1>
                </div>
                <div className="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Total product: {this.props.total}</li>
                        <li class="list-group-item">Total price: {this.props.totalprice}</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default GeneralInfo