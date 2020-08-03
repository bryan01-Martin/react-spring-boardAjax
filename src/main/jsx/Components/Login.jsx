import React from 'react';
import { StdButtonElement as Button } from './Common/Button.jsx'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            memId : "",
            memPassword : ""
        }
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange({id, target}) {
        this.setState({
           [target.id] : target.value
        })
    }

    btnClick( {id}) {
       

    }
    render() {
        return (
            <div id="dBody">
                <form id="sendForm">
                    <div className="container col-md-offset-2 col-sm-6" style={{marginTop : '100px'}}>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input id="memId" type="text" className="form-control valiChk" name="memId" placeholder="id" title="ID" onBlur={this.inputChange} />
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                            <input id="memPassword" type="password" className="form-control valiChk" name="memPassword" placeholder="Password" title="Password" onBlur={this.inputChange} />
                        </div>
                        <br />
                        <br />
                        <div className="col-md-offset-4">
                            <Button type="button" id="ok" className="btn-primary" contentText="로그인" clickEvent={this.btnClick} />
                            <Button type="button" id="cancel" className="btn-warning" contentText="취소"  clickEvent={this.btnClick}/>
                            <Button type="button" id="register" className="btn btn-info" contentText="회원가입" clickEvent={this.btnClick} />
                        
                        </div>
                    </div>
                </form>
		    </div>

        );
    }
}
export default Login