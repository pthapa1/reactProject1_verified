import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { LoginButton } from '../header/LoginButtons.styled';
import { ReactComponent as GoogleIcon } from '../header/svg/GoogleIcon.svg';

const clientId = 'Your_Client_ID_from_google';

function GoogleLogInOut() {
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogOutButton, setShowLogOutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
    setShowLogOutButton(true);
    setShowLoginButton(false);
  };

  const onLoginFailure = (res) => {
    console.log('[Login failed] res:', res);
  };

  const onSignOutSuccess = () => {
    alert('You have been logged out successfully');
    console.clear();
    setShowLoginButton(true);
    setShowLogOutButton(false);
  };

  return (
    <div>
      {showLoginButton ? (
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Google
            </button>
          )}
          buttonText='Sign In with Google'
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      ) : null}
      {showLogOutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText='Sign Out'
          onLogoutSuccess={onSignOutSuccess}
        />
      ) : null}
    </div>
  );
}

export default GoogleLogInOut;
