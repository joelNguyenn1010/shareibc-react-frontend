import React from 'react'
import { connect } from 'react-redux'
import { apiFilter, on_loader } from '../../../store/actions/products-action'
import { Type } from './Type'
class Menu extends React.Component {

    // onFilter = (type) => {
    //     this.props.on_loader()
    //     this.props.apiFilter(type)
    // }

    render() {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">Sort By</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" onClick={() => this.props.onFilter(Type.PRICE_ACS)}>Price - Lowest</a>
                    <a className="dropdown-item" onClick={() => this.props.onFilter(Type.PRICE_DECS)}>Price - Highest</a>
                    <a className="dropdown-item"  onClick={() => this.props.onFilter(Type.NAME_ACS)}>Name - A-Z</a>
                    <a className="dropdown-item"  onClick={() => this.props.onFilter(Type.NAME_DECS)}>Name - Z-A</a>

                </div>
            </li>
        )
    }
}


const mapActionToProps = {
    on_loader,
    apiFilter
}
export default connect(null, mapActionToProps)(Menu)