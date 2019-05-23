import React from "react"
import { Link } from "gatsby"

// bootstrap grid imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// custom components
import WebNavbar from "../components/navbar"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contactus = () => (
    <Container>
        <SEO title="contact us" />
        <WebNavbar></WebNavbar>
        <Row>
            <Col md={6}>
                <h2>Hi this is Contact us Page</h2>
            </Col>
            <Col md={6}>
                <h2>New title</h2>
            </Col>
        </Row>
    </Container>
)

export default Contactus