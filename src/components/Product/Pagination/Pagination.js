import React from 'react'
import { connect } from 'react-redux'
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";
import PageNumber from './PageNumber/PageNumber'
import * as productAction from '../../../store/actions/products-action'
import Pagination from "react-js-pagination";
import './Pagination.css'

class Paginations extends React.Component {
    // let page = props.page.map(count => {
    //     return (
    //         <MDBPageItem active>
    //         <MDBPageNav className="page-link">
    //           count <span className="sr-only">(current)</span>
    //         </MDBPageNav>
    //       </MDBPageItem>
    //     )
    // })
    onClickPage = (page) => {
        console.log(page)
        if(page > 0 && page <= this.props.page) {
            this.props.apiPage(page)
        }
        // this.props.apiSearchFilter('','',page)
        // console.log('defef')
    }

    renderPageNum = () => {
        var page = [];
        for (var i = 0; i < this.props.page; i++) {
            page.push(
                <PageNumber
                    key={i}
                    page={i + 1}
                    active={this.props.currentPage === i + 1 ? true : false}
                    onClickPage={this.onClickPage}
                />
            )

        }
        // console.log(page)
        return page

    }
    render() {



        return (
            <React.Fragment>
            <Pagination
            innerClass="pagination pg-blue pagination-circle justify-content-center"
            itemClass="page-item"
            linkClass="page-link page-link"
            linkClassFirst="hide-a-href"
            linkClassLast="hide-a-href"
            activeClass="active"
            activePage={this.props.currentPage}
            activeLinkClass="active"
            itemsCountPerPage={2}
            totalItemsCount={this.props.totalProduct}
            pageRangeDisplayed={5}
            firstPageText="First"
            lastPageText="Last"
            onChange={this.onClickPage}
          />

            {/* <MDBPagination circle className="justify-content-center">
                <MDBPageItem onClick={() => this.onClickPage(1)}>
                    <MDBPageNav className="page-link">
                        <span>First</span>
                    </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem onClick={() => this.onClickPage(this.props.currentPage-1)}>
                    <MDBPageNav className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </MDBPageNav>
                </MDBPageItem>

                {<this.renderPageNum />}

                <MDBPageItem onClick={() => this.onClickPage(this.props.currentPage+1)}>
                    <MDBPageNav className="page-link">
                        &raquo;
              </MDBPageNav>
                </MDBPageItem>
                <MDBPageItem onClick={() => this.onClickPage(this.props.page)}>
                    <MDBPageNav className="page-link">
                        Last
              </MDBPageNav>
                </MDBPageItem>
            </MDBPagination> */}
            </React.Fragment>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        page: state.productReducer.total_pages,
        currentPage: state.productReducer.page,
        totalProduct: state.productReducer.count,
    }
}

export default connect(mapStateToProps, productAction)(Paginations)
