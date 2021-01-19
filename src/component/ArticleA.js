import React, { Component } from 'react'
import Image from '../img/captainshipix.jpg'
import '../css/section.css'

export default class ArticleA extends Component {
    render() {
        return (
            <div className="mep">
                <div className="monImage">
                    <img src={Image} alt=""/>
                </div>
                <div className="typo">
                <h1>Mon premier paragraphe</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam harum saepe veritatis, incidunt, non dolorem vel asperiores impedit culpa, fugit quis in? Vitae, vel perspiciatis voluptas fugit ex, hic odio tempore architecto consequatur, vero reprehenderit atque dolor. Tempore ipsam nisi quod excepturi labore voluptas impedit incidunt quia laboriosam eos, aliquam eligendi consectetur necessitatibus. Dolore voluptatibus cumque doloribus minus. Maiores quia vero amet fugit quidem ipsa debitis dicta libero ea, totam eaque officia enim, reprehenderit commodi assumenda consequuntur inventore vel! In laboriosam commodi velit quis laborum? In sunt ad sequi vitae necessitatibus, ratione debitis odit voluptates iusto error a, sed excepturi.</p>
                </div>
            </div>
        )
    }
}
