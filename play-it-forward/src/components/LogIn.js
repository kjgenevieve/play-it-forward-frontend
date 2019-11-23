import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


function LogIn() {
   return (
   <div>
     <button class="btn-info"><Link id="link" to="/signUp">SignUp</Link></button>
   </div>
 );
}

export default LogIn;

