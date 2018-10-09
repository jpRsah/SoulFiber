import React from 'react'
import Social from '../components/Social'
import Layout from '../components/layout'
import Map from '../components/Map'
import { Row, Col } from 'reactstrap';

export default () => (
    <Layout>
        <Row>
            <Col sm="6" className="text-center address">
                <div>
                    <strong>г. Аксай, ул. Шолохова 5, 2 этаж </strong>
                    <br/>
                    <strong><a href="tel:+79001355311">+7(900)135-531-1</a></strong>
                </div>
                <div>
                    <Social size={45} />
                </div>
            </Col>
            <Col sm="6" >
                <Map />
            </Col>
        </Row>
    </Layout>
);







