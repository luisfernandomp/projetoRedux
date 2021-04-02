import React from 'react';
import {Image} from 'react-native';
import Logo from '../../../assets/logo.png';
import {Container, ImagemHeader} from './styles';

const Header = () => {
  return (
    <Container>
      <ImagemHeader source={Logo}/>
    </Container>
  )
}

export default Header;
