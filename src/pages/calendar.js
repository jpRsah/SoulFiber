import React from 'react'
import Layout from '../components/layout'
import { Row, Col } from 'reactstrap';
import Calendar from 'react_google_calendar'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/ru';
const localizer = BigCalendar.momentLocalizer(moment);

const calendar_configuration = {
    api_key: 'AIzaSyB4smmuZ3xM0aXAU8ooAILLHRQm9bLpP90',
    calendars: [
      {
        name: 'demo', // whatever you want to name it
        url: 'sl3ib7ldhn3p3kt6jvcnakoo44@group.calendar.google.com' // your calendar URL
      }
    ],
    dailyRecurrence: 700,
    weeklyRecurrence: 500,
    monthlyRecurrence: 20
}
const messages = {
  allDay: 'Весь день',
  previous: '<',
  next: '>',
  today: 'Сегодня',
  month: 'Месяц',
  week: 'Неделя',
  day: 'День',
  agenda: 'Расписание',
  date: 'Дата',
  time: 'Время',
  event: 'Событие',
  showMore: total => `Ещё`
};


export default class MyApp extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        events: []
      }
  }

  render = () =>
    <Layout>
      <Row>
      {console.log(this.state.events)}
        <Col>
        {/* <BigCalendar
            messages={messages}
            defaultView="week"
            views={['week', 'day', 'agenda']}
            culture="ru-RU"
            localizer={localizer}
            events={this.state.events}
            startAccessor="Начало"
            endAccessor="Конец"
            /> */}
          <Calendar
            messages={messages}
            defaultView="week"
            views={['week', 'day', 'agenda']}
            culture="ru-RU"
            localizer={localizer}
            events={this.state.events}
            config={calendar_configuration} />
        </Col>
      </Row>
    </Layout>
}




// export default () => (
//     <Layout>
//         <Row>
//             <Col>
//             <Calendar
//                   calendarID="sl3ib7ldhn3p3kt6jvcnakoo44@group.calendar.google.com"
//                   apiKey="AIzaSyB4smmuZ3xM0aXAU8ooAILLHRQm9bLpP90"
//                 >
//                   {({ loading, events }) =>{

//                     if(loading)
//                       return "Загрузка...";
                    
//                     return(
//                       <BigCalendar
//                         localizer={localizer}
//                         events={events}
//                         startAccessor="start"
//                         endAccessor="end"
//                         />
//                     )
//                   }
                     
//                   }
//             </Calendar>

//  {/* <Calendar
// calendarID="sl3ib7ldhn3p3kt6jvcnakoo44@group.calendar.google.com"
// apiKey="AIzaSyB4smmuZ3xM0aXAU8ooAILLHRQm9bLpP90"
// >
// {({ loading, events }) =>
// loading ?  "" : JSON.stringify(events)
// }
// </Calendar>  */}
//             </Col>
//         </Row>
//     </Layout>
// );






