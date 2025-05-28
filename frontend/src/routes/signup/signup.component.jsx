import { Link, useNavigate } from 'react-router-dom';
import './signup.styles.scss';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Temporary placeholder — skip real authentication for now
    navigate('/dashboard');
  };

  return (
    <div className='signup-page'>
      <div className='signup-container'>
        <div className='logo'>📚 MyBookLibrary</div>
        <h2>Create Your Account</h2>
        <form onSubmit={handleSignup} className='signup-form'>
          <label>
            Name
            <input type='text' required />
          </label>
          <label>
            Email
            <input type='email' required />
          </label>
          <label>
            Password
            <input type='password' required />
          </label>
          <button type='submit' className='signup-button'>
            Sign Up
          </button>
        </form>
        <p className='login-link'>
          Already have an account? <Link to='/login'>Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
