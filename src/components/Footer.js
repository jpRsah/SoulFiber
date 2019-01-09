import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'reactstrap';
import ABlank from './ABlank';

const Footer = ({ siteTitle }) => (
  <Container
    style={{
      backgroundColor: '#f8f9fa',
      marginBottom: '1rem',
    }}
  >
      <div
        style={{
          float: 'right',
        }}>
        Сделан руководителем с душой. 
      <br/>
      <strong>
        <ABlank to="https://github.com/jpRsah/SoulFiber" label={`${siteTitle} на GitHub.`}/> 
      </strong>
      <br/>
      <strong>
        <Link to="terms/site">Пользовательское соглашение.</Link>
      </strong>
      </div>
  </Container>
)

export default Footer
