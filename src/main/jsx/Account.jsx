import '../webapp/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';

class Account extends React.Component {
    render() {
        return <div className="page1">Page1 페이지</div>;
    }
}

ReactDOM.render(<Account/>, document.getElementById('root'));