import React from 'react'
import Search from './Search/Search'
class Catalogies extends React.Component {
    render(){

        return(
            <div className="mx-0 px-0">
        <nav className="navbar navbar-expand-lg navbar-dark primary-color mb-5">
            <div className="container">
                <a href='/' className="font-weight-bold white-text mr-4">Categories</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent1">
                    <ul className="navbar-nav mr-auto">
 
                    </ul>
                    <Search onSearch={this.props.onSearch}/>
                    </div>
            </div>
        </nav>

    </div>

        )
    }
}

export default Catalogies