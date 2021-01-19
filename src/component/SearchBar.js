import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search">
                <div>
                <p>Search: </p>
                </div>
                <div>
                <input type="text"/>
                </div>
                <div>
                <button>Go</button>
                </div>
            </div>
        )
    }
}
