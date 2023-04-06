import React from 'react';
import GridTable from "../Table/GridTable";
import Index from "../Table/Index";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Home() {

    let [changeText, setChangeText] = useState(false);

    const handleChange = () => {
        return setChangeText(!changeText);
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Button className="float-end my-2 btn1" onClick={handleChange}>Show as {changeText ? 'Grid' : 'Table'}</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            changeText ?
                                <GridTable />
                                :
                                <Index />
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;