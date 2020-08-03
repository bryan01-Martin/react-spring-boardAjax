

import React from 'react';
import ReactDOM from 'react-dom';

import Login from "./Components/Login.jsx";

class LoginWrapper extends React.Component {
    render() {
        return <Login className="container open" />;
    }
}

ReactDOM.render(<LoginWrapper/>, document.getElementById('root'));