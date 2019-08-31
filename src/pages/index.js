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
import tv from '../images/index/tvorchestvo.jpg'
import arif from '../images/index/arif.jpg'
import lego from '../images/index/lego.jpg'
import guliaem from '../images/index/guliaem.jpg'
import locking from '../images/index/locking.jpg'


const IndexPage = ({prop}) => {

  return (
    <Layout>
      <Jumbotron>
        <h2 className="hello">Акция!</h2>
        <p className="lead">
        Абонемент в полцены на новые 🆕 направления, старт групп с 10 сентября<br/>
            В акции участвуют:
            <ol>
              <li>📐 Подготовка к школе</li>
              <li>🚗 Конструирование</li>
              <li>👯‍ Хип Хоп</li>
              <li>🎨 Рисование и лепка</li>
              <li>👶 Развивашки 2.5+</li>
            </ol>
{/* <br/> */}
            {/* При приобретении второго абонемента или абонемента на второго ребенка предоставляется скидка 25%. <br/> */}

        </p>
      </Jumbotron>
     
    <CardColumns>
      <Card style={{ backgroundColor: '#f6bf26', borderColor: '#fff', color: '#fff' }}>
        <CardImg top width="100%" src="https://pp.userapi.com/c849020/v849020470/47784/lFJhZGz3FkA.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>🤖 Основы программирования и робототехники</CardTitle>
          <CardText>
            Изучения основ языка программирования C++, разработка проектов на основе микроконтролера Arduino, Linux cli.
          </CardText>
          <Link to="/robot" ><Button>подробнее</Button></Link>
        </CardBody>
      </Card>

      <Card  inverse color="danger" style={{ borderColor: '#fff' }}>
        <CardImg top width="100%" src={breakImg} alt="брейк-данс в Аксае" />
        <CardBody>
          <CardTitle>🤸 Брейк-данс</CardTitle>
          <CardText>Для детей с 4 лет.</CardText>
          <Link to="/break-dance" ><Button>подробнее</Button></Link>
        </CardBody>
      </Card>

      <Card style={{ backgroundColor: '#8e24aa', borderColor: '#fff', color: '#fff' }} >
        <CardImg top width="100%" src={mum} alt="Развивашки 2.5+ в Аксае" />
        <CardBody>
          <CardTitle>🆕 👶 Развивашки 2.5+</CardTitle>
          <CardText>
            Групповые занятия по 1 часу, для детей с 2,5 до 5 лет.
          </CardText> 
          {/* <Link to="/mam" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>

      <Card style={{ backgroundColor: '#e77c74', borderColor: '#fff', color: '#fff' }} >
        <CardImg top width="100%" src={arif} alt="Подготовка к школе Аксай" />
        <CardBody>
          <CardTitle>🆕 📐 Подготовка к школе</CardTitle>
          <CardText>
            Чтение, письмо, арифметика. 
          </CardText> 
          {/* <Link to="/" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>

      <Card  style={{ backgroundColor: '#10864a', borderColor: '#10864a', color: '#fff' }}>
        <CardImg top width="100%" src={lego} alt="Конструирование в Аксае" />
        <CardBody>
          <CardTitle>🆕 🚗 Конструирование</CardTitle>
          <CardText>
            Собираем конструкторы ЛЕГО и другие. 
          </CardText> 
          {/* <Link to="/" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>

      <Card style={{ backgroundColor: '#e77c74', borderColor: '#e77c74', color: '#fff' }}>
        <CardImg top width="100%" src={tv} alt="Рисование и лепка в Аксае" />
        <CardBody>
          <CardTitle>🆕 🎨 Творчество</CardTitle>
          <CardText>
            Учимся писать катрины настоящей акварелью, лепим фигурки из пластелина и теста! 
          </CardText> 
          {/* <Link to="/" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>

      <Card style={{ backgroundColor: '#f5511e', borderColor: '#fff', color: '#fff' }}>
        <CardImg top width="100%" src={locking} alt="Рисование и лепка в Аксае" />
        <CardBody>
          <CardTitle>🆕 👯‍ Хип Хоп</CardTitle>
          <CardText>
            Танцы для девочек с 5 лет.
          </CardText> 
          {/* <Link to="/" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>

      <Card  style={{ backgroundColor: '#616161', borderColor: '#616161', color: 'white' }}>
        <CardImg top width="100%" src={guliaem} alt="Продленка в Аксае" />
        <CardBody>
          <CardTitle>📖 ✍ Продлёнка</CardTitle>
          <CardText>
            Перекус, домашняя работа, прогулки.
          </CardText> 
          {/* <Link to="/" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>

      <Card style={{ backgroundColor: '#0AEBAD', borderColor: '#fff' }}>
        <CardImg top width="100%" src={logopedImg} alt="логопед в Аксае" />
        <CardBody>
          <CardTitle>👅 Логопедия</CardTitle>
          <CardText>Индивидуальные занятия.</CardText>
          <Link to="/logopedia" ><Button>подробнее</Button></Link>
        </CardBody>
      </Card>

      <Card  style={{ backgroundColor: '#3f51b5', borderColor: '#3f51b5', color: '#fff' }}>
        <CardImg top width="100%" src={chekm} alt="Шахматы в аксае" />
        <CardBody>
          <CardTitle>♟ Шахматы</CardTitle>
          <CardText>
            Групповые занятия для детей с 5 лет.
          </CardText> 
          <Link to="/chess" ><Button>подробнее</Button></Link>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src="https://pp.userapi.com/c639919/v639919847/1e2d7/hu7kDDbVDEc.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Математика</CardTitle>
          <CardText>Индивидуальные занятия. Подготовка к ЕГЭ и ОГЭ.</CardText>
          {/* <Link to="/math" ><Button>подробнее</Button></Link> */}
        </CardBody>
      </Card>
      
    </CardColumns>
    </Layout>
  );
};
export default IndexPage
