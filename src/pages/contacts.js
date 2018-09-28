import React from 'react'
// import { Link } from 'gatsby'
import vk from '../images/vk.png';

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>

    <h1>контакты</h1>
    <p>номер: 89515055879 (это должен быть кликабельный номер при нажатии я перехожу в звонки)</p>
    
    <a 
      rel="nofollow"  
      href="https://vk.com/soul_fiber_aksay" title="Soul Fiber ВКонтакте" target="_blank">
        ссылка на вк (сюда картинку вк)
        <img src={vk} width="100" height="50"  />
      </a>
      <a 
      rel="nofollow" 
      href="https://www.ok.ru/group/54497240678520" title="Soul Fiber В Одноклассниках" target="_blank">
        ссылка на ок
      </a>



    {/* <Link to="/">вернуться на главную страницу</Link> */}
  </Layout>
)

export default SecondPage







