import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


function SignUp() {
  
   return (
      <div>
          <style> {`
              .bodySignUp {
                  margin: 0;
                  padding: 0px;
                  padding-bottom: 20px;
                  background-color: #fff
                  height: 100vh;
                }
              #login .container #login-row #login-column #login-box {
                  margin-top: 100px;
                  max-width: 600px;
                  height: 620px;
               
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
          
         <div className="bodySignUp">
            <div id="login">
               <div className="container">
               <div id="login-row" className="row justify-content-center align-items-center">
                  <div id="login-column" className="col-md-6">
                     <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="" method="post">
                           <h3 className="text-center text">Sign up here!</h3>

                              <div className="form-group">
                              <label for="fullname" className="text-info">Full name:</label><br/>
                              <input type="text" name="fullname" id="fullname" className="form-control"/>
                              </div>

                              <div className="form-group">
                              <label for="dob" className="text-info">DOB:</label><br/>
                              <input type="text" name="dob" id="dob" className="form-control"/>
                              </div>
                     
                              <div className="form-group">
                              <label for="username" className="text-info">Username:</label><br/>
                              <input type="text" name="username" id="username" className="form-control"/>
                              </div>

                              <div className="form-group">
                              <label for="email" className="text-info">Email:</label><br/>
                              <input type="text" name="email" id="email" className="form-control"/>
                              </div>

                              <div className="form-group">
                              <label for="password" className="text-info">Password:</label><br/>
                              <input type="text" name="password" id="password" className="form-control"/>
                              </div>

                              <div className="form-group">
                              <input type="Sign up" name="Sign up" className="btn btn-info btn-md" value="Sign up"/>
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

export default SignUp;

