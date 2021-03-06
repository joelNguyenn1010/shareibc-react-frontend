import React from 'react'
import axios from 'axios'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class CitySort extends React.Component {
    state = {
        city: []
    }
 
    renderDropDownItem = () => {
        if (this.state.city.length > 0) {

        }
    }

    render() {
        const city = this.props.cities.map(city => {
            return (
                <MDBDropdownItem onClick={() => this.props.onChangeCity(city.name)} key={city.id}>
                {city.name}
                </MDBDropdownItem>
            )
        })
        return (
            <MDBDropdown size="sm">
                <MDBDropdownToggle caret color="dark">
                    {this.props.city}
</MDBDropdownToggle>
                <MDBDropdownMenu basic>
                    {city}
                    {/* <MDBDropdownItem onClick={() => this.props.onFilter(Type.ALL)}>All </MDBDropdownItem>
                <MDBDropdownItem onClick={() => this.props.onFilter(Type.PRICE_ACS)}>Price - Lowest </MDBDropdownItem>
                <MDBDropdownItem onClick={() => this.props.onFilter(Type.PRICE_DECS)}>Price - Highest</MDBDropdownItem>
                <MDBDropdownItem onClick={() => this.props.onFilter(Type.NAME_ACS)}>Name - A-Z</MDBDropdownItem>
                <MDBDropdownItem onClick={() => this.props.onFilter(Type.NAME_DECS)}>Name - Z-A</MDBDropdownItem>
                <MDBDropdownItem onClick={() => this.props.onFilter(Type.VALUE_DECS)}>Value - Highest</MDBDropdownItem>
                <MDBDropdownItem onClick={() => this.props.onFilter(Type.VALUE_ACS)}>Value - Lowest</MDBDropdownItem> */}

                </MDBDropdownMenu>
            </MDBDropdown>

        )
    }
}

export default CitySort