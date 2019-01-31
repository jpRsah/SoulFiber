import React from 'react'
import Layout from '../components/layout'
// import { Link } from 'gatsby'
import ReactTable from "react-table";
import "react-table/react-table.css";


export default () => (
  <Layout className='term'>
    <h2>ПРЕЙСКУРАНТ ЦЕН</h2>
{/* 
    При приобретении второго абонемента или абонемента на второго ребенка предоставляется скидка 25%.
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
              name: "Английский язык",
              mPrice: "2 800 руб.",
              dPrice: "400 руб."
            },
            {
              id:2,
              name: "Брейк данс",
              mPrice: "2 800 руб.",
              dPrice: "400 руб.",
              comment: "Младщая группа 8 занятий продолжительностью 1 час. Старшая группа 8 занятий продолжительностью 1.5 часа."
            },
            {
              id:3,
              name: "Робототехника и программирование",
              mPrice: "2 800 руб.",
              dPrice: "400 руб.",
              comment: "Абонемент на 12 занятий продолжительностью 1 час."
            },
            {
              id:4,
              name: "Логопед",
              mPrice: "4 000 руб.",
              dPrice: "600 руб.",
              comment: "Индивидуальные занятия, абонемент на 8 занятий."
            },
            {
              id:5,
              name: "Развивашки",
              mPrice: "2 800 руб.",
              dPrice: "400 руб.",
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
          defaultPageSize={5}
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
