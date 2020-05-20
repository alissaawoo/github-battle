import React from 'react';


class Hello extends React.Component {
    render() {
        return(

            <h2>
                hello {this.props.name}

                {this.props.authed === true
                    ? <button onClick={this.props.logout}>logout</button>
                :null}

            </h2>


        )
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 'light'
        };

        this.handleLightMode = this.handleLightMode.bind(this);
        this.handleDarkMode = this.handleDarkMode.bind(this);
    }
    handleLightMode() {
        // Change 'mode' on the component's state to 'light'
        this.setState({
            mode: 'light'
        })

    }
    handleDarkMode() {
        // Change 'mode' on the component's state to 'dark'
        this.setState({
            mode: 'dark'
        })
    }
    render() {
        const { mode } = this.state;

        return (
            <div style={{
                height: '100%',
                background: mode === 'light' ? '#fff' : '#000'
            }}>
                {mode === 'light'
                    ? <button onClick={this.handleDarkMode}>Dark Mode</button>
                    : <button onClick={this.handleLightMode}>Light Mode</button>}
            </div>
        )
    }
}

class Count extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        // Increment count by 1
        this.setState(({count}) => ({
            count: count+1
        }));
    }
    decrement() {
        // Decrement count by 1
       this.setState(({count}) => ({
            count: count-1
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Count