import React from 'react';
import Card from '../../components/Card';
import callPerson from '../../images/callperson.png';
import handshake from '../../images/handshake.png';
import headphoneConvo from '../../images/headphoneconvo.png';
import whatsapp from '../../images/whatsapp.png';

const Contact = () => {

    const cardDetails = {
        1: {
            imgtype: headphoneConvo,
            title: 'Product and Services support',
            body: "Facing issues? We are here to help you! Just give us a call."
        },
        2: {
            imgtype: callPerson,
            title: 'Talk to a member of our sales team',
            body: "We'll help you find the right products & pricing for your home"
        },
        3: {
            imgtype: handshake,
            title: 'Get business opportunity',
            body: "We'll help you find the right products & pricing for your home"
        },
        4: {
            imgtype: whatsapp,
            title: 'Ping us on whatsapp',
            body: "We'll help you find the right products & pricing for your home"
        }
    }
    return (
        <div
            style={{
                display: 'flex',
                margin: '70px 4em',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly'
                // flexDirection: 'column'
            }}
        >
            <Card imgtype={cardDetails[1].imgtype} title={cardDetails[1].title} body={cardDetails[1].body} />
            <Card imgtype={cardDetails[2].imgtype} title={cardDetails[2].title} body={cardDetails[2].body} />
            <Card imgtype={cardDetails[3].imgtype} title={cardDetails[3].title} body={cardDetails[3].body} />
            <Card imgtype={cardDetails[4].imgtype} title={cardDetails[4].title} body={cardDetails[4].body} />
        </div>
    )
}

export default Contact
