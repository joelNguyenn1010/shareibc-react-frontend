import axios from "axios";

export const LOAD_PROJECTS = 'load:projects'

const load_project = (projects) => {
    return{
        type: LOAD_PROJECTS,
        payload: projects
    }
}

export const apiProjectLoad = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/project/')
    .then(res => {
        if(res.data && res.data.length > 0) {
            dispatch(load_project(res.data))
        }
    })
    .catch(error => console.log(error))
}