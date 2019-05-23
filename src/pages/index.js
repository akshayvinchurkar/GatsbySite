import React from "react"

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import SEO from "../components/seo"
import WebNavbar from "../components/navbar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <WebNavbar></WebNavbar>
    <Row>
      <Col>
        <h2>Homepage</h2>
      </Col>
    </Row>
  </Container>
)

export default IndexPage
