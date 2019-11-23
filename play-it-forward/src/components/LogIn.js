import React, { Component } from 'react';


class LogIn extends Component {

    render() {
        return (
            <div>
                <style> {`
                    .bodyLogIn {
                        margin: 0;
                        padding: 0;
                        background-color: #fff
                        height: 100vh;
                      }
                    #login .container #login-row #login-column #login-box {
                        margin-top: 120px;
                        max-width: 600px;
                        height: 320px;
                        border: 1px solid grey;
                        background-color: #EAEAEA;
                    }
                    #login .container #login-row #login-column #login-box #login-form {
                        padding: 20px;
                    }
                    #login .container #login-row #login-column #login-box #login-form #register-link {
                        margin-top: -45px;
                    }
                  
                    .text-info {
                        float: left;
                    }
           .text-right {
               float: right;
           }

          .text-center {
              color: #17a2b8;
           }

                `}</style>
                
<div className="bodyLogIn">
  <div id="login">
    <div className="container">
       <div id="login-row" className="row justify-content-center align-items-center">
          <div id="login-column" className="col-md-6">
             <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" action="" method="post">
                  <h3 className="text-center text">Login</h3>
                   <div className="form-group">
                    <label for="username" className="text-info">Username:</label><br/>
                     <input type="text" name="username" id="username" className="form-control"/>
                    </div>
                    <div className="form-group">
                     <label for="password" className="text-info">Password:</label><br/>
                       <input type="text" name="password" id="password" className="form-control"/>
                     </div>
                     <div className="form-group">
                      <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                     </div>
                     <div id="register-link" className="text-right">
                       <a href="#" className="text-info">Register here</a>
                     </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
   }
}

export default LogIn;