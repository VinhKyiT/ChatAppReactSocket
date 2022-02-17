import { Container, Image, FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText, } from '@chakra-ui/react'
import React from 'react'
import Header from '../../components/Header/Header'
import loginImage from '../../assets/images/login-right-image.png'
import './Login.css'

function Login() {
  return (
    <>
      <Header />
      <Container maxW='container.xl'>
        <div className='login-container'>
          <div className='login-form'>
            <h1 className='slogan'>
              Hang out <br /> anytime, anywhere
            </h1>
          <FormControl>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
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