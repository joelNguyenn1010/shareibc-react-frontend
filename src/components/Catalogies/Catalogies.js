import React from 'react'
import Search from './Search/Search'
import Menu from './Menu/Menu'
import './Catalogies.css'
import CitySort from './CitySort/CitySort'
import { Type } from './Menu/Type'
import { connect } from 'react-redux'
import * as productAction from '../../store/actions/products-action'
class Catalogies extends React.Component {
    state = {
        searchKey: '',
        filterType: '',
        sortTitle: 'All',
        city: 'City'
    }
    onSearch = async (key) => {
        // this.setState({
        //     searchKey: key
        // }, () => this.onAPISearch()
        // )
        this.props.on_loader()

        this.props.apiSearch(key)
        // if(key.length > 0) {
        //     this.props.apiSearch(key);
        // } else {
        //     this.props.apiSearchFilter('','', this.props.page)

        // }

    }

    onChangeTitle = (type) => {
        switch (type) {
            case Type.NAME_DECS:
                this.setState({ sortTitle: "Name - Z-A" })
                break;
            case Type.NAME_ACS:
                this.setState({ sortTitle: "Name - A-Z" })

                break;
            case Type.PRICE_DECS:
                this.setState({ sortTitle: "Price - Highest" })

                break;
            case Type.PRICE_ACS:
                this.setState({ sortTitle: "Price - Lowest" })
                break;
            case Type.VALUE_DECS:
                this.setState({ sortTitle: "Value - Highest" })

                break;
            case Type.VALUE_ACS:
                this.setState({ sortTitle: "Value - Lowest" })
                break;
            default:
                this.setState({ sortTitle: "All" })

        }
    }
    onChangeCity = (city) => {
        this.setState({city})
        this.props.apiCity(city)
    }

    onFilter = (type) => {
        // this.setState({
        //     filterType: type
        // }, () => this.onAPISearch()
        // )
        this.onChangeTitle(type)
        this.props.apiFilter(type)
    }

    // onAPISearch = () => {
    //     this.props.on_loader()
    // }




    render() {

        return (
            <React.Fragment>
                
                <div className="transform_filter position__catalogies">
                <div className="text-center">
                    <h1>
                    All profit will go to donation
                    </h1>
                </div>
                <div className="d-flex bd-highlight">
                    <div className="w-89 bd-highlight p-2">
                    <Search
                    onSearch={this.onSearch} />
                    </div>
                    <div className="flex-shrink-1 bd-highlight">
                    <Menu onFilter={this.onFilter} sortTitle={this.state.sortTitle} />

                    </div>
                    <div className="flex-shrink-1">
                    <CitySort 
                    city={this.state.city}
onChangeCity={this.onChangeCity}/>
                    </div>
                </div>
                </div>



                {/* <nav className="navbar navbar-expand-lg navbar-dark navbar-blue mb-5">
                    <div className="container">
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse ml-5" id="navbarSupportedContent1">

                            <ul className="navbar-nav mr-auto">
                         
                            </ul>


                        </div>
                    </div>
                </nav> */}
                {/* </div> */}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        page: state.productReducer.page,
        type: state.productReducer.type,
        search: state.productReducer.search
    }
}
export default connect(mapStateToProps, productAction)(Catalogies)