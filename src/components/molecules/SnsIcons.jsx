import React from 'react';
import Icon from '../atoms/Icon';
import iconFacebook from '../../assets/icons/icons-facebook.svg';
import iconInstagram from '../../assets/icons/icons-instagram.svg';
import iconTwitter from '../../assets/icons/icons-twitterx.svg';


export default function SnsIcons() {
    return (
        <div>
          <Icon src={iconTwitter} alt="Twitter" link="https://twitter.com/" />
          <Icon src={iconFacebook} alt="Facebook" link="https://facebook.com/" />
          <Icon src={iconInstagram} alt="Instagram" link="https://instagram.com/" />
        </div>
      );
}