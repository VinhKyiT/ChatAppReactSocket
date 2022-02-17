import React from 'react'
import { Image } from '@chakra-ui/react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className="header-left">
            <div className="header-logo">
                <Image src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-5&_nc_sid=6825c5&_nc_ohc=nXuGvLrRvuQAX9UrzPs&_nc_ht=scontent.fsgn5-7.fna&oh=00_AT95h9pO32GosB-Wm79rCrhxHq9v531AWaB4VYvhc68O5g&oe=6212BC3D" alt="logo" />
            </div>
        </div>
        <div className="header-right">
            <ul>
                <li>Rooms</li>
                <li>Features</li>
                <li>Desktop app</li>
                <li>Privacy and safety</li>
                <li>For developers</li>
            </ul>
        </div>
    </div>
  )
}

export default Header