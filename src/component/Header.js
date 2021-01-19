import React, { Component } from 'react'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import '../css/header.css'
export default class Header extends Component {
    render() {
        return (
            <header>
                <Navigation></Navigation>
                <SearchBar></SearchBar>
            </header>
        )
    }
}
