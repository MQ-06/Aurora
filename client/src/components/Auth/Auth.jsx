import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate
import * as Components from './AuthStyles';
import { signUpUser, loginUser } from '../../services/api';

function Auth() {
  const [signIn, toggle] = useState(true);
  const navigate = useNavigate(); // ✅ Initialize navigate

  // Sign Up States
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  // Sign In States
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  // Notifications
  const [emailError, setEmailError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState('');

  const validateGmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

  useEffect(() => {
    if (emailError || loginError || signupError || signupSuccess) {
      const timer = setTimeout(() => {
        setEmailError('');
        setLoginError('');
        setSignupError('');
        setSignupSuccess('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [emailError, loginError, signupError, signupSuccess]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!validateGmail(signUpEmail)) {
      setEmailError('Please enter a valid Gmail address for Sign Up.');
      return;
    }

    setEmailError('');
    setSignupError('');
    setSignupSuccess('');

    const userData = {
      name: signUpName,
      email: signUpEmail,
      password: signUpPassword,
    };

    try {
      const response = await signUpUser(userData);
      setSignupSuccess('Account created successfully! Please sign in.');
      console.log('User signed up:', response);
      toggle(true);
    } catch (error) {
      setSignupError(error.response?.data?.message || 'Signup failed.');
      console.error('Signup error:', error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    setEmailError('');
    setLoginError('');

    if (!validateGmail(signInEmail)) {
      setEmailError('Please enter a valid Gmail address for Sign In.');
      return;
    }

    try {
      const response = await loginUser({
        email: signInEmail,
        password: signInPassword,
      });

      console.log('Logged in:', response);
      localStorage.setItem('token', response.token);

      navigate('/dashboard'); // ✅ Redirect to dashboard
    } catch (error) {
      console.error('Login error:', error);
      setLoginError(error.message || 'Invalid email or password.');
    }
  };

  const toggleView = (view) => {
    setEmailError('');
    setLoginError('');
    setSignupError('');
    setSignupSuccess('');
    toggle(view);
  };

  return (
    <Components.Wrapper>
      {(emailError || loginError || signupError || signupSuccess) && (
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: signupSuccess ? '#4BB543' : '#FF4C4C',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          zIndex: 1000,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}>
          {emailError || loginError || signupError || signupSuccess}
        </div>
      )}

      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSignUp}>
            <Components.Title className="font-serifDisplay">Create Account</Components.Title>
            <Components.Input
              type="text"
              placeholder="Name"
              className="font-lato"
              value={signUpName}
              onChange={(e) => setSignUpName(e.target.value)}
              autoComplete="name"
            />
            <Components.Input
              type="email"
              placeholder="Email"
              className="font-lato"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
              autoComplete="email"
            />
            <Components.Input
              type="password"
              placeholder="Password"
              className="font-lato"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
              autoComplete="new-password"
            />
            <Components.Button type="submit">Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSignIn}>
            <Components.Title className="font-serifDisplay">Sign in</Components.Title>
            <Components.Input
              type="email"
              placeholder="Email"
              className="font-lato"
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
              autoComplete="email"
            />
            <Components.Input
              type="password"
              placeholder="Password"
              className="font-lato"
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Components.Anchor href="#" className="font-lato">Forgot your password?</Components.Anchor>
            <Components.Button type="submit" className="font-lato">Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title className="font-serifDisplay">Welcome Back!</Components.Title>
              <Components.Paragraph className="font-lato">
                To keep connected with us please login with your personal info.
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggleView(true)} className="font-lato">
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title className="font-serifDisplay">Hello, Friend!</Components.Title>
              <Components.Paragraph className="font-lato">
                Enter your personal details and start your journey with us.
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggleView(false)} className="font-lato">
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </Components.Wrapper>
  );
}

export default Auth;
