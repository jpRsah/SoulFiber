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
      <h1>Английский язык с 6 лет</h1>
      <h2>О занятиях</h2>
      <p>
        Наши уроки рассчитаны на учеников в возрасте от 6 до 14 лет. Все занятия проходят
        в веселой и непринужденной обстановке, поэтому дети и подростки быстро
        вовлекаются в процесс и с интересом и любопытством выполняют каждое задание
        преподавателя. В такой особой атмосфере освоение английского языка становится
        своеобразной игрой, поэтому они легко воспринимают новый материал.
        Предлагаем разные программы обучения, учитывающие возраст и уровень
        подготовки: у нас точно есть то, что нужно вашему ребенку.
      </p>
      <p>
        Наши уроки рассчитаны на учеников в возрасте от 6 до 14 лет. Все занятия проходят
        в веселой и непринужденной обстановке, поэтому дети и подростки быстро
        вовлекаются в процесс и с интересом и любопытством выполняют каждое задание
        преподавателя. В такой особой атмосфере освоение английского языка становится
        своеобразной игрой, поэтому они легко воспринимают новый материал.
        Предлагаем разные программы обучения, учитывающие возраст и уровень
        подготовки: у нас точно есть то, что нужно вашему ребенку.
      </p>
      <p>
        Знания подаются в виде логичной и понятной системы. Малышу или подростку не
        придется сталкиваться с трудными формулировками из академических учебников.
        Простые схемы, структуры и таблицы помогут разобраться с самой сложной
        грамматикой.
      </p>
      <p>
        Наша методика включает широкий набор игровых практик, которые помогут
        справиться с языковым барьером. Использование таких форм занятий также помогает
        научиться понимать иностранную речь на слух.
      </p>
      <h2>Направления подготовки</h2>
      <ul>
          <li>
            отработка навыков чтения и развития речи
            работа над произношеием, развитие памяти, работа по составлению слов и
            предложений, чтение и составление небольших рассказов, разучивание стихотворений,
            диалогов.
          </li>
          <li>
            накопление словарного запаса, формирование навыков поддержания бесед
          </li>
          <li>
            развитие навыков письма и восприятия речи на слух
          </li>
          <li>
            помощь и развитие самостоятельности в выполнение домашних заданий
          </li>
          <li>
            подготовка к ОГЭ/ЕГЭ
          </li>
      </ul>
      <h2>Как проходят занятия</h2>
        1 занятие длится 40-60 минут <br/>
        2-3 занятия в неделю <br/>
        группа до 5 человек <br/>
        <ul>
            <li>
                дошкольники 5-7 лет
            </li>
            <li>
                младшие школьники 8-10 лет
            </li>
            <li>
                подростки 11-14 лет
            </li>
        </ul>

        <strong>Возможны индивидуальные занятия.</strong>

        <p>
            Занятия английским языков помогут Вашему ребенку комфортно чувствовать себя в
            будущем на школьных уроках и повысят его успеваемость.
        </p>
        <h2>Остались вопросы?</h2>
        <Link to="/contacts">Свяжитесь с нами</Link>
  </Layout>
)
