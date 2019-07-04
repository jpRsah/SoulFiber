import React from 'react'
import { Link } from 'gatsby'
// import razvivashki from '../images/index/развивашки.jpeg';
import './style.scss'
import Layout from '../components/layout'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardBody } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import breakImg from '../images/promo/break-dance/3355.jpg'
import logopedImg from '../images/promo/logoped/1355.jpg'
import chekm from '../images/chekm.jpg'
import mum from '../images/mum355.jpg'

const IndexPage = ({prop}) => {

  return (
    <Layout>
      <Jumbotron>
        <h2 className="hello">Дневной лагерь. С 29 июля встречаем ребят от 5ти лет</h2>
        <p className="lead">
            Внимание!! Такого вы ещё не видели!!<br/>
            Летний лагерь Soul Fiber открывает свои двери! <br/>
            В нашем лагере будет 2 смены, 15 и 10 дней (будни)<br/>
            Что ждёт ваших детей:
          <ol>
            <li>✔Выезд на природу
              Дважды в неделю едем в мухину балку на целый день!! Еда на костре, спортивные игры, изучение местности, установка палатки.
              </li>
              <li>✔Водные игры. Стрелялки/обливалки</li>
              <li>✔Творчество</li>
              <li>✔Танцы. Учитель брейк-данса поможет победить неуверенность и покажет беспроигрышные идеи!</li>
              <li>✔ Робототехника. Битва роботов.</li>
              <li>✔Кулинарные занятия раз в неделю. Только вкусные и полезные блюда!</li>
              <li>✔Кинотеатр. Просмотр детских фильмов.</li>

            {/* <li>
              📆Июнь 10-15 и август 12-17 - Неделя на WEB разработки. 
              Второе название у данного курса «Напиши папе сайт». В конце курса ребята получат собственный каркас 
              веб приложения, который можно будет использовать под любые нужды и проекты.<br/>
              💲Цена 6200р.
            </li>
            <li>
              📆Июнь 17-22 и август 19-24 - Неделя робототехники. 
              Подготовка к соревнованиям Hello Robot. Open по регламенту робофеста.<br/>
              💲Цена 7700р.
            </li>
            <li> 
              📆Июнь 24-29 и июль 1-6 - Брейк-данс лагерь. Усиленные занятия, подготовка к поездке в Крым город Ялта, 
              на YALTA SUMMER JAM (9-14 июля). Возможна организация совместного бронирования жилья и присмотра за 
              ребятами на курорте во время соревнования.<br/>
              💲Цена 9200р.
            </li> */}
          </ol>

          Лагерь будет работать с 9 до 17 часов, возможна продленка 100р час, питание включено.<br/>
          <br/>
          {/* Каждый день мы будем уделять время как подвижным так и играм на развитие интеллекта. 
          В неделе робототехники и WEB разработки мы будем чаще выходить на улицу и 
          заниматься подвижными играми, погуляем по роще, покатаемся на велосипедах, 
          попрыгаем на батутах и тд. На брейке мы больше будем уделять логическим играм, 
          шахматы и шашки, видеоигры и фильмы, купание в бассейне, поиграем в настольный теннис и 
          соберем воздушного змея. */}
        </p>
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
            Групповые занятия по 2 часа, для детей с 2,5 до 5 лет, проводит учитель-логопед.
            {/* Сейчас много внимания уделяют развитию мелкой моторики￼, забывая про то, что детям просто необходимо бегать прыгать и шуметь для полноценного развития
            */}</CardText> 
          {/* <Link to="/mam" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>

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
          <Link to="/chess" ><Button>подробнее</Button></Link>
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
