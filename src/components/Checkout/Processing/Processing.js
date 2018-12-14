import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ClipLoader } from 'react-spinners';
import Loading from '../../Loading/Loading'

const Processing = (props) => {
    return (
        <Dialog
            open={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <h1 className="text-center text-info">
                    Please be patient whilte we processing your order
                    </h1>

                <div className="container">
                    <Loading loader={true} />
                </div>
            </DialogContent>

        </Dialog>
    )
}

export default Processing