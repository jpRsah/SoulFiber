import React from 'react'
// import { Link } from 'gatsby'
import {  VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaVk, FaWhatsappSquare, FaOdnoklassnikiSquare,FaInstagram} from 'react-icons/fa';

export default (props) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={props.date}
          iconStyle={{ background: 'red', color: 'black' }}
          icon={<FaVk />}
        >
              <h3 className="vertical-timeline-element-title">{props.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{props.subTitle}</h4>
              <p>
                  {props.description}
              </p>
        </VerticalTimelineElement>
    )