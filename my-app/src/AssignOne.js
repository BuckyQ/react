import React from 'react';

class AssignOne extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          number: 0
        }
        this.handleClickUp = this.handleClickUp.bind(this);
       // this.handleClickDown  = this.handleClickDown.bind(this);
        this.handleIncrementIfOdd = this.handleIncrementIfOdd.bind(this);
        this.start=this.start.bind(this);
    };

    handleClickUp() {
        this.setState({number:this.state.number + 1});
        //console.log(this.state.number);
    };

    handleClickDown = () => {
        this.setState({number:this.state.number - 1});
        //console.log(this.state.number);
    };

    handleIncrementIfOdd() {
        if(this.state.number % 2 === 1){
            this.setState({number:this.state.number + 1});
        };
    };

    handleAsync = () => {
        console.log(this.state.number);
        setTimeout(this.handleClickUp, 1000);
    };

    start() {
        let intervalId = setInterval(this.handleClickUp,1000)
        this.setState({intervalId:intervalId})
        
    };
    
    stop = () => {
        clearInterval(this.state.intervalId);
    };


    render() {
        const { number } = this.state;
        return (
            <div>
              <h1 className="counter">Counter {number} </h1>
              <br></br>
              <div className="btn">
                <button onClick={this.handleClickUp}>Increment</button>
                <button onClick={this.handleClickDown}>Decrement</button>
                <br></br>
                <button onClick={this.handleIncrementIfOdd}>Increment-If-Odd</button>
                <button onClick={this.handleAsync}>Async-Inc</button>
                <br></br>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>stop</button>
              </div>
            </div>
            );
    }
}

export default AssignOne