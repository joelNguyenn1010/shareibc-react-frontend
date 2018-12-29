import React from 'react'
import Jumbotron from './Jumbotron/Jumbotron'
import Images from '../../containers/Home/Image/Home.jpg'
import Carousel from '../Carousel/Carousel'
import ProjectDetails from './ProjectDetails/ProjectDetails'
import { connect } from 'react-redux'
import * as projectAction from '../../store/actions/project-action'
import {NavLink} from 'react-router-dom'

class Project extends React.Component {
    componentDidMount() {
        this.props.apiProjectLoad()
    }
  
    render() {
        const images = [
            {
                image: Images
            }
        ]


        const details =  this.props.projects.map((project, index) => {
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
                {/* <Jumbotron /> */}
                <Carousel 
                images={images}
                pageTitles="Project"
                />
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