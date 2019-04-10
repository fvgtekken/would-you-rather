import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Navigation from './Navigation'
import Login from './Login'
import QuestionsContainer from './QuestionsContainer'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import AwnserQuestion from './AwnserQuestion'
import QuestionVotes from './QuestionVotes'
import { getAuthedUserFromCookie } from '../actions/authedUser'
import { fetchInitialData } from '../actions/shared'


import '../assets/css/App.css';

class App extends Component {


 componentDidMount() {
    this.props.getAuth(getAuthedUserFromCookie())
    this.props.getData(fetchInitialData())
  }

  loginRoutes = () => (
    <Switch>
      <Route exact path='/' component={Login} />
      <Redirect from='*' to='/' />
    </Switch>
  )


 authedRoutes = () => (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/awnserQuestion' component={AwnserQuestion} />
      <Route exact path='/questionVotes' component={QuestionVotes} />
      <Route exact path='/addQuestion' component={NewQuestion} />
      <Route exact path='/leaderBoard' component={LeaderBoard} />
      <Route exact path='/questions' component={QuestionsContainer} />
      <Route exact path='/login' component={Login} />
      <Redirect from='*' to='/' />
    </Switch>
  )



  render() {

    console.log(this.props.displayLogin);

    return (
      <BrowserRouter>
        <Fragment>
            <div className="App">
            <Navigation />
              <header className="App-header">
                 <Container>    
                      <Row>
                        <Col sm={{ size: 8, order: 2, offset: 2 }}>
                          {this.props.displayLogin
                          ? this.loginRoutes()
                          : this.authedRoutes()}
                        </Col>
                      </Row>
                 </Container>
              </header>
            </div>
             </Fragment>
         </BrowserRouter>
       
    );
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
    //loading: Object.keys(questions).length === 0,
    displayLogin: authedUser === null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(fetchInitialData()),
    getAuth: () => dispatch(getAuthedUserFromCookie())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App)
