import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardBody } from 'reactstrap';
  import { Jumbotron } from 'reactstrap';

   // <p>анонсы новостей, блок списка видов занятий, блок с ссылкой на расписание, отзывы</p>
const IndexPage = (props) => {

  return (
    <Layout>
            <Jumbotron>
        <h1 className="display-3">Здравствуйте!</h1>
        <p className="lead"> Меня зовут Роман. Я руководитель детского центра "Soul Fiber".</p>
        <hr className="my-2" />
        <p>Этот сайт позволит Вам узнать о нашем центре более подробно. Вы сможете найти наши последние активности, познакомиться с преподавателями, узнать расписание и прочеть отзывы о нас.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    <CardColumns>
      <Card>
        <CardImg top width="100%" src="https://pp.userapi.com/c638524/v638524847/36814/EdsuBR_XQMI.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Танцы</CardTitle>
          
          <CardText>это брейк детка,ваши деточки будут топчеками в школке.</CardText>
          <Link to="/break-dance" ><Button>подробнее</Button></Link>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src="https://pp.userapi.com/c846523/v846523850/af091/4MK-BZ_JCF4.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Английский язык</CardTitle>
          
          <CardText>нужно подготовиться к ЕГЭ?ГИА? обращайтесь,за короткие сроки поможем подготовиться,
            </CardText>
          <Link to="/ingland" ><Button>подробней</Button></Link>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src="https://pp.userapi.com/c639919/v639919847/1e2d7/hu7kDDbVDEc.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Математика</CardTitle>
          
          <CardText>нужно подготовиться к ЕГЭ?ГИА? или ваш ребенок тупой? то обращайтесь,за короткие сроки поможем подготовиться,
            кроме тупых-тупых не приводите).</CardText>
          <Link to="/math" ><Button>подробней</Button></Link>
        </CardBody>
      </Card>
      

      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Логопедия</CardTitle>
        <CardText>ехаль гека чевез веку,видет в веке вак,если все так,то обращайтесь)поможем,наверно.</CardText>
        <Link to="/logopedia" ><Button>подробней</Button></Link>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://pp.userapi.com/c849020/v849020470/47784/lFJhZGz3FkA.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Основы программирования</CardTitle>
          
          <CardText>ну тут,тока не для тупых,давайте без вашего пафаса"мой ребенок очень умный и тд"а на практике.</CardText>
          <Link to="/robot" ><Button>подробней</Button></Link>
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>А так же йога для уставших мам!</CardTitle>
        <CardText>тока для красивых мам.</CardText>
        <Link to="/mam" ><Button>подробней</Button></Link>
      </Card>
      
    </CardColumns>
    </Layout>
  );
};
export default IndexPage

