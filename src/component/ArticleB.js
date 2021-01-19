import React, { Component } from 'react'
import Image from '../img/captainshipix.jpg'
import '../css/section.css'

export default class ArticleB extends Component {
    render() {
        return (
            <div className="mep">
                <div className="monImage">
                    <img src={Image} alt=""/>
                </div>
                <div className="typo">
                <h1>Mon premier paragraphe</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ad et, cumque modi saepe assumenda blanditiis, nobis minus inventore iste sed nam sequi voluptates, omnis impedit at ut architecto pariatur dolorem vitae cum quod. Adipisci dolore soluta distinctio alias facere iste in incidunt animi cupiditate cumque, iure dignissimos molestiae quibusdam. Fugiat odio quaerat dolorem itaque sint ullam sequi possimus vel alias voluptas aperiam in magni sed nisi rerum dolore quas voluptatem aliquid quos, dignissimos voluptatibus perspiciatis. Voluptates similique, totam laboriosam quo architecto perspiciatis, quasi et, omnis perferendis maiores dolorem? Ipsam laborum magnam velit voluptatibus provident. Cumque officiis veniam corporis ipsum!</p>
                </div>
            </div>
        )
    }
}

