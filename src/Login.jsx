import React from 'react'
import { Button, Input, Segment } from 'semantic-ui-react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount() {
        if (parseInt(sessionStorage.getItem('login') ?? 0) === 1) {
            this.props.history.push('/articles')
        }
    }
    render() {
        return (
            <div>
                <Segment textAlign='center'>
                    Username:<Input type='text' value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }}></Input>
                    <br />
                    Password:<Input type='password' value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }}></Input>
                    <br />
                    <Button onClick={() => { if (this.state.username === 'admin' && this.state.password === 'password') { this.props.history.push('/articles'); sessionStorage.setItem('login', 1); } }}>Login</Button>
                </Segment>
            </div>
        )
    }
}
export default Login