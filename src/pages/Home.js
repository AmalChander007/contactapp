import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Concard from '../components/Contactcard'
import { Col, Container, Row } from 'react-bootstrap'
import Contactcard from '../components/Contactcard'

function Home() {
    const [contacts, setcontacts] = useState([])
    const fetchData = async () => {
        const result = await axios.get('/db.json')
        setcontacts(result.data.contacts);
        console.log("home", result);
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(contacts);
    return (

        <>
            <Container>
                <h1 className='mt-5' style={{ textAlign: 'center' , fontsize : 'xx-large', fontfamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'}}>Let's Talk !!!</h1>
               
                <Row className='mt-5'>
                    <Col>
                        <h1 style={{ textAlign: 'center' }}></h1>
                    </Col>


                </Row>

                <Row>

                    {
                        contacts.map(i => (

                            <Col className='ps-3 mt-3 p-2 ' lg={3} md={4} sm={6}>
                                <Contactcard item={i}></Contactcard>

                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Home