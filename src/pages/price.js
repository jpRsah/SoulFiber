import React from 'react'
import Layout from '../components/layout'
// import { Link } from 'gatsby'
import ReactTable from "react-table";
import "react-table/react-table.css";


export default () => (
  <Layout className='term'>
    <h2>ПРЕЙСКУРАНТ ЦЕН</h2>
{/* 
    При приобретении третьего и последующих абонементов предоставляется скидка 50%.
    Просим Вас с пониманием отнестись к тому, что мы не возвращаем стоимость оплаченных по абонементу занятий, 
    кроме случаев, указанных в п.5 настоящего приложения. Занятия по абонементу дешевле разовых посещений,
     мы сохраняем место в группе для вашего ребенка и, независимо от того, посетил ли ребенок занятие, 
     мы несем расходы на оплату труда преподавателей, подготовку раздаточного и творческого материала, 
     оплачиваем аренду помещения. 
*/}
      <ReactTable
          data={[
            {
              id:1,
              name: "Брейк-данс",
              mPrice: "2 800 руб.",
              dPrice: "400 руб.",
              comment: "Младщая группа 8 занятий продолжительностью 1 час. Старшая группа 8 занятий продолжительностью 1.5 часа."
            },
            {
              id:2,
              name: "Робототехника и программирование",
              mPrice: "2 800 руб.",
              dPrice: "400 руб.",
              comment: "Абонемент на 12 занятий продолжительностью 1 час."
            },
            {
              id:3,
              name: "Логопед",
              mPrice: "4 000 руб.",
              dPrice: "600 руб.",
              comment: "Индивидуальные занятия, абонемент на 8 занятий."
            },
            {
              id:4,
              name: "Развивашки 2.5+",
              mPrice: "2 400 руб.",
              dPrice: "350 руб.",
              comment: "Абонемент на 8 занятий продолжительностью 1 час."
            },
            {
              id:5,
              name: "Шахматы",
              mPrice: "1 400 руб.",
              dPrice: "400 руб.",
              comment: "Абонемент на 4 занятия продолжительностью 1 час."
            },
            {
              id: 6,
              name: "Подготовка к школе",
              mPrice: "2 800 руб.",
              dPrice: "400 руб.",
              comment: "Абонемент на 8 занятий продолжительностью 1 час."
            },
            {
              id: 7,
              name: "Конструирование",
              mPrice: "2 000 руб.",
              dPrice: "300 руб.",
              comment: "Абонемент на 8 занятий продолжительностью 1 час."
            },
            {
              id: 8,
              name: "Творчество",
              mPrice: "2 400 руб.",
              dPrice: "350 руб.",
              comment: "Абонемент на 8 занятий продолжительностью 1 час."
            },
            {
              id: 9,
              name: "Хип Хоп",
              mPrice: "2 000 руб.",
              dPrice: "300 руб.",
              comment: "Абонемент на 8 занятий продолжительностью 1 час."
            },
            {
              id: 10,
              name: "Продлёнка",
              mPrice: "",
              dPrice: "450 руб.",
              comment: "Абонемент на 8 занятий продолжительностью 1 час."
            },
          ]}
          columns={[
            {
              Header: "№",
              accessor: "id",
              width: 30
            },
            {
              Header: "Наименование услуги",
              accessor: "name"
            },
            {
              Header: "Цена за абонемент",
              accessor: "mPrice"
            },
            {
              Header: "Цена за разовое занятие",
              accessor: "dPrice"
            },
            // {
            //   Header: "Комментарий",
            //   accessor: "comment"
            // }
          ]}
          defaultPageSize={10}
          showPagination={false}
          previousText= 'Назад'
          nextText='Вперед'
          loadingText='Загрузка...'
          noDataText='Значения не найдены'
          pageText='Страница'
          ofText='из'
          rowsText='строк'
          className="-striped -highlight -centered"
          styles={{textAlign:"center"}}
        />
  </Layout>
)
