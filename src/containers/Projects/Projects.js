import React from 'react'
import * as projectAction from '../../store/actions/project-action'
import {connect} from 'react-redux'
import Project from '../../components/Project/Project'
class Projects extends React.Component {
    render() {
        return(
            <Project />
        )
    }
}
export default Projects