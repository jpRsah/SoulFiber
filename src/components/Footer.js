import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'reactstrap';
import logo from '../images/logo.jpg';

const Footer = ({ siteTitle }) => (
  <Container
    style={{
      background: 'light',
      marginBottom: '1rem',
    }}
  >
      <h3>
        {siteTitle}
      </h3>
  </Container>
)

export default Footer
