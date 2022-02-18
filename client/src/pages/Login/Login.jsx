import { Container, Image, FormControl,
  Input,
  Button,
  Checkbox,} from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import loginImage from '../../assets/images/login-right-image.png'
import axios from 'axios';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginAccount = () => {
    console.log(`${email} + ${password}`)
  }
  const signupAccount = () => {
    axios.post('http://localhost:8800/auth/register', {
      email,
      username: email.split('@')[0],
      password,
    }).then(res => {console.log(res)})
  }
  return (
    <>
      <Header />
      <Container maxW='container.xl'>
        <div className='login-container'>
          <div className='login-form'>
            <h1 className='slogan'>
              Hang out <br /> anytime, anywhere
            </h1>
            <div className='small-title'>Messenger makes it easy and fun to stay close to your favourite people.</div>
            <FormControl>
              <Input id='email' type='email' placeholder='Email address or phone number' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <Input id='password' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
            <div className="button-area">
              <Button className='login-btn' onClick={() => loginAccount()}>Log In</Button>
              <Button className='login-btn' onClick={() => signupAccount()}>Sign Up</Button>
              <div className="forgot-pw-btn">Forgotten your password?</div>
            </div>
            <Checkbox borderColor='#ccc' color='#595959'>Keep me signed in</Checkbox>
          </div>
          <div className='login-image'>
            <Image src={loginImage} alt="VKITCHATAPP" />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login