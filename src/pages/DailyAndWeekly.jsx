import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import styled from 'styled-components'

const DailyAndWeekly = () => {

    const TimelineContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  `;
  
  const TimelineEvent = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  `;
  
  const Line = styled.div`
    width: 2px;
    height: 100%;
    background-color: #0066CC;
    margin-right: 0.5rem;
  `;
  
  const EventText = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
  `;
  
  const Event = ({ text }) => {
    return (
      <TimelineEvent>
        <Line />
        <EventText>{text}</EventText>
      </TimelineEvent>
    );
  };

		
	return (
        <TimelineContainer>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>My Timeline</h1>
      <Event text="Event 1" />
      <Event text="Event 2" />
      <Event text="Event 3" />
    </TimelineContainer>
    );
  };

export default DailyAndWeekly;