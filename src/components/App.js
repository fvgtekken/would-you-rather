import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Navigation from './nav/Navigation'
import Login from './Login'
import QuestionsContainer from './QuestionsContainer'
import Home from './Home'
import CreateQuestion from './typeQuestion/CreateQuestion'
import LeaderBoard from './LeaderBoard'
import { getAuthedUserFromLocal } from '../actions/loggedUser'
import { fetchData } from '../actions/shared'
import  PageNoFound  from './common/PageNoFound'



class App extends Component {


 componentDidMount() {
    this.props.getLoggedUser(getAuthedUserFromLocal())
    this.props.getData(fetchData())
  }

  loginRoutes = () => {

    return(<Switch>
              <Route exact path='/login' component={Login} />       
              <Route component={ PageNoFound }/>
          </Switch>)
  }


 loggedRoutes = () => {

    return(<Switch>
            <Route exact path='/home' component={Home} />
            <Redirect from='/login' to='/home' />
            <Route exact path='/add' component={CreateQuestion} />
            <Route exact path='/questions/:questionId' component={ QuestionsContainer } />
            <Route exact path='/leaderBoard' component={LeaderBoard} />
            <Route component={ PageNoFound } />
          </Switch>);
  }



  render() {

    const {displayNav} = this.props

  

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
                              {displayNav
                              ? this.loginRoutes()
                              : this.loggedRoutes()}
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
    displayNav: authedUser === null,
    authedUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(fetchData()),
    getLoggedUser: () => dispatch(getAuthedUserFromLocal())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App)
