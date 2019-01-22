import React from 'react'
import { Link } from 'gatsby'
import {  VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaEllipsisH } from 'react-icons/fa';

export default ({title, subTitle, description, path, date}) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={date}
          iconStyle={{ background: 'skyblue', color: 'white' }}
          icon={<FaEllipsisH />}
        >
              <h3 className="vertical-timeline-element-title">{title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
              <p>
                  {description}
              </p>
              <p> 
                <Link to={path}>Подробнее</Link>
              </p>
        </VerticalTimelineElement>
    )