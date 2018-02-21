import React from 'react';
import {render} from 'react-dom';

export default class Hello extends React.Component {
    render() {
        return (
            <h3>
                Hello from React!
            </h3>
        )
    }
}

render(<Hello/>, document.getElementById('app'));