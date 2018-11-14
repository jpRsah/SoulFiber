import React from 'react'
import { Link } from 'gatsby'
// import styled from 'styled-components'
import Layout from '../components/layout'

// const Title = styled.h1` вот так создается стилизованный компонент
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

export default () => (
  <Layout>
      <div className="promo">
            <div id="english_first" class="promo_first">
                <h1>Английский язык с 6 лет</h1>
                <strong>Групповые и индивидуальные занятия</strong>
                <strong>Лучшие современные практики</strong>
            </div>
            <div className="promo_second">
                <div className="promo_second__item">
                    <img src="#" alt=""/>
                    <h2>Квалифицированный педагог с высшим образованием</h2>
                </div>
                <div className="promo_second__item">
                    <img src="#" alt=""/>
                    <h2>Подготовка к ГИА и ЕГЭ</h2>
                </div>
                <div className="promo_second__item">
                    <img src="#" alt=""/>
                    <h2>Программы для восполнения пробелов у взрослых</h2>
                </div>
            </div>
            <div className="promo_description">
                <h2>Подробнее о занятиях</h2>
                <p> 
                    Хотите начать изучать английский язык? 
                    Восполнить пробелы в знаниях? Повысить уровень грамматики и разговорного английского? 
                    Подготовиться к ГИА и ЕГЭ? <br/>
                    Тогда спешите записаться на пробное занятие. Индивидуальный подход к каждому ученику.<br/>
                    Возможны занятия по Skype.<br/>
                    Никогда не поздно начать изучать английский язык! Работа на РЕЗУЛЬТАТ!<br/>
                    Количество мест ограничено.<br/>
                </p>
                <Link to="/calendar">Узнать расписание</Link>
            </div>
            {/* <div className="promo_feedback"></div> */}
            {/* <Map /> */}
            <div id="english_second" className="promo_third">
                <h2>Остались вопросы?</h2>
               
                <Link to="/contacts">Свяжитесь с нами</Link>
                {/* <p>Пишите нам в социальных сетях</p> */}
                    {/*кнопки соц сетей*/}
                {/* <strong>Или звоните по телефонам: +7(900)135-531-1 +7(918)538-73-42</strong>  */}
            </div>
            {/* <div className="promo_gallery"></div> */}
        </div>
  </Layout>
)
