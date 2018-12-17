import React from 'react'
import { NavLink } from 'react-router-dom'
import CartTable from '../../../Cart/CartTable/CartTable'
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

const CartModal = (props) => {
    return (
        //   <div class="modal fade right" id="fullHeightModalRight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

        //   <div class="modal-dialog modal-full-height modal-right" role="document">


        //     <div class="modal-content">
        //       <div class="modal-header">
        //         <h4 class="modal-title w-100" id="myModalLabel">Modal title</h4>
        //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        //           <span aria-hidden="true">&times;</span>
        //         </button>
        //       </div>
        //       <div class="modal-body">
        //         <CartTable />
        //       </div>
        //       <div class="modal-footer justify-content-center">
        //         <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close</button>
        //         <NavLink to='/checkout' className="btn btn-primary" >Checkout</NavLink>
        //       </div>
        //     </div>
        //   </div>
        //   </div>
        <React.Fragment>
            <Modal isOpen={props.modal} toggle={() => props.toggle()} fullHeight position="right">
                <ModalHeader toggle={() => props.toggle()}>Cart</ModalHeader>
                <ModalBody>
                    <CartTable />
                </ModalBody>
                <ModalFooter>
                    <Button color="outline-primary" onClick={() => props.toggle()}>Close</Button>
                    <NavLink to='/checkout' className="btn btn-primary" >Checkout</NavLink>

                    {/* <Button color="primary">Save changes</Button> */}
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}

export default CartModal