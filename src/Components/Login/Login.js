import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from './firebase.config'
import fbLogo from '../../Icon/fb.png'
import gglLogo from '../../Icon/google.png'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './Login.css'

const Login = () => {

  const history = useHistory();
  const location = useLocation();
  const [newUser, setNewUser] = useState(false);

  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);

    const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider)
        .then(function(result) {

          const { email, displayName } = result.user;
          const logInUser = {
              isLoggedIn: true,
              displayName: displayName,
              email: email,
              success: true,
              error: false
            }
          setIsLoggedIn(logInUser);
          history.replace(from);
        })

        .catch(function(error){
          const logInUser = {
            success:true,
            error: error.message
        }
        setIsLoggedIn(logInUser)
        });
      }

      const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
          const { email, displayName } = res.user;
          const logInUser = {
              isLoggedIn: true,
              displayName: displayName,
              email: email,
              success: true,
              error: false
            }
          setIsLoggedIn(logInUser);
          history.replace(from);
        })
        .catch(error => {
          const logInUser = {
            success:true,
            error: error.message
        }
        setIsLoggedIn(logInUser)
        })
      }

      const handleBlur = (event) => {

        let isFieldValid = true;
        if (event.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(event.target.value);
            isFieldValid = isEmailValid
            console.log(isEmailValid)
        }
        if (event.target.name === 'password') {
            let isPasswordValid = event.target.value.length > 8;
            let passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...isLoggedIn}
            newUserInfo[event.target.name] = event.target.value;

            setIsLoggedIn(newUserInfo);

        }
    }

    // Password Checking
    let passwordCheck = false;
    const password1 = isLoggedIn.password;
    const password2 = isLoggedIn.confirmPassword;
    if (password2 !== '' && password1 !== password2) {
        passwordCheck = 'password does not match';
    }
    console.log(password1, password2, passwordCheck);

    const handleNewCreate = (event) => {
      if (isLoggedIn.email && isLoggedIn.password) {
          firebase.auth().createUserWithEmailAndPassword(isLoggedIn.email, isLoggedIn.password)
              .then(res => {
                  const newUser = { ...isLoggedIn }
                  newUser.error = false;
                  newUser.success = true;
                  newUser.displayName=res.user.displayName;
                  setIsLoggedIn(newUser);
                  history.replace(from);
                  setUserInfo(isLoggedIn.firstName,isLoggedIn.lastName)
              })
              .catch(error => {
                  const newUser = { ...isLoggedIn }
                  newUser.error = error.message;
                  newUser.success = false;
                  setIsLoggedIn(newUser);
                  
              });
      }
      event.preventDefault();
  }

  const setUserInfo=(firstName,lastName)  => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName:firstName+" "+lastName,
        
    }).then(function (res) {
    
    }).catch(function (error) {
    
    });
  }

    const handleSignIn = (event)=>{
      if (isLoggedIn.email && isLoggedIn.password){
          firebase.auth().signInWithEmailAndPassword(isLoggedIn.email, isLoggedIn.password)
          .then(res => {
              const newUser = { ...isLoggedIn }
              newUser.error = false;
              newUser.success = true;
              newUser.displayName=res.user.displayName;
              setIsLoggedIn(newUser);
              history.replace(from);
          })
          .catch(error=>{
              const newUser = { ...isLoggedIn }
              newUser.error = error.message;
              newUser.success = false;
              setIsLoggedIn(newUser);
                      
            });
      }
      
        event.preventDefault();
  }

    return (
            <div className="create-body">
            <Header></Header>
            <div className="container ">
                <div className="row sign-box">
                    <div className="col">
                        <div className="col justify-content-center row justify-content-center">
                            { newUser?
                                <form className="shadow p-3 mb-5 bg-white rounded" onSubmit={handleNewCreate}>
                                <div className="form-group">
                                    <label >First Name</label>
                                    <input type="text" className="form-control" name="firstName" required onBlur={handleBlur} />

                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" name="lastName" required  onBlur={handleBlur} />

                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="text" className="form-control" name="email" required onBlur={handleBlur} />

                                </div>


                                <div className="form-group">
                                    <label >password</label>
                                    {
                                        (isLoggedIn.email != '' && isLoggedIn.password === '') && <small className="form-text text-muted">password should have more than 8 character uppercase lower case with numeric numbers</small>
                                    }
                                    <input type="password" className="form-control" name="password" required onBlur={handleBlur} />

                                </div>
                                <div className="form-group">
                                    <label >Confirm password</label>
                                    <input type="password" className="form-control" name="confirmPassword" required onBlur={handleBlur} />
                                    {
                                        passwordCheck && <small style={{ color: 'red' }} className="form-text">{passwordCheck}</small>
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Create an account" style={{ backgroundColor: 'goldenrod', color: 'black' }} className="form-control" onBlur={handleBlur} />
                                </div>
                                <div className="form-group">
                                    <p>alreay have an account?
                                   
                                            <span onClick={()=>{setNewUser(!newUser)}} style={{cursor: "pointer",color:"goldenrod"}}>Login</span>
                                    </p>
                                </div>




                            </form >: 
                             <form className="shadow p-3 mb-5 bg-white rounded" onSubmit={handleSignIn}>
                             <div className="form-group">
                                 <label > Email</label>
                                 <input type="email" name="email" className="form-control" onBlur={handleBlur}  />
                                 
                             </div>
                            <div className="form-group">
                                <label htmlFor="password">password</label>
                                <input className="form-control" name="password" onBlur={handleBlur} type="password" />
                                <input type="checkbox"/>
                                 <label className="form-check-label" >Remember Me</label>
                            </div>   
                             <div className="form-group">
                                 <input type="submit" className="form-control" id="exampleInputEmail1" style={{ backgroundColor: 'goldenrod', color: 'black'} }  aria-describedby="emailHelp" />
                             </div>
                             <div> 
                                
                                 <p>Don't' have an account?
                                         <span onClick={()=>{setNewUser(!newUser)}} style={{cursor: "pointer",color: "goldenrod"}}>create an account</span>
                                 </p>
                             </div> 
                         </form>
                            }
                        </div>
                    </div>
                </div>
               <div className="row">
                    <div className="col "> 
                    <div className="col justify-content-center row  justify-content-center">
                    <button className="fb-button" onClick={() => { handleFbSignIn() }}><img src={fbLogo} className="img-fluid" style={{ width: '35px', height: '35px' }} alt="" /> continue with facebook</button>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col "> 
                    <div className="col justify-content-center row  justify-content-center">
                    <button className="fb-button" onClick={() => {  handleGoogleSignIn() }}><img src={gglLogo} className="img-fluid" style={{ width: '35px', height: '35px' }} alt="" /> continue with Googles</button>
                    </div>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Login;