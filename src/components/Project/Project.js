import React from 'react'
import Loading from '../Loading/Loading'
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

        const mess = () => {return (
            <div className="w-100 mt-5 mb-5 text-center">
                <h1>{this.props.mess}</h1>
            </div>
        )
    }
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
                {this.props.loader === true ? <Loading loader={this.props.loader}/> : details}
                {mess}
                {this.props.mess.length > 0 ? mess() : ''}
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => (
    {
        projects: state.projectReducer.projects,
        loader: state.projectReducer.loader,
        mess: state.projectReducer.mess
    }
)


export default connect(mapStateToProps, projectAction)(Project)