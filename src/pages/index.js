import React from 'react'
import { Link } from 'gatsby'
// import razvivashki from '../images/index/развивашки.jpeg';
import './style.scss'
import Layout from '../components/layout'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardBody } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import breakImg from '../images/promo/break-dance/3.jpg'
import logopedImg from '../images/promo/logoped/1.jpg'
import chekm from '../images/chekm.jpg'
import mum from '../images/mum.jpg'

   // <p>анонсы новостей, блок списка видов занятий, блок с ссылкой на расписание, отзывы</p>
const IndexPage = ({prop}) => {

  return (
    <Layout>
      <Jumbotron>
        <h2 className="hello">🔆Летняя робо-школа, лагерь <br/> Июнь 17-22 и авгус 19-24❗<br/> Собранный робот в подарок.</h2>
        <p className="lead">
          Скоростная подготовка к соревнованию Hello, Robot! Open. 💪 <br/>
          Собираем автономного робота на базе Arduino, способного двигаться строго по черной полосе. <br/>
          Готовим к первым соревнованиям и выступаем на открытой площадке нашего города. 🔥🔥 <br/>
          <br/>
          И с отдыхом у нас тоже все в порядке: 😉 <br/>
          ✨выезжаем на природу, <br/>
          ✨играем в активные игры, <br/>
          ✨знакомимся с автоспортом, <br/>
          ✨конструируем воздушного змея и т.д. <br/>
          🔆Время 17-22 Июня🔆 <br/>
          🔥 с 9-00 до 15-00🔥, возможна продленка. <br/>
        </p>
        {/* <hr className="my-2" />
        <p>Также Летняя школа по веб-программированию и брейк-дансу</p> */}

      </Jumbotron>
      <Jumbotron>
        <h2 className="hello">🔆Летняя уникальная веб-школа, лагерь <br/>Июнь 10-15 и август 12-17❗</h2>
        <p className="lead">
        Второе название у этого курса: Напиши папе сайт =) Смартфоны нам не потребуются!  <br/>
        Мы поделимся с ребятами основами HTML разметки и стилями оформления CSS, 
        мы научим ребят печатать быстро, мы познакомим с "подводным айсбергом" backend разработки.  <br/>
        Мы не оставим скучать в перерывах между сложными занятиями. Лазертаг, 
        Скалодром, Картинг, Соленое озеро, батутный парк, Прогулки по лесу 
        и активные игры в обязательном порядке.
        <br/>
        </p>
        <hr className="my-2" />

      </Jumbotron>
    <CardColumns>
      <Card inverse color='info'>
        <CardImg top width="100%" src="https://pp.userapi.com/c849020/v849020470/47784/lFJhZGz3FkA.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Основы программирования и робототехники</CardTitle>
          <CardText>
            Изучения основ языка программирования C++, разработка проектов на основе микроконтролера Arduino.
          </CardText>
          <Link to="/robot" ><Button>подробнее</Button></Link>
        </CardBody>
      </Card>

      <Card  inverse color="danger" >
        <CardImg top width="100%" src={breakImg} alt="брейк-данс в Аксае" />
        <CardBody>
          <CardTitle>Танцы</CardTitle>
          <CardText>Современнные танцы по направлениям Break Dance и Hip Hop. Для детей с 4 лет.</CardText>
          <Link to="/break-dance" ><Button>подробнее</Button></Link>
        </CardBody>
      </Card>

      <Card >
        <CardImg top width="100%" src={mum} alt="мама устала" />
        <CardBody>
          <CardTitle>Развивашки и отдыхайка для мам</CardTitle>
          <CardText>
            Групповые занятия по 2 часа, для детей с 3 до 5 лет, проводит учитель-логопед.
            {/* Сейчас много внимания уделяют развитию мелкой моторики￼, забывая про то, что детям просто необходимо бегать прыгать и шуметь для полноценного развития
            */}</CardText> 
          {/* <Link to="/mam" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>
      {/* <Card > */}
        {/* <CardImg top width="100%" src={razvivashki} alt="Card image cap" /> */}
        {/* <CardBody>
          <CardTitle>Йога "Мама и малыш"</CardTitle>
          <CardText>
            ИЩЕМ УСТАВШИХ МАМ ‼️<span role="img" description>😘</span>Скорее ведите их к нам!
            🌹Мы знаем, что надо делать!🌹
            Йога это то, что подойдёт всем и каждому, а мамам просто необходимо          
          </CardText> 
           <Link to="/mam" ><Button>подробнее</Button></Link> 
        </CardBody>
      </Card> */}

      <Card style={{ backgroundColor: '#0AEBAD', borderColor: '#333' }}>            
        <CardImg top width="100%" src={logopedImg} alt="логопед в Аксае" />
        <CardBody>
          <CardTitle>Логопедия</CardTitle>
          <CardText>Индивидуальные занятия.</CardText>
          <Link to="/logopedia" ><Button>подробнее</Button></Link>        
        </CardBody>
      </Card>

<Card >
  <CardImg top width="100%" src={chekm} alt="Шахматы в аксае" />
  <CardBody>
    <CardTitle>Шахматы</CardTitle>
    <CardText>
      Групповые занятия для детей с 5 лет. Проводит кандидат в мастера спорта, чемпион города Батайск 2019 года.
    </CardText> 
    {/* <Link to="/mam" ><Button>подробнее</Button></Link> */}
  </CardBody>
</Card>

      <Card>
        <CardImg top width="100%" src="https://pp.userapi.com/c639919/v639919847/1e2d7/hu7kDDbVDEc.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Математика</CardTitle>
          <CardText>Индивидуальные занятия.</CardText>
          {/* <Link to="/math" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>
      
    </CardColumns>
    </Layout>
  );
};
export default IndexPage
