import React from 'react';
import Password from './Password.js';
import Status from './Status.js';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Beedle React JS Demo</h1>
                    <p>You can use <a href="http://github.com/hankchizljaw/beedle">Beedle</a> with <a href="https://reactjs.org/">React JS</a> without a connector. This prototype shows how we can integrate our store's state with our React Component's state. The `setState` method is then wired up to the store's `subscribe` callback.</p>
                    <p><b>Check out the <a href="https://github.com/hankchizljaw/beedle-react-demo">source here</a></b>.</p>
                    <hr />
                </header>
                <Status></Status>
                <form className="boilerform">
                    <Password></Password>        
                </form>
            </div>
        );
    }
}
