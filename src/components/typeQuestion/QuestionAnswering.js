import React, { Component } from 'react'
import { connect } from 'react-redux'
import { settingVote } from '../../actions/shared'
import { Row, Col, Button, FormGroup, Label, Input,  Card, 
  CardHeader, CardBody } from 'reactstrap'
import LazyLoad from 'react-lazy-load'
import ImageLoader from '../common/ImageLoader'

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
      dispatch(settingVote(authedUser, question.id, answer))
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
          <legend>Would You Rather...</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" 
                 onChange={this.handleChange}
                name="opts"
                value="optionOne" />{question.optionOne.text}
             
            </Label>
          </FormGroup>
          <span>or</span>
          <FormGroup check>
            <Label check>
              <Input type="radio" 
                onChange={this.handleChange}
                name="opts"
                value="optionTwo" />{question.optionTwo.text}
               
            </Label>
          </FormGroup>
      </FormGroup>
      <Button className="ButtonCard" color="primary"
        disabled={disabled}
        type="submit">
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
                <LazyLoad debounce={false} throttle={250}>
                    <ImageLoader src={author.avatarURL} responsiveClass={'w-25 h-25 rounded-top rounded-bottom'}  />                               
               </LazyLoad>
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