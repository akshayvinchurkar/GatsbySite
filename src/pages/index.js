import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

// custom component
import WebNavbar from "../components/navbar"

// react bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"

const IndexPage = () => (
  <Layout>
    <Container fluid>
      <SEO title="Home" />
      <WebNavbar></WebNavbar>   
      <Jumbotron className="text-center">
        <h1>Hello, jumbotron</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <p>
          <Button variant="success" size="sm">Learn more</Button>
        </p>
      </Jumbotron>
    </Container>
  </Layout>
)

export default IndexPage
