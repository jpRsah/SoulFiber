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

    // (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    // m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    // (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    // ym(53608273, "init", {
    //       clickmap:true,
    //       trackLinks:true,
    //       accurateTrackBounce:true,
    //       webvisor:true
    // });

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
    const { children, className, description, keywords, title } = this.props;
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
              title={title ? data.site.siteMetadata.title+' | '+title : data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: description ? description : 'Результаты занятий не заставят себя ждать, мы умеем вдохновлять. Оставьте своего ребенка у настоящих профессионалов, любящих свое дело! Брейк-данс, логопедия, шахматы, робототехника, программирование и развивашки с 2.5 лет. ' },
                { name: 'keywords', content: keywords ? keywords : 'Брейк данс, break dance, робототехника, программирование, шахматы, присмотр, развивашки, аксай, танцы, ардуино, arduino, летний лагерь, раннее развитие, хип хоп, детям, логопед, логопедические, занятия, с логопедом, секция' },
              ]}
            >
              <html lang="ru" />
            </Helmet>
            <noscript><div><img src="https://mc.yandex.ru/watch/53608273" style={{position:"absolute", left:"-9999px"}} alt="" /></div></noscript>
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
