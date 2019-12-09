import React, { Component } from 'react'

export default class Jokes extends Component {

    state = {
        punchline: false
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({punchline: true})
        }, 2000);
    }

    render() {

        return (
            <div>
                <h1>Programming Joke</h1>
                {!this.props.joke && ".."}

                {this.props.joke && <p>{this.props.joke.setup}</p>}

                <p>{this.state.punchline ? this.props.joke.punchline : ''}</p>

            </div>
        )
    }
}
