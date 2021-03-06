import React from 'react'
import { Container, Col, Row } from 'reactstrap';
import { FaVk, FaInstagram} from 'react-icons/fa';
import Layout from '../components/layout'
import robo from '../images/robo.jpg'
import roboIAm from '../images/robo1.jpg'

export default () => (
  
  <Layout
  title='Робототехника и программирование в Аксае'
  description='Придумываем проекты и воплощаем их в реальную жизнь. Ведет аспирант кафедры высокопроизводительных вычислений Южного Федерального Университета, web разработчик, руководитель центра.'
  keywords='компьютерное развитие vim c++ си линукс для детей электроника конструирование набор текста аксай техничекие пайка паяльник'
  >
    <h1>Робототехника и программирование в Аксае</h1>
    <div className="description">
       На занятиях наши ученики сталкиваются с задачами по настоящему программированию на C++ и конструируют схемы на основе платы Arduino Uno,
       размышляя и планируя. Основной целью занятий является самостоятельное принятие 
       решений по конструированию и поиск решения проблем в ходе разработки проектов.
        <h2>Arduino - это</h2>
        <p>Прекрасная платформа для обучения основам электротехники и программирования. 
          Благодаря низкому порогу освоения платформы ученики могут сформировать целостное 
          представление о том как работает электроника.</p>
        <p>По сравнению с Лего конструирование проектов на основе Arduino несколько проще, 
          но благодаря гибкости настроек платформы фантазия в выборе проектов ничем не ограничена. 
          Мы можем делать противопожарные сигнализации, камеры видеонаблюдения, приборы управления поливом, 
          электронные замки и это только начало огромного списка!</p>
          <strong>Найти новости по данному направлению в социальных сетях вы можете по хештегу #программирование_sf</strong>
    </div>
    <br/>
    <Container className="teacher">
        <h2>О преподавателе</h2>
        <Row>
          <Col sm="6">
            <br/>
            <br/>
            <blockquote>
              Калиниченко Роман Валерьевич
            <hr className="my-2" />
              <strong>Преподавательский опыт:</strong> более 5 лет по данному направлению
            </blockquote>
            <blockquote>
              Магистр математики по направлению "Функциональный и математический анализ"
              <br/>Аспирант кафедры высокопроизводительных вычислений Южного Федерального Университета, 
              Института Математики, Механики и Компьютерных Наук.
            </blockquote>
            <hr className="my-2" />
            <blockquote>
              <strong>Найти преподавателя в социальных сетях:</strong>
              <br/>
                <a href="https://www.instagram.com/bboy_rash_sf" rel="noopener noreferrer" title="bboy_rash_sf"  target="_blank">
                    <FaInstagram size={32} color="#833ab4"/>
                </a>
                <a href="https://vk.com/jpc_rash" rel="noopener noreferrer" title="Роман Романов" target="_blank">
                    <FaVk size={32} color="#45668e"/>
                </a>
            </blockquote>
          </Col>
          <Col sm="6">
            <img src={roboIAm} style={{ width: '100%'}} alt="Калиниченко Роман Робототехника в Аксае" />
          </Col>
        </Row>

        
        <Row >
          <Col sm="6">
            <img src={robo} style={{ width: '100%'}} alt="Калиниченко Роман Робототехника в Аксае" />
          </Col>
          <Col>
              <blockquote className="mt-3">
              <strong> Одно занятие обычно состоит из:</strong><br/>
              <ol>
                <li>теоретической части по электротехнике,</li>
                <li>записи основных тезисов и текста программ с комментариями,</li>
                <li>конструирования проектов,</li>
                <li>поиска и решения проблем в процессе программирования и конструирования,</li>
                <li>соревнований внутри клуба.</li>
              </ol>

                Родителям можно смотреть занятие. Комментарии и предложения всегда приветствуются.  <br/>
            </blockquote>
          </Col>
        </Row>
      </Container>
  </Layout>
)

