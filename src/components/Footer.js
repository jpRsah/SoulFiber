import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'reactstrap';

const Footer = ({ siteTitle }) => (
  <Container
    style={{
      backgroundColor: 'light',
      marginBottom: '1rem',
    }}
  >
      <strong>
        <a href="https://github.com/jpRsah/SoulFiber" target="__blank"> {siteTitle} на GitHub. </a>
      </strong>
      Сделан руководителем с душой.
  </Container>
)

export default Footer
