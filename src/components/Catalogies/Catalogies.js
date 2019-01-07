import React from 'react'
import Search from './Search/Search'
import Menu from './Menu/Menu'
import './Catalogies.css'
import axios from 'axios'

import CitySort from './CitySort/CitySort'
import { Type } from './Menu/Type'
import { connect } from 'react-redux'
import * as productAction from '../../store/actions/products-action'
class Catalogies extends React.Component {
    state = {
        searchKey: '',
        filterType: '',
        sortTitle: 'All',
        city: 'City',
        cities: []
    }
    onSearch = async (key) => {
        this.props.on_loader()
        this.props.apiSearch(key)
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
        this.setState({ city })
        this.props.apiCity(city)
    }

    onFilter = (type) => {

        this.onChangeTitle(type)
        this.props.apiFilter(type)
    }

    // onAPISearch = () => {
    //     this.props.on_loader()
    // }
    componentDidMount(){
        this.props.apiFetchCity()
    }

    renderFilterSearch = () => {
        if (window.location.pathname === '/products') {
            return (
                <React.Fragment>
                    <div className="text-center">
                        <h1 className="responsive-text-catalogies">
                            All right will be donated to social and enviromental projects
                    </h1>
                    </div>
                    <div className="row mx-0">
                        <div className="col-lg-9 col-12">
                            <Search
                                onSearch={this.onSearch} />
                        </div>
                        <div className="col-lg-2 col-12 d-flex justify-content-center">
                            <Menu onFilter={this.onFilter} sortTitle={this.state.sortTitle} />

                        </div>
                        <div className="col-lg-1 col-12 d-flex justify-content-center">
                            <CitySort
                            cities={this.props.cities}
                                city={this.state.city}
                                onChangeCity={this.onChangeCity} />
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }



    render() {
        return (
            <React.Fragment>

                <div className="transform_filter position__catalogies">
                    {this.renderFilterSearch()}
                    <div className='text-center'>
                        <h1 className="font-weight-bold">{this.props.pageTitles}</h1>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        page: state.productReducer.page,
        type: state.productReducer.type,
        search: state.productReducer.search,
        cities: state.productReducer.citiesFetch
    }
}
export default connect(mapStateToProps, productAction)(Catalogies)