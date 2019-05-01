import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink as RRNavLink } from 'react-router-dom';


import {Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap'


class PageNoFound extends Component {





   pageNoFound = () => {

    return(<Card style={{ color: '#333' }}>
                <CardHeader></CardHeader>
                  <CardBody>                  
                    <Row>
                       <Col sm={{ size: 8, offset: 2 }} >
                                                          
                           <h6 >Page Was Not Found :(</h6>                                                                   
                      
                        </Col>
                    </Row>                       
                  </CardBody>                 
              </Card>)
  }


 reDirectLogin = (ownProps) => {


 

    return(
            <Card style={{ color: '#333' }}>
                <CardHeader></CardHeader>
                  <CardBody>                  
                    <Row>
                       <Col sm={{ size: 8, offset: 2 }} >                                                      
                           <h6> Please Login </h6>                                                                                                   
                           <div>
                              <Button  className="ButtonCard" color="primary" size="sm" tag={RRNavLink} to='/login'>Login</Button>  
                               
                           </div>
                          
                        </Col>
                    </Row>                       
                  </CardBody>                 
              </Card>

           );
  }


 render () {

    const { authedUser, ownProps } = this.props
   
    
    return(
            authedUser?this.pageNoFound()
          :this.reDirectLogin(ownProps)

       ); 

 }

            
   
  

}


function mapStateToProps ({  authedUser }, ownProps) {


  return {
    authedUser,
    ownProps,
  }
}




export default connect(mapStateToProps)(PageNoFound)