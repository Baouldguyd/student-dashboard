import React from 'react';
import { Card, Col, Row } from 'antd';
import CalendarApp from '../DashboardContent/CalendarApp';
import ProgDurationApp from '../DashboardContent/ProgDurationApp';
import CourseContentApp from '../DashboardContent/CourseContentApp';
import FacilitatorsApp from '../DashboardContent/FacilitatorsApp';
import AssessmentApp from '../DashboardContent/AssessmentApp';
import TaskApp from '../DashboardContent/TaskApp';
import FloatHelp from '../DashboardContent/FloatHelp';
import ResultsApp from '../DashboardContent/ResultsApp';

const CardApp = () => (
    <>
    <Row gutter={16}>
    <Col span={8}>
      <Card title="Mark Your Attendance" bordered={false}>
        <CalendarApp/>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Your Course Content" bordered={false}>
        <CourseContentApp/>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Submit Your Tasks" bordered={false}>
        <AssessmentApp/>
      </Card>
    </Col>
  </Row>
  <Row gutter={16}>
  <Col span={8}>
      <Card title="Your Progress so far" bordered={false}>
        <ProgDurationApp/>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Your Tasks" bordered={false}>
        <TaskApp/>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Your Results" bordered={false}>
        <ResultsApp/>
      </Card>
    </Col>
    </Row>
  <Row gutter={16}>
    <Col span={24}>
      <Card title="Your Facilitators" bordered={false}>
        <FacilitatorsApp/>
      </Card>
    </Col>
    
  </Row>
  
    <FloatHelp/>
    </>
  
  
);
export default CardApp;