import React from 'react'
import Layout from '../components/layout'
import { Row, Col } from 'reactstrap';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Calendar from 'react-google-calendar-events-list';


const localizer = BigCalendar.momentLocalizer(moment) 
export default () => (
    <Layout>
        <Row>
            <Col>
              <Calendar
                  calendarID="524263056016-s341d2lua7495lcralkdqktukf263d17.apps.googleusercontent.com"
                  apiKey="AIzaSyB4smmuZ3xM0aXAU8ooAILLHRQm9bLpP90"
                >
                  {({ loading, events }) =>
                    loading ? <div></div> : 
                      <BigCalendar
                          localizer={localizer}
                          events={events}
                          startAccessor="start"
                          endAccessor="end"
                          />
                  }
              </Calendar>
              <Calendar
                  calendarID="524263056016-s341d2lua7495lcralkdqktukf263d17.apps.googleusercontent.com"
                  apiKey="AIzaSyB4smmuZ3xM0aXAU8ooAILLHRQm9bLpP90"
                >
                {({ loading, events }) =>
                  loading ? <div>loading</div> : <div>{JSON.stringify(events)}</div>
                }
              </Calendar>
            </Col>
        </Row>
    </Layout>
);







