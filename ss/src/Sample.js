import React from "react";
import { 
     DemoClassTitle, DemoClassSubject, DemoClassInfo,
     DemoClassLink , ThumbNailDiv } from "./DemoClass.styles";
import { Container, Row, Col } from "react-bootstrap";
const  DemoClassHead={
    "Previousday":["Checking",]
};

const DemoClassesList = {
    "DemoCourses" : [{
        "CourseName" : "LCM and PCM Tricks",
        "CourseSubject" : "Mathematics",
        "CourseURL" : "/Course",
        "DraftedOrPublishedDate" : "25/09/2021"
    },
    {
        "CourseName" : "Trigonometry Formula and Tables",
        "CourseSubject" : "Mathematics",
        "CourseURL" : "/Course",
        "DraftedOrPublishedDate" : "09/07/2019"
    },
    {
        "CourseName" : "Polynomials",
        "CourseSubject" : "Mathematics",
        "CourseURL" : "/Course",
        "DraftedOrPublishedDate" : "02/02/2019"
    },
    {
        "CourseName" : "Matrices and Determinants",
        "CourseSubject" : "Mathematics",
        "CourseURL" : "/Course",
        "DraftedOrPublishedDate" : "28/02/2019"
    },
    {
        "CourseName" : "Quantization",
        "CourseSubject" : "Mathematics",
        "CourseURL" : "/Course",
        "DraftedOrPublishedDate" : "29/11/2019"
    },
    {
        "CourseName" : "Electricity",
        "CourseSubject" : "Physics",
        "CourseURL" : "/Course",
        "DraftedOrPublishedDate" : "13/05/2020"
    },
    {
        "CourseName" : "Electric Charges and Fields",
        "CourseSubject" : "Physics",
        "CourseURL" : "/Course",
        "DraftedOrPublishedDate" : "25/07/2021"
    },
    {
        "CourseName" : "Wave Optics",
        "CourseSubject" : "Physics",
        "CourseURL" : "/Course",
        "DraftedOrPublishedDate" : "17/01/2021"
    },
    {
        "CourseName" : "Different Versions of C Compilers",
        "CourseSubject" : "Computer Science",
        "CourseURL" : "/Course",
        "DraftedOrPublishedDate" : "17/10/2021"
    },
    {
        "CourseName" : "Polymorphism",
        "CourseSubject" : "Computer Science",
        "CourseURL" : "/Course",
        "DraftedOrPublishedDate" : "22/10/2021"
    },
    {
        "CourseName" : "Data Types",
        "CourseSubject" : "Computer Science",
        "CourseURL" : "/Course",
        "DraftedOrPublishedDate":"25/10/2021"
    }]
};

class DemoClass extends React.Component 
{
    constructor(props) {
        super(props);
        this.color = ('#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'));
    }
    render() {
        return(
            <div className="d-flex flex-column">
                <ThumbNailDiv style={{background : "linear-gradient(to top , " + this.color + " , white)",}}>
                {/*<DemoClassThumbNail src={logo} alt="Course ThumbNail" />*/}
                </ThumbNailDiv>
                <DemoClassTitle>{this.props.Course.CourseName}</DemoClassTitle>
                <DemoClassSubject>{this.props.Course.CourseSubject}</DemoClassSubject>
                <DemoClassHead>{this.props.Previousday}</DemoClassHead>
            </div>
        )
    }
}

const DemoClasses = () => {
    return(
        <Row md={4}>
            {
                DemoClassesList.DemoCourses.map((DemoCourse , DemoCourseId) => {
                    return(
                        <Col key={DemoCourseId}>
                            <DemoClassLink to={DemoCourse.CourseURL}>
                                <DemoClass Course={DemoCourse} />
                            </DemoClassLink>
                        </Col>
                    )
                })
            }
        </Row>
    );
}

const Home = () => {
    return(
        <Container fluid className="mt-3">
            <Row className="mt-5">
                <Col>
                    <DemoClassInfo>Your Courses</DemoClassInfo>
                    <DemoClasses />
                </Col>
            </Row>
            
        </Container>
    );
}

export default Home;