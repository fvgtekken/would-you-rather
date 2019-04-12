import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, TabContent, TabPane, Nav, 
   NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
/*import CardQuestions from './CardQuestions'*/
import  QuestionList  from './QuestionList'


class Home extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    
    this.state = {
      activeTab: '1'
    };
    

  }

  toggle(tab) {

    console.log(this.props)

    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleChange = (e) => {
    console.log(e);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
  }

  render() {

    const { unanswered, answered } = this.props;

    return (
     
      <Row>
          <Col sm={{ size: 12}} >
        
        <Nav tabs>
          <NavItem>
             <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              UnAwnsered Questions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              Awnsered Questions
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
             <Row>
              <Col sm="12">
                  <QuestionList questions={unanswered} answered={false} />
              </Col>
            </Row>
          </TabPane>
         <TabPane tabId="2">
             <Row>
              <Col sm="12">
                <QuestionList questions={answered} answered={true} />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
     
        </Col>
      </Row>
   
    );
  }
}


function mapStateToProps ({ questions, users, authedUser }) {
  
  const questionsArray = Object.values(questions)
  const user = users[authedUser]
  const authedUsersAnswers = (user !== undefined)
    ? Object.keys(user.answers)
    : []
  
  return {
    answered: questionsArray.filter((question) => {
      return authedUsersAnswers.includes(question.id) ? question : null
    }),
    unanswered: questionsArray.filter((question) => {
      return authedUsersAnswers.includes(question.id) ? null : question
    })
  }
}

export default connect(mapStateToProps)(Home)