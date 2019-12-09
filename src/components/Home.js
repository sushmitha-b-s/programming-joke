import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Programming Jokes ..</h1>
                <button>
                    <Link to="/joke">Get Joke</Link>
                </button>

            </div>
        )
    }
}
