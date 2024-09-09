import CancelIcon from '@mui/icons-material/Cancel';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Icon from '@mui/material/Icon';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';
import './App.css';
import { ReactComponent as LoginSvg } from './assets/images/login.svg';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassord = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='login-page'>
        {/* Navbar section */}
        <div className='px-4 py-4'>
          <Navbar />
        </div>
        <div className='login-wrapper'>
          {/* Login Page Text and Subtext */}
          <h1 className='login-signin-txt'>Sign in</h1>
          <div className='login-sub-txt mb-8'>
            Enter your details to proceed further
          </div>
          {/* Login Form */}
          <div className='login-input-container'>
            <FormControl sx={{ mb: 2, width: '100%' }} variant='outlined'>
              <InputLabel htmlFor='email'>Email</InputLabel>
              <OutlinedInput
                id='email'
                type={'text'}
                endAdornment={
                  <InputAdornment
                    position='end'
                    sx={{ '&>span': { height: '1.5em' } }}
                  >
                    <Icon>
                      <EmailIcon sx={{ fontSize: '18px' }} />
                    </Icon>
                  </InputAdornment>
                }
                label='Email'
              />
            </FormControl>
            <FormControl sx={{ mb: 1, width: '100%' }} variant='outlined'>
              <InputLabel htmlFor='email'>Password</InputLabel>
              <OutlinedInput
                id='password'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment
                    position='end'
                    sx={{ '&>span': { height: '1.5em' } }}
                  >
                    {password && (
                      <Icon onClick={() => setPassword('')}>
                        <CancelIcon
                          sx={{
                            fontSize: '18px',
                            color: '#EB5E55',
                            cursor: 'pointer',
                          }}
                        />
                      </Icon>
                    )}
                    <Icon onClick={handleShowPassord}>
                      {showPassword ? (
                        <VisibilityOff sx={{ cursor: 'pointer' }} />
                      ) : (
                        <Visibility sx={{ cursor: 'pointer' }} />
                      )}
                    </Icon>
                  </InputAdornment>
                }
                label='Password'
              />
              <div className='flex justify-between mb-6 mt-2'>
                <FormControlLabel
                  value='remember-me'
                  control={
                    <Checkbox
                      size='small'
                      sx={{ '&>span': { fontSize: '0.825rem' } }}
                    />
                  }
                  label='Remember me'
                  className='font-small'
                />
                <Link href='#' className='pt-2 link font-small bold'>
                  Recover password
                </Link>
              </div>
            </FormControl>
            <Button variant='contained'>Continue</Button>
          </div>
        </div>
        {/* Alternate Login Options */}
        <div className='login-input-container'>
          <Divider variant='middle'>or</Divider>
        </div>
        <div className='login-input-container flex flex-col gap-2 mt-6'>
          {/* Place your code for the additional buttons here */}
        </div>
        <div className='login-svg'>
          <LoginSvg />
        </div>
      </div>
    </>
  );
}

export default App;
