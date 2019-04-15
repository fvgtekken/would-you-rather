import React from 'react'

import {Row, Col, Card, CardHeader, CardBody,
   Badge } from 'reactstrap'


 const NoQuestion = (props) => {

       const {titleQuestion } = props

    return(  <Card style={{ color: '#333' }}>
                  <CardHeader></CardHeader>
                  <CardBody>                  
                    <Row>
                       <Col sm={{ size: 8, offset: 2 }} >
                         <Badge className="no-question">                                   
                           <h6 >{titleQuestion}</h6>                                                                   
                         </Badge>
                        </Col>
                    </Row>                       
                  </CardBody>                 
              </Card>)
  }



export default NoQuestion