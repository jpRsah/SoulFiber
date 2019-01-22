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
                  calendarID="en.orthodox_christianity%23holiday%40group.v.calendar.google.com"
                  apiKey="AIzaSyAunY2R4utMXaWe1uAxIRdcRsbUlI8yhL8"
                >
                  {({ loading, events }) =>
                    loading ? <div>loading</div> : 
                      <BigCalendar
                          localizer={localizer}
                          events={events}
                          startAccessor="start"
                          endAccessor="end"
                          />
                  }
              </Calendar>
              <Calendar
                calendarID="65881750710-b0nkfjmkcb3ab7coeltbjmq7fsu2f9eo.apps.googleusercontent.com"
                apiKey="R7roMYRc2qYrKbQaZLb1_Ntr"
              >
                {({ loading, events }) =>
                  loading ? <div>loading</div> : <div>{JSON.stringify(events)}</div>
                }
              </Calendar>
            </Col>
        </Row>
    </Layout>
);







