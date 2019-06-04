import React from 'react'
import { FaVk, FaInstagram} from 'react-icons/fa';
import { Container, Col, Row } from 'reactstrap';
import photo1 from '../images/promo/logoped/1.jpg'
import Layout from '../components/layout'

const SecondPage = () => (
  <Layout
  title='Логопед в Аксае'
  description='Скоростная постановка звуков! Эффект после первого занятия! Консультация'
  keywords='развитие речи дислалия дизартрия онр зрр задержка речи логоритмика логопед логопедический массаж темп речи темпом'
  >
    <h1>Логопед в Аксае</h1>
    <h2>КАК ПОМОЧЬ МАЛЫШУ ГОВОРИТЬ ПРАВИЛЬНО <span role="img" aria-label=''>👅</span></h2>
    <p>
      <ul>
        <li>
          <span role="img" aria-label=''>👣</span> не «сюсюкать», то есть говорить «лепетным» языком или искажать звукопроизношение, подражая речи ребенка;
        </li>
        <li>
          <span role="img" aria-label=''>👣</span> желательно, чтобы ваша речь была всегда четкой, достаточно плавной, эмоционально выразительной, умеренной по темпу;
        </li>
        <li>
          <span role="img" aria-label=''>👣</span> общаясь с ребенком, не перегружайте свою речь труднопроизносимыми словами, непонятными выражениями и оборотами. Фразы должны быть достаточно простыми
        </li>
        <li>
          <span role="img" aria-label=''>👣</span> следует задавать только конкретные вопросы, не торопить с ответом;
        </li>
        <li>
          <span role="img" aria-label=''>👣</span> ребенка нельзя наказывать за ошибки в речи, передразнивать или раздраженно поправлять. 
          Полезно читать детям стихотворные тексты, соответствующие их возрасту<span role="img" aria-label=''>🤗</span>
        </li>
      </ul>
    </p>
    <p>
      Настало время познакомить вас с Викторией, нашим логопедом.
    </p>
    <Container className="teacher">
        <h2>О педагоге</h2>
        <Row>
          <Col sm="6">
          <p>
            Окончила ПИ ЮФУ в 2015<br/>
            Работаю с детьми 6 лет.<br/>
            3 года в ДОЛ<br/>
            Для меня важен комплексный подход, это значит, что занятие строится не только на постановке нарушенного звука, 
            а на укреплении и развитии всех сторон речи и общем развитии. 
            Занятие проходит в игре,т к в дошкольном возрасте,игра - ведущий вид деятельности. 
            Групповые занятия (2-3чел) 40-50мин.
          </p>
          <blockquote>
            <strong>Найти преподавателя в социальных сетях:</strong>
            <br/>
              <a href="https://www.instagram.com/tori_kali" rel="noopener noreferrer" title="bboy_rash_sf"  target="_blank">
                  <FaInstagram size={40} color="#833ab4"/>
              </a>
              <a href="https://vk.com/id38049699" rel="noopener noreferrer" title="Виктория Калиниченко" target="_blank">
                  <FaVk size={40} color="#45668e"/>
              </a>
          </blockquote>
        </Col>
          <Col sm="6">
          <img src={photo1} style={{ width: '100%'}} alt="Логопед в Аксае" />
        </Col>
        </Row>
      </Container>
  </Layout>
)

export default SecondPage
