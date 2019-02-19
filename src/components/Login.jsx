import React, { Component } from "react";
import './Login.css';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            showSignup: false,
            users: [
                { email: "vsarthak88@gmail.com", password: "12345678" }
            ]
        }

    }

    loadSignup = () => {
        this.setState({
            showSignup: true
        })
    }

    signInhandler = (event) => {
        console.log(event.target.values)
    }

    signUphandler = (event) => {
       console.log(event)
    }

    render() {
        return (
            <div>
                <div className="container signin-container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-sm-12 col-md-8">

                            {
                               ! this.state.showSignup ? (
                                    <div className="card signin-card">
                                        <div className="card-body">
                                            <img src="https://png.pngtree.com/svg/20170331/businessman_863430.png" className="img-fluid logo" />
                                            <form className="signin-form">
                                                <div className="form-group" onSubmit= {this.signInhandler}>

                                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" /><br></br>

                                                    <input type="password" className="form-control" id="password" placeholder="Password" />

                                                    <button type="submit" className="btn signin-btn btn-lg">SignIn</button>
                                                    <div className="form-check">
                                                        <a href="#" className="create-new-account" onClick={this.loadSignup.bind(this)}> Create new account</a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="card signin-card">
                                    <div className="card-body">
                                    <img src="https://png.pngtree.com/svg/20170331/businessman_863430.png" className="img-fluid logo" />
                                    <h2>Register</h2>
                                        <form className="signin-form">
                                            <div className="form-group" onSubmit={this.signUphandler.bind(this)}>

                                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" /><br></br>

                                                <input type="password" className="form-control" id="password" placeholder="Password" /><br></br>

                                                <input type="password" className="form-control" id="repeatpassword" placeholder="Repeat Password" />    <br></br>    
                                        
                                                <button type="submit" className="btn signin-btn btn-lg">SignUp</button>
                                            
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                )
                            }
                            <div class="col"></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Login;