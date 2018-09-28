import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Главная</h1>
    <p>анонсы новостей, блок списка видов занятий, блок с ссылкой на расписание, отзывы</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">..контакты..</Link>
  </Layout>
)

export default IndexPage
