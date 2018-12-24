import React from 'react'
import axios from 'axios'
import Loading from '../../Loading/Loading'
import Info from './Info/Info'
import NotFound404 from '../../NotFound404/NotFound404'
class ProjectInfo extends React.Component {
    state = {
        projects: [],
        loader: true,
        mess: '',
        status: ''
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/project/${this.props.match.params.id}/`)
            .then(res => {
                if(res.data && res.data.length > 0) {
                    this.setState({
                        projects: res.data,
                    })
                } else {
                    this.setState({
                        mess: "Can't find project 404",
                        status: '404'
                    })
                }
                
            })
            .catch(error => {
                this.setState({
                    mess: "Server error",
                    status: '500'

                })
            })
            .then(()=> this.setState({loader: false}))
    }


    render() {
        return (
            <React.Fragment>
            <Loading loader={this.state.loader} />
            
            {this.state.projects.length <= 0 ? <NotFound404 
            mess={this.state.mess}
            status={this.state.status}
            /> : <Info 
            project={this.state.projects[0]}
            /> }
   
        </React.Fragment >
        )
    }
}

export default ProjectInfo