import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import webdevcert from '../assets/images/webdevcert.jpg'


function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June 2024 - Present"
        iconStyle={{ background: 'rgb(138, 90, 250)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>IOS App Developer Bootcamp</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Udemy - ONLINE</h4>
        <p style={{ color: 'black' }}>Course Taught by Dr Angela Yu</p>
        <p style={{ color: 'black' }}>Topics include: Swift, SwiftUI, Augmented Reality, Persistent Local Data Storage, In-App Purchases, Software Design, etc. 
        </p>
      </VerticalTimelineElement>
       <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="January 2024 - June 2024"
        iconStyle={{ background: 'rgb(71, 181, 85)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>Web Development Bootcamp</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Udemy - ONLINE</h4>
        <p style={{ color: 'black' }}>Course Taught by Dr Angela Yu</p>
        <p style={{ color: 'black' }}>Topics include: HTML/CSS, Javascript, React, Express, Node, API's, Authentication, REST, Web Design, 
          Databases, Version Control, etc.
        </p>
        <img src={webdevcert} alt="Resume" style={{ border: '2px solid black', marginTop: '30px' }} />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="September 2023 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>Computer Science Student</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Carleton University, Ottawa, ON</h4>
        <p style={{ color: 'black' }}>Machine learning and artificial intelligence stream</p>
        <p style={{ color: 'black' }}>Current Overall CGPA: 11.4/12 </p>
        <p style={{ color: 'black' }}>Current Major CGPA: 11.8/12 </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2021 - July 2023"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>Lifeguard/Swim Instructor</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Stouffville, ON</h4>
        <p style={{ color: 'black' }}>Led a guard team of 3 as a head lifeguard and taught successful high level lifesaving classes.</p>
      </VerticalTimelineElement>

    </VerticalTimeline>
  );
}

export default Timeline;
