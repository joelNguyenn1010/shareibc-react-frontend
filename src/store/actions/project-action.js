import axios from "axios";

export const LOAD_PROJECTS = 'load:projects'
export const ERROR_PROJECT = 'error:projects'

const load_project = (projects) => {
    return{
        type: LOAD_PROJECTS,
        payload: projects
    }
}

const error_project = (mess) => {
    return {
        type: ERROR_PROJECT,
        payload: mess
    }
}

export const apiProjectLoad = () => dispatch => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/project/`)
    .then(res => {
        if(res.data && res.data.length > 0) {
            dispatch(load_project(res.data))
        } else {
            dispatch(error_project("There currently no project available"))
        }
    })
    .catch(error => dispatch(error_project("Server Error")))
}