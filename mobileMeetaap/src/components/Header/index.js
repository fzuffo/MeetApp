import React from 'react';

import logo from '~/assets/logo.png';
import { BackgroundHeader, Image } from './styles';

export default function Header() {
  return (
    <BackgroundHeader>
      <Image source={logo} />
    </BackgroundHeader>
  );
}
