import React from 'react'



class GeneralInfo extends React.Component {
    // items = () => {
    //     return(
    //         <li className="list-group-item">{this.items()}</li>
    //     )
    // }
    render() {
        return (
            <div className="card border">
                <div className="card-header">
                    <h1>General Info</h1>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Total product: {this.props.total}</li>
                        <li className="list-group-item">Total price: {this.props.totalprice}</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default GeneralInfo