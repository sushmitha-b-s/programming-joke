import React, { Component } from 'react'
import { FacebookShareButton, FacebookIcon } from 'react-share'
import { EmailShareButton, EmailIcon } from 'react-share'

export default class Jokes extends Component {

    state = {
        punchline: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ punchline: true })
        }, 4500);
    }

    render() {
        return (
            <div className="flexCentre">
                <h1><span>P</span>rogramming <span>J</span>oke</h1>
                <div className="container">
                    {!this.props.joke && "Loading.."}
                    <p className="p1">{!this.props.joke.setup && "Loading..."}</p>
                    <p className="p1">{this.props.joke && this.props.joke.setup}</p>
                    <p className="p2">{this.state.punchline ? <span> - {this.props.joke.punchline} </span> : ''}</p>
                </div>

                <div className="social-media">

                    <FacebookShareButton
                        url="https://www.facebook.com/"
                        quote={`${this.props.joke.setup} - ${this.props.joke.punchline}`}
                        hashtag="#programmingJoke"
                        className="fb"
                    >
                        <FacebookIcon
                            round={true}
                            size={40}
                            logoFillColor='#e66465'
                        />
                    </FacebookShareButton>

                    <EmailShareButton
                        url="https://accounts.google.com/"
                        subject="Programming Joke"
                        body={`Setup: ${this.props.joke.setup}\nPunchline: ${this.props.joke.punchline}`}
                        separator=''
                        openWindow={true}
                    >
                        <EmailIcon
                            round={true}
                            size={40}
                            logoFillColor='#e66465'
                        />
                    </EmailShareButton>
                </div>
            </div>
        )
    }
}
