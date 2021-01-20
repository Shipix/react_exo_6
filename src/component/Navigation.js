import React, { Component } from 'react'

export default class Navigation extends Component {
    link1 = ()=>{
        console.log("Accueil");
    }

    link2 = ()=>{
        console.log("Galerie");
    }

    link3 = ()=>{
        console.log("Contact");
    }
    render() {
        return (
            <div className="navigation">
                <a onClick={this.link1}>Link 1</a>
                <a onMouseOver={this.link2}>Link 2</a>
                <a onDoubleClick={this.link3}>Link 3</a>
            </div>
        )
    }
}
