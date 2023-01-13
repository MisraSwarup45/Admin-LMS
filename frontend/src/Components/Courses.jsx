import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import dev from "../images/dev.webp";
import design from "../images/design.webp";
import markting from "../images/marketing.webp";
import music from "../images/music.webp";
import photo from "../images/photo.webp";
import personal from "../images/personal.webp";
import business from "../images/business.webp";
import education from "../images/education.png";


const Courses = () => {
    const cour = [
        {
            id: 1,
            img: dev,
            title: "Development",
            text: "2110",
        },
        {
            id: 2,
            img: design,
            title: "Design",
            text: "2060",
        },
        {
            id: 3,
            img: markting,
            title: "Marketing",
            text: "1010",
        },
        {
            id: 4,
            img: music,
            title: "Music",
            text: "1130",
        },
        {
            id: 5,
            img: photo,
            title: "Photography",
            text: "1111",
        },
        {
            id: 6,
            img: personal,
            title: "Self-Dev",
            text: "1115",
        },
        {
            id: 7,
            img: business,
            title: "Business",
            text: "1117",
        },
        {
            id: 8,
            img: education,
            title: "Education",
            text: "1127",
        },
    ];
    return (
        <>
            <div id='courses'>
                <h1 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>Our Courses</h1>
                <Container className='p-4'>
                    <Row>

                        {cour.map(({ id, img, title, text }) => (
                            <Card
                                bg="white"
                                key={id}
                                text="dark"
                                style={{ width: "20%" }}
                                className="m-2"
                            >
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>{title} </Card.Title>
                                    <Card.Text>
                                        {text} Students
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
            </div>
            <div id='quizzes'>
                <h1 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>Quizzes</h1>
                <Container className='p-4'>
                    <Row>

                        {cour.map(({ id, img, title }) => (
                            <Card
                                bg="white"
                                key={id}
                                text="dark"
                                style={{ width: "20%" }}
                                className="m-2"
                            >
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    {/* <Card.Title>{title} </Card.Title> */}
                                    <Card.Text>
                                        {title} Quizzes
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Courses;