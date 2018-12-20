import React from 'react'
import * as projectAction from '../../store/actions/project-action'
import {connect} from 'react-redux'
class Projects extends React.Component {
    componentDidMount(){
        this.props.apiProjectLoad()
    }
    render() {
        return(
            <h1>Prject</h1>
        )
    }
}
export default connect(null, projectAction)(Projects)