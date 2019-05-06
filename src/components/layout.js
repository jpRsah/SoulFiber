import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.scss'
import { Container } from 'reactstrap';
import Footer from './Footer';




class Layout extends React.Component {

  componentDidMount() {
    window.replainSettings = { id: 'a7a25491-93b2-4b36-bf35-66eb679297df' };
    (function(u){
      var s=document.createElement('script');
      s.type='text/javascript';
      s.async=true;
      s.src=u;
      var x=document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s,x);
    })('https://widget.replain.cc/dist/client.js');
  }

  render(){
    const { children, className } = this.props;
    return (
      <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'text/html' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <br/>
            <Container className={`main_container ${className}`}>
              {children}
            </Container>
            <br/>
            <Footer siteTitle={data.site.siteMetadata.title} />

          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
