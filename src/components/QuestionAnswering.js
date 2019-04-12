import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleVote } from '../actions/shared'
import { Row, Col, Button, FormGroup, Label, Input,  Card, 
  CardHeader, CardBody } from 'reactstrap'

class QuestionAnswering extends Component {

  state = {
    selection: null,
    disabled: true
  }

  handleSubmit = (e) => {
    
    e.preventDefault()
    
    const { dispatch, authedUser, question } = this.props
    const answer = this.state.selection
    
    if (answer) {
      dispatch(handleVote(authedUser, question.id, answer))
    }
  }

  handleChange = (e) => {
    this.setState({
      selection: e.target.value,
      disabled: false
    })
  }


  renderForm = () => {

    const { question } = this.props
    const { disabled } = this.state

   return(<form onSubmit={this.handleSubmit}>
       <FormGroup tag="fieldset">
          <legend>Awnser A Question</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" 
                 onChange={this.handleChange}
                name="opts"
                value="optionOne" />{question.optionOne.text}
              Question 1
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" 
                onChange={this.handleChange}
                name="opts"
                value="optionTwo" />{question.optionTwo.text}
               Question 2
            </Label>
          </FormGroup>
      </FormGroup>
      <Button className="ButtonCard" color="primary"
        disabled={this.state.disabled}
        type="submit" bsStyle="info">
        Enter
      </Button>
    </form>)
  }





  render() {

     const { author } = this.props

        return (
          <Row>
           <Col sm="12" >
            <Card style={{ color: '#333' }}>
            <CardHeader> Asked by {author.name}</CardHeader>
              <CardBody>
              <img src={author.avatarURL} alt="..." className="w-100 h-100 rounded-top rounded-bottom" />        
                  {this.renderForm()}      
              </CardBody>
            </Card>
            </Col>
          </Row>
        );
    }
}



function mapStateToProps ({ authedUser }) {
  return { authedUser }
}

export default connect(mapStateToProps)(QuestionAnswering)