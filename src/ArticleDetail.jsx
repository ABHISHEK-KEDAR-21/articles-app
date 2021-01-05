import React from 'react'
import { Button, Container, Input, Segment } from 'semantic-ui-react'

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            header: props?.location?.state?.header,
            description: props?.location?.state?.description,
        }
    }

    render() {
        return (
            <div>
                <Segment>
                    <Button onClick={() => this.props.history.goBack()}>Go Back</Button>
                    <br />
                    <Container>
                        Header: <Input type='text' readOnly value={this.state.header}></Input>
                        <br />
                   Description:  <Input type='text' readOnly value={this.state.description}></Input>
                    </Container>
                </Segment>
            </div>
        )
    }
}
export default ArticleDetail