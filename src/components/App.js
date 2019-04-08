import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Navigation from './Navigation'
import Login from './Login'
import QuestionsContainer from './QuestionsContainer'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import AwnserQuestion from './AwnserQuestion'
import QuestionVotes from './QuestionVotes'

import '../css/App.css';

class App extends Component {


 authedRoutes = () => (
    <Switch>
      <Route exact path='/' component={QuestionsContainer} />
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
    return (
      <BrowserRouter>
        <Fragment>
            <div className="App">
            <Navigation />
              <header className="App-header">
                 <Container>    
                      <Row>
                        <Col sm={{ size: 8, order: 2, offset: 2 }}>
                          {this.authedRoutes()}
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

export default App;
