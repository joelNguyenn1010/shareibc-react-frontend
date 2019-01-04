import axios from "axios";

export const LOAD_PROJECTS = 'load:projects'

const load_project = (projects) => {
    return{
        type: LOAD_PROJECTS,
        payload: projects
    }
}

export const apiProjectLoad = () => dispatch => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/project/`)
    .then(res => {
        if(res.data && res.data.length > 0) {
            dispatch(load_project(res.data))
        }
    })
    .catch(error => console.log(error))
}