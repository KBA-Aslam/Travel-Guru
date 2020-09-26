import React from 'react';
import fbLogo from '../../Icon/fb.png'
import googleLogo from '../../Icon/google.png'

const Login = () => {
    return (
        <div>
               <div className="row">
                    <div className="col "> 
                    <div className="col justify-content-center row  justify-content-center">
                    <button className="fb-button" onClick={() => { handleFacebook() }}><img src={fbLogo} className="img-fluid" style={{ width: '35px', height: '35px' }} alt="" /> continue with facebook</button>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col "> 
                    <div className="col justify-content-center row  justify-content-center">
                    <button className="fb-button" onClick={() => { handleGoogle() }}><img src={googleLogo} className="img-fluid" style={{ width: '35px', height: '35px' }} alt="" /> continue with Googles</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Login;