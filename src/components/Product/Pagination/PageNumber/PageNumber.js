import React from 'react'
import {MDBPageItem, MDBPageNav} from 'mdbreact'
const PageNumber = (props) => {
    return (
        <MDBPageItem
            key={props.page}
            onClick={()=>{props.onClickPage(props.page)}}
            active={props.active}
    >
            <MDBPageNav className="page-link">
                {props.page}
            </MDBPageNav>
        </MDBPageItem>
    )
}

export default PageNumber