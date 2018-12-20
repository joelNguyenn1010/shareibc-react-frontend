import {LOAD_PROJECTS} from '../actions/project-action'
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
    ]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        default:
            return state;
    }
}

export default reducer