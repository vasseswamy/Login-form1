import logo from './logo.svg';
import './App.css';
import user from "./images/user.png";
import mail from "./images/mail.png";
import pass from "./images/pass.png";
function App() {
  return (
    <div className="main">
      <div className="sub-main">
      
        <div className="imgs">
          <div className="container-image">
            <img  src={user} alt="user" className="user"/>

          </div>

        </div>
        <div>
          <h1>Login Page</h1>
          
          <div>
          <img  src={mail} alt="mail" className="mail"/>
          <input type="text" placeholder='User name' className='name'/>
          </div>
          <div className='second-input'>
          <img  src={pass} alt="pass" className="mail"/>
          <input type="password" placeholder='Enter Password' className='name'/>
          </div>
          <div className='login-button'>
          <button>Login</button>
          </div>
         
           <p className='link'>
             <a href="#">Forgot Password</a>Or<a href="#">Sign Up</a>
           </p>
        
          </div>
        </div>
    </div>
  );
}

export default App;
