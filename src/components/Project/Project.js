import React from 'react'
import Jumbotron from './Jumbotron/Jumbotron'
import ProjectDetails from './ProjectDetails/ProjectDetails'
import { connect } from 'react-redux'
import * as projectAction from '../../store/actions/project-action'
import {NavLink} from 'react-router-dom'

class Project extends React.Component {
    componentDidMount() {
        this.props.apiProjectLoad()
    }
  
    render() {
        const details =  this.props.projects.map((project, index) => {
            console.log(project)
            return(
                <NavLink key={project.id} to={`/projects/${project.id}`}>

                <ProjectDetails 
                project={project}
                />
                 </NavLink>
            )
        })
        return (
            <React.Fragment>
                <Jumbotron />
                {details}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => (
    {
        projects: state.projectReducer.projects
    }
)


export default connect(mapStateToProps, projectAction)(Project)