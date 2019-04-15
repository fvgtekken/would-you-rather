import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../../actions/shared.js'
import { Row, Col, Button, FormGroup, Input, Card, CardTitle,
  CardHeader, CardBody } from 'reactstrap'

class NewQuestion extends Component {

 defaultState =  {
    optionOneText: '',
    optionTwoText: '',
    disabled: true,
    toHome: false
  }
  state = this.defaultState

  handleChange = (e) => {

    const optionText = e.target.id
    const text = e.target.value

    this.setState({
      [optionText]: text
    }, () => {
      this.state.optionOneText && this.state.optionTwoText
        ? this.setState({ disabled: false })
        : this.setState({ disabled: true })
    })
  

  }

  handleSubmit = (e) => {


    e.preventDefault()
    const { state: { optionOneText, optionTwoText}, props: { authedUser, dispatch} } = this
    dispatch(handleSaveQuestion(authedUser, optionOneText, optionTwoText))
 
    /* Reset de Form  and redirecting to home, after using dispatch to add the new question*/
    this.setState({
      ...this.defaultState,
      toHome: true
    })
  }

  renderForm = (disabled) => (
    
    <form onSubmit={this.handleSubmit}>
       <FormGroup>
          <Input type="text" name="question1" id="optionOneText" placeholder="Enter First Question" onChange={this.handleChange} />
        </FormGroup>
          <p>or...</p>
        <FormGroup>
          <Input type="text" name="question2" id="optionTwoText" placeholder="Enter Second Question" onChange={this.handleChange} />
        </FormGroup>
      <Button
        disabled={disabled} className="ButtonCard" color="primary"
        type="submit" >
        Submit
      </Button>
    </form>
  
  )



  render() {

    const { disabled } = this.state
    const { props: { authedUser} } = this


    return this.state.toHome ? <Redirect to='/home' /> 
    : <Row>
        <Col sm="12" >
          <Card style={{ color: '#333' }}>
              <CardHeader>{authedUser} - New Question</CardHeader>
              <CardTitle>Would you rather...</CardTitle>
              <CardBody>
                 
                  { this.renderForm(disabled) }        
               
              </CardBody>
           </Card>
        </Col>
      </Row>
   
  }
}

function mapStateToProps ({ authedUser }) {
  return { authedUser }
}

export default connect(mapStateToProps)(NewQuestion)

