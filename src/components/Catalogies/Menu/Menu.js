import React from 'react'
import { connect } from 'react-redux'
import { apiFilter, on_loader } from '../../../store/actions/products-action'
import { Type } from './Type'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class Menu extends React.Component {

    // onFilter = (type) => {
    //     this.props.on_loader()
    //     this.props.apiFilter(type)
    // }

    render() {
       
        return (
            <React.Fragment>


                <MDBDropdown size="sm">
                    <MDBDropdownToggle caret color="dark">
                        {this.props.sortTitle}
      </MDBDropdownToggle>
                    <MDBDropdownMenu className="z-index-menu" basic>
                    <MDBDropdownItem onClick={() => this.props.onFilter(Type.ALL)}>All</MDBDropdownItem>
                        <MDBDropdownItem onClick={() => this.props.onFilter(Type.PRICE_ACS)}>Price   Lowest </MDBDropdownItem>
                        <MDBDropdownItem onClick={() => this.props.onFilter(Type.PRICE_DECS)}>Price   Highest</MDBDropdownItem>
                        <MDBDropdownItem onClick={() => this.props.onFilter(Type.NAME_ACS)}>Name   A-Z</MDBDropdownItem>
                        <MDBDropdownItem onClick={() => this.props.onFilter(Type.NAME_DECS)}>Name   Z-A</MDBDropdownItem>
                        <MDBDropdownItem onClick={() => this.props.onFilter(Type.VALUE_DECS)}>Value   Highest</MDBDropdownItem>
                        <MDBDropdownItem onClick={() => this.props.onFilter(Type.VALUE_ACS)}>Value   Lowest</MDBDropdownItem>

                    </MDBDropdownMenu>
                </MDBDropdown>



                {/* // <li className="nav-item dropdown"> */}
                {/* 
             <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">Sort By</button> */}

                {/* <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">Sort By</a> */}
                {/* <div className="dropdown-menu"> */}
                {/* <a className="dropdown-item" onClick={() => this.props.onFilter(Type.PRICE_ACS)}>Price - Lowest</a>
                <a className="dropdown-item" onClick={() => this.props.onFilter(Type.PRICE_DECS)}>Price - Highest</a>
                <a className="dropdown-item" onClick={() => this.props.onFilter(Type.NAME_ACS)}>Name - A-Z</a>
                <a className="dropdown-item" onClick={() => this.props.onFilter(Type.NAME_DECS)}>Name - Z-A</a>
                <a className="dropdown-item" onClick={() => this.props.onFilter(Type.VALUE_DECS)}>Value - Highest</a>
                <a className="dropdown-item" onClick={() => this.props.onFilter(Type.VALUE_ACS)}>Value - Lowest</a> */}
                {/* </div> */}
                {/* // </li> */}
            </React.Fragment>
        )
    }
}


const mapActionToProps = {
    on_loader,
    apiFilter
}
export default connect(null, mapActionToProps)(Menu)