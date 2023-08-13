import React from "react";
import { Carousel } from "antd";
import { Card, Col, Row } from "antd";

import CalendarApp from "../DashboardContent/CalendarApp";
// import ProgDurationApp from '../DashboardContent/ProgDurationApp';
import CourseContentApp from "../DashboardContent/CourseContentApp";
// import FacilitatorsApp from '../DashboardContent/FacilitatorsApp';
import AssessmentApp from "../DashboardContent/AssessmentApp";
import ResultsApp from "../DashboardContent/ResultsApp";
import TaskApp from "../DashboardContent/TaskApp";
import ProgDurationApp from "../DashboardContent/ProgDurationApp";
import FacilitatorsApp from "../DashboardContent/FacilitatorsApp";
// import ProgDurationApp from '../DashboardContent/ProgDurationApp';
// import TaskApp from '../DashboardContent/TaskApp';
// import FloatHelp from '../DashboardContent/FloatHelp';
// import ResultsApp from '../DashboardContent/ResultsApp';

const scrollableStyle = {
    maxHeight: "400px", // Set a max height for the scrollable content
    overflowY: "auto",  // Enable vertical scrolling if content overflows
  };

const contentStyle = {
    margin: 0,
    height: "auto",
    color: "#fff",
    lineHeight: "2rem",
    textAlign: "center",
    background: "#364d79",
};
const SlidingApp = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange} style={scrollableStyle}>
        <div >
                <div>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Mark Your Attendance" bordered={false}>
                                <CalendarApp />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Your Course Content" bordered={false}>
                                <CourseContentApp />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Your Progress so far" bordered={false}>
                                <ProgDurationApp />
                            </Card>
                        </Col>
                    </Row>
                    <h3 style={contentStyle}>1</h3>
                </div>

                <div>
                    <Row gutter={16}>

                        <Col span={8}>
                            <Card title="Your Weekly Tasks" bordered={false}>
                                <TaskApp />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Submit Your Tasks" bordered={false}>
                                <AssessmentApp />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Your Results" bordered={false}>
                                <ResultsApp />
                            </Card>
                        </Col>
                    </Row>
                    <h3 style={contentStyle}>2</h3>
                </div>
                
                <div>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Card title="Your Facilitators" bordered={false}>
                                <FacilitatorsApp />
                            </Card>
                        </Col>

                    </Row>
                    <h3 style={contentStyle}>3</h3>
                </div>
         </div>
        </Carousel>

    );
};
export default SlidingApp;
