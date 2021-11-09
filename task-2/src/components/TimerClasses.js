import React, { Component } from 'react'

export class TimerClasses extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), status: true };
        this.handleStop = this.handleStop.bind(this);
        this.handleStart = this.handleStart.bind(this);
    }

    componentDidMount() {
        if (this.state.status) {
            this.clear = setInterval(() => {
                this.setState({ date: new Date() });
            }, 1000);
        }
    }

    handleStop() {
        clearInterval(this.clear);
        this.setState({ status: !this.state.status });
    }

    handleStart() {
        this.clear = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
        this.setState({ status: !this.state.status });
    }

    render() {
        console.log(this.state.status);
        return (
            <div>
                <h2>Class Component</h2>
                <div className="time">
                    <h2>{this.state.date.toLocaleTimeString()}</h2>
                </div>
                <br />
                {
                    (this.state.status)
                        ? <button className="stop" onClick={this.handleStop}>Stop</button>
                        : <button className="start" onClick={this.handleStart}>Start</button>
                }
            </div>
        );
    }
}

export default TimerClasses
