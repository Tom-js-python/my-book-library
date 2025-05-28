import { Link, useNavigate } from 'react-router-dom';

import './login.styles.scss';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // No real auth yet, so just go to dashboard
    navigate('/dashboard');
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='logo'>📚 MyBookLibrary</div>
        <h2>Log In</h2>
        <form onSubmit={handleLogin} className='login-form'>
          <label>
            Email
            <input type='email' required />
          </label>
          <label>
            Password
            <input type='password' required />
          </label>
          <button type='submit' className='login-button'>
            Log In
          </button>
        </form>
        <p className='signup-link'>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
