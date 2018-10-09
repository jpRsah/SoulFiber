import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'reactstrap';
import logo from '../images/logo.jpg';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'gray',
      marginBottom: '1rem',
    }}
  >
    <Container
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          
        >

        <img src={logo}/>
          {siteTitle}
        </Link>
      </h2>
    </Container>
  </div>
)

export default Header
