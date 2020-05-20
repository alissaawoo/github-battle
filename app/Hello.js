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

export default Hello