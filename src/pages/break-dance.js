import React from 'react'
import { Link } from 'gatsby'
import { Container, Col, Row } from 'reactstrap';
import party from '../images/promo/break-dance/party.png'
import musc from '../images/promo/break-dance/musc.png'
import metr from '../images/promo/break-dance/metr.png'
import Layout from '../components/layout'
import ABlank from '../components/ABlank'
import { FaVk, FaInstagram} from 'react-icons/fa';
import foto1 from '../images/promo/break-dance/1.jpg'
import foto2 from '../images/promo/break-dance/2.jpg'

export default () => (
  <Layout>
    <div className="promo">
      <h1>Брейк данс в Аксае</h1>
      {/* ЗДЕСЬ ВИДЕО О БРЕЙКЕ, ОТЗЫВЫ УЧЕНИКОВ */}
      <div className="description">
        <h2>Брейк-данс - это</h2>
        <p>Спортивный танец дополненный элементами из акробатики. Отличается резкими ритмичными движениями.</p>
        <p>Break Dance наделен огромным количеством элементов, которые делятся на дисциплины , такие как: </p>
        <ul>
          <li>Toprock - дисциплина брейк данса, который танцую стоя. Locking, waving, rock dance, robot, hip hop - направления, элементы которых сильно повлияли на расширение элементной базы Toprock движений в брейк дансе </li>
          <li>Footwork - это специфические движения, использующие присед как основную позицию всех движений дисциплины</li>
          <li>Power Move - силовые упражнения, отличительной особенностью которых является кручение тела вокруг своей оси.</li>
          <li>Freezes - Различные виды позиций, в которых танцор замирает, акцентируя музыкальные паузы, взрывные моменты или сильные доли</li>
        </ul>
        <p>Есть мнение, что для девочек танец не подходит в силу своей сложности. В целом это верно, есть дисциплины достаточно сложные для освоения (Power move), но так как эти дисциплины не являются обязательными для освоения у девочек есть возможность освоить другие, более грациозные и пластичные движения. </p>
      
        <Link to='/calendar'>Полное расписание</Link><br/>
        <Link to='/contacts'>Контакты</Link><br/>
      </div>
      <div className="what">
        <h2>Какая польза от занятий?</h2>
        <Container className="text-center">
          <Row>
            <Col>
              <div><img src={metr} height="240px" alt="Чувство ритма, брейк данс"/></div>
              <div className="mt-3">
                <strong className="h3"> Чувство ритма </strong>
                <p>Самая важная часть в постижении танцев с малых лет. Доказано, что чувство ритма Развивает музыкальный слух.</p>
              </div>
            </Col>
            <Col>
              <div><img src={musc} height="240px" alt="Развитие офп, брейк данс"/></div>
              <div className="mt-3">
                <strong className="h3">Развитие физической подготовки</strong>
                <p>Занятия предотвращают развитие сколиоза, помогают побороть плохой сон и отсутствие аппетита.</p>
              </div>
            </Col>
            <Col>
              <div><img src={party} height="240px" alt="Уверенность на сцене, брейк данс"/></div>
              <div className="mt-3">
                <strong className="h3">Уверенность на сцене</strong>
                <p>Ученики секции выступают на сценах города и выезжают на танцевальные соревнования.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="teacher">
        <h2>О преподавателе</h2>
        <Row>
          <Col sm="6">
            <blockquote>
            <strong>Танцевальный опыт:</strong> более 15 лет
            </blockquote>
            <blockquote>
            <strong>Опыт преподавания:</strong><br/>
              2006-2009 <ABlank to="https://vk.com/club5575477" label="Танцевальная студия «Dancing souls»"/>. Помощник тренера.<br/>
              2009-2011 <ABlank to="https://vk.com/jpfarm" label="Танцевальная студия «Joy Of Perfection»"/>. Тренер, руководитель танцевальной группы. <br/>
              2011 Танцевальная студия «Zumba». Тренер.<br/>
              2014-2017 <ABlank to="https://vk.com/funkybeatclub" label="Танцевальная студия «Funky Beat»"/>. Тренер.<br/>
              2017 <ABlank to="https://yutnidvorik.business.site/" label="Танцевальная студия детского центра «Юла»"/>. Преподаватель по танцам.<br/>
              2017-2018 <ABlank to="https://soul-fiber.ru" label="Детский центр «Soul Fiber»"/>. Тренер по Брейк дансу.<br/>
            </blockquote>
          </Col>
          <Col sm="6">
            <img src={foto1} style={{ width: '100%'}} alt="Калиниченко Роман Брейк данс bboy rash" />
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <img src={foto2} style={{ width: '100%'}} alt="Калиниченко Роман Брейк данс bboy rash" />
          </Col>
          <Col sm="6">
          <blockquote className="mt-3">
          <strong>Успехи:</strong><br/>

          Участник танцевальных шоу в г. Ростове-на-Дону и Ростовской области таких как  
          <ABlank to="https://vk.com/mmdance" label="Mm'dance"/><br/>
          Организатор шоу для студенческой весны от факультета Архитектуры и искуств ПИ ЮФУ.<br/>
          Занимался постановкой детских выступлений на площадках Ростовской Области. <br/>
          <br/>
          Победитель и финалист городских и районных соревнований.<br/>
          <br/>
          <strong>Участник соревнований:</strong><br/>
          2005-2006 Краснодар All zeros 4, 5 <br/>
          2006 Ростов-на-Дону And 1 Street ball <br/>
          2006 Москва Freestyle Session<br/>
          2006-2009 Ростов-на-Дону <ABlank to="https://ru.wikipedia.org/wiki/Snickers_%D0%A3%D1%80%D0%B1%D0%B0%D0%BD%D0%B8%D1%8F" label="Snickers Urbania"/><br/>
          2007-2009 Ростов-на-Дону Battle Front<br/>
          2008 Краснодар Fight Club <br/>
          2008 Новошахтинск South Battle <br/>
          2010 Сочи Battle from soul 3 <br/>
          2009-2018 Ростов-на-Дону Back to tradition<br/>
          2007-2009 Ростов-на-Дону Battle Front<br/>
          2009-2010 Ростов-на-Дону Metaform 1, 2<br/>
          2008-2017 Ростов-на-Дону Summer B-boy`s Battle 1, 2<br/>
          2010-2011 Ростов-на-Дону Top D <br/>
          2011 Краснодар 3:16 crew anniversary <br/>
          и другие.<br/>
          </blockquote>
 

        </Col>
        </Row>
        <Row >
        <Col>
                 <blockquote className="mt-3">
            <strong>Успехи учеников:</strong><br/>
            2018 <a href="https://vk.com/openbreakingleague">Open Breaking League Of South Russia </a> 
            бибой Назар: 4 место в категории baby 
            <a href="https://www.youtube.com/watch?v=qJpZVoynVYU&index=21&list=PLYxSes5ZyhrdOMXUrwS_SgjiG9-TjZV1q"> Глянуть</a> <br/>
            2016-2017 Ростов-на-Дону Выступления на праздниках в детском городе профессий «Кидбург»  <br/>
            2017 Ростов-на-Дону Battle Front 3е место в номинации «Учитель и ученик» <br/>
            2017 Ростов-на-Дону Выступления на празднике в честь 200 летия Ростовского Зоопарка<br/>
            2017-2018 Ростов-на-Дону Выступления на открытой сцене площадки АШАН ТЦ Горизонт<br/>
            2018 Ростов-на-Дону Выступление на 10 летии гипермаркета ИКЕА<br/>
            2018 Краснодар Поездка на соревнования #ДетиФанка_vol2 и #ДетиФанка_vol3<br/>
            2018 Ростов-на-Дону Участие в ежемесячных соревнованиях «Battle Z»<br/>
            2018 Шахты Поездка на фестиваль под названием #KingOfTheDance<br/>
            Ежемесячные поездки учеников на соревнования и активное участие на мероприятиях городов Ростов-на-Дону и Аксай.
          </blockquote>
            <blockquote className="mt-3">
            <strong> Одно занятие обычно состоит из:</strong><br/>
            <ol>
              <li>разминки - 5 минут,</li>
              <li>повторения танцевального шоу 10 - 40 минут,</li>
              <li>ОФП (отжимания на “подушках”, прыжки, пресс, корзинка) 20 - 30 минут,</li>
              <li>разучивания основных элементов брейк данса 20-30 минут,</li>
              <li>растяжки (специально разработанная схема упражнений на гибкость) 10-20 минут,</li>
              <li>танцевального батла 5-10 минут,</li>
              <li>подвижных игр 10 - 20 минут.</li>
            </ol>

              Родителям можно смотреть занятие. Комментарии и предложения всегда приветствуются.  <br/>
              <br/>
              Поведение на занятии регулируется количеством упражнений ОФП.
          </blockquote>
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
        </Row>
      </Container>



      {/* <div className="plan">
        <h2>План занятий</h2>
        http://tancy.pro/teachers/fominyh/
      </div>   */}

      {/* <div className="contact">
        <h2>Как связаться?</h2>
        <Link to='/contacts'>Контакты</Link>
      </div> */}
    </div>
  </Layout>
)

