import React from 'react'
import Accordian from './../components/Accordian'

const FaqPage = () => {
    const faq = [
        {
            _id: 'One',
            title: 'whose course do you want to do',
            body: 'Before you jump into a new career, it’s important to consider the path ahead. Can your new industry offer you ample opportunity and stability? How likely are you to get hired after your chosen program or bootcamp? 😀',
        },
        {
            _id: 'Two',
            title: 'which content most important in this course',
            body: 'As digital literacy increases and everything goes on online from food delivery to shopping goes online, thereby increasing the need for web developers. Web developers build interactive websites for different businesses hence allowing the organizations to offer their services at a global level.',
        },
        {
            _id: 'Three',
            title: 'Why Leran This course',
            body: 'Web development is the process of making information stored on a web server accessible through the Internet and web browsers. Web development is a popular profession. Many make a living from this profession. A person who creates or develops a website is called a web developer. 😀5',
        },

    ]

    return (
        <div
            className='d-flex flex-column justify-content-center align-items-center container '

        >
            <h1>Common Question is Answer</h1>
            <div className='row'>
                <div className='col'>
                    <div class='accordion' id='accordionExample'>
                        {faq.map((f, i) => (
                            <Accordian _id={f._id} title={f.title} body={f.body} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqPage