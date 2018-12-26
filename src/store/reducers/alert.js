import { FLASH_ALERT, CLEAR_ALERT } from "../actions/alert-action";

const initialState = {
    mess: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FLASH_ALERT:
            return {
                ...state,
                mess: action.payload.mess,
                alert: "alert-warning"
            }
        case CLEAR_ALERT:
            return {
                ...state,
                mess: ''
            }
        default:
            return state;
    }
}

export default reducer