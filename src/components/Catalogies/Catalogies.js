import React from 'react'
import Search from './Search/Search'
import Menu from './Menu/Menu'
class Catalogies extends React.Component {
    onSortPriceLow = (order) =>{
        
    }
    render() {

        return (
            <div className="mx-0 px-0">
                <nav className="navbar navbar-expand-lg navbar-dark primary-color mb-5">
                    <div className="container">
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse ml-5" id="navbarSupportedContent1">

                            <ul className="navbar-nav mr-auto">
                                <Menu onSortPriceLow={this.onSortPriceLow} />
                            </ul>

                            <Search />
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Catalogies