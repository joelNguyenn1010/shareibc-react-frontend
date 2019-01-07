import {LOAD_PROJECTS, ERROR_PROJECT} from '../actions/project-action'
const initialState = {
    projects: [
        // {
        //     name: "",
        //     fund: 0,
        //     image: "",
        //     target_fund: 0,
        //     area: "",
        //     about_this_project: "",
        //     location: "",
        //     images_project: [
        //         {
        //             name: "",
        //             images: ""
        //         }
        //     ]
        // }
    ],
    loader: true,
    mess: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                loader: false
            }
        case ERROR_PROJECT:
            return {
                ...state,
                loader: false,
                mess: action.payload
            }
        default:
            return state;
    }
}

export default reducer