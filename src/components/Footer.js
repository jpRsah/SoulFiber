import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'reactstrap';
import ABlank from './ABlank';

const Footer = ({ siteTitle }) => (
  <Container
    style={{
      backgroundColor: 'light',
      marginBottom: '1rem',
    }}
  >
      <strong>
        <ABlank to="https://github.com/jpRsah/SoulFiber" label={`${siteTitle} на GitHub.`}/> 
      </strong><br/>
      Сделан руководителем с душой. <br/>
      <strong>
        <Link to="/site-terms">Пользовательское соглашение.</Link>
      </strong>
  </Container>
)

export default Footer
