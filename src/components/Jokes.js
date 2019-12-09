import React, { Component } from 'react'

export default class Jokes extends Component {

    state = {
        punchline: false
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({punchline: true})
        }, 4500);
    }

    render() {
        return (
            <div className="flexCentre">
                <h1>Programming Joke</h1>
                <div className="container">
                    
                    {!this.props.joke && ".."}

                    <p className="p1">{this.props.joke && this.props.joke.setup}</p>

                    <p className="p2">{this.state.punchline ? this.props.joke.punchline : ''}</p>
                </div>
            </div>
        )
    }
}
