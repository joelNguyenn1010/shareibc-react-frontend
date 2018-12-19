import React from 'react'
import Search from './Search/Search'
import Menu from './Menu/Menu'
import {connect} from 'react-redux'
import {on_loader, apiSearchFilter} from '../../store/actions/products-action'
class Catalogies extends React.Component {
    state = {
        searchKey: '',
        filterType: ''
    }
    onSearch = (key) =>{
        this.setState({
            searchKey: key
        }, () => this.onAPISearch()
        )
    }
    onFilter = (type) => {
        this.setState({
            filterType: type
        }, () => this.onAPISearch()
        )
    }

    onAPISearch = () => {
        this.props.on_loader()
        this.props.apiSearchFilter(this.state.searchKey,this.state.filterType)
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
                                <Menu 
                                onFilter={this.onFilter} />
                            </ul>

                            <Search 
                            onSearch={this.onSearch}/>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
const mapActionToProps = {
    apiSearchFilter,
    on_loader
}
export default connect(null, mapActionToProps)(Catalogies)