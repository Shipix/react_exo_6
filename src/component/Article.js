import React, { Component } from 'react'
import ArticleA from './ArticleA'
import ArticleB from './ArticleB'


export default class Article extends Component {
    render() {
        return (
            <section >
                <ArticleA></ArticleA>
                <ArticleB></ArticleB>
            </section>
        )
    }
}
