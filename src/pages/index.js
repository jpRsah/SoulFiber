import React from 'react'
import { Link } from 'gatsby'
import razvivashki from '../images/index/развивашки.jpeg';
import './style.scss'
import Layout from '../components/layout'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardBody } from 'reactstrap';
  import { Jumbotron } from 'reactstrap';

   // <p>анонсы новостей, блок списка видов занятий, блок с ссылкой на расписание, отзывы</p>
const IndexPage = (props) => {

  return (
    <Layout>
      <Jumbotron>
        <h1 className="hello">Здравствуйте!</h1>
        <p className="lead"> Меня зовут Роман. Я руководитель детского центра "Soul Fiber".</p>
        <hr className="my-2" />
        <p>
          Этот сайт позволит Вам узнать о нашем центре более подробно.<br/> 
          Вы сможете найти наши последние активности, 
          познакомиться с преподавателями, 
          узнать расписание и прочеть отзывы о нас.
        </p>
        {/* <p className="lead">
          <Button color="primary">Learn More</Button>
        </p> */}
      </Jumbotron>
    <CardColumns>
      <Card>
        <CardImg top width="100%" src="https://pp.userapi.com/c638524/v638524847/36814/EdsuBR_XQMI.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Танцы</CardTitle>
          <CardText>Современнные танцы по направлениям Break Dance и Hip Hop. Для детей с 4 лет.</CardText>
          <Link to="/break-dance" ><Button>подробнее</Button></Link>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src="https://pp.userapi.com/c846523/v846523850/af091/4MK-BZ_JCF4.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Английский язык</CardTitle>
          <CardText> Индивидуальные и груповые занятия. Для детей с 6 лет.</CardText>
          <Link to="/english" ><Button>подробнее</Button></Link>
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
      

      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Логопедия</CardTitle>
        <CardText>Индивидуальные занятия.</CardText>
        {/* <Link to="/logopedia" ><Button>подробнее</Button></Link> */}
      </Card>
      <Card>
        <CardImg top width="100%" src="https://pp.userapi.com/c849020/v849020470/47784/lFJhZGz3FkA.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Основы программирования и робототехники</CardTitle>
          <CardText>Занятия в группах до 7 человек. 
            {/* <ul>
              <li>
                Изучения основ языка программирования C++, разработка проектов на основе микроконтролера Arduino.
              </li>
              <li>
                Основы Веб ремесла. 
              </li>
              <li>
                Изучение устройство персонального компьютера. Пробная сборка. 
              </li>
              <li>
                Знакомство с операционными системами на базе ядра. 
              </li>
            </ul> */}
          </CardText>
          {/* <Link to="/robot" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>

      <Card >
        <CardImg top width="100%" src={razvivashki} alt="Card image cap" />
        <CardBody>
          <CardTitle>Развивашки</CardTitle>
          <CardText>Сейчас много внимания уделяют развитию мелкой моторики￼, забывая про то, что детям просто необходимо бегать прыгать и шуметь для полноценного развития</CardText>
          {/* <Link to="/mam" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>
      <Card >
        <CardImg top width="100%" src="http://www.hinfo.info/sites/default/files/styles/news-detail/public/field/image/stressmeditating0_0.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Йога</CardTitle>
          {/* <CardText></CardText> */}
          {/* <Link to="/mam" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>
      
    </CardColumns>
    </Layout>
  );
};
export default IndexPage

