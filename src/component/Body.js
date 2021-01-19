import React, { Component } from 'react'
import Header from './Header'
import Article from './Article'
import Footer from './Footer'
import '../css/body.css'


export default class Body extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Article></Article>
                <Footer></Footer>
            </div>
        )
    }
}
