import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Navigation from './Navigation'
import Login from './Login'
import QuestionsContainer from './QuestionsContainer'
import Home from './Home'
import NewQuestion from './typeQuestion/NewQuestion'
import LeaderBoard from './LeaderBoard'
import { getAuthedUserFromLocal } from '../actions/authedUser'
import { fetchData } from '../actions/shared'




class App extends Component {


 componentDidMount() {
    this.props.getAuthedUser(getAuthedUserFromLocal())
    this.props.getData(fetchData())
  }

  loginRoutes = () => {

    return(<Switch>
              <Route exact path='/login' component={Login} />
              <Redirect from='*' to='/login' />
          </Switch>)
  }


 authedRoutes = () => {

    return(<Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/add' component={NewQuestion} />
      <Route exact path='/questions/:questionId' component={ QuestionsContainer } />
      <Route exact path='/leaderBoard' component={LeaderBoard} />
      <Redirect from='*' to='/home' />
    
    </Switch>);
  }



  render() {

      const {displayLogin} = this.props

    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar className="loading" />
            <div className="App">
            <Navigation />
              <header className="App-header">
                 <Container>    
                      <Row>
                        <Col sm={{ size: 8, order: 2, offset: 2 }}>
                          {displayLogin
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
    loading: Object.keys(questions).length === 0,
    displayLogin: authedUser === null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(fetchData()),
    getAuthedUser: () => dispatch(getAuthedUserFromLocal())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App)
