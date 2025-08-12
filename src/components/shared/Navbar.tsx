import React from 'react'
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';
import CardIcons from './CardIcons';
import FavouriteIcon from './FavouriteIcon';
import MobileMenu from './MobileMenu';
import { currentUser } from '@clerk/nextjs/server';
import { ClerkLoaded, SignedIn,  UserButton } from '@clerk/nextjs';
import SignInButtonComponents from './SignInButtonComponents';


const Navbar = async () => {
  const user = await currentUser();
  return (
    <header className='bg-white border-b border-b-gray-200 py-5'>
      <Container className='flex items-center justify-between gap-7 text-lightColor'>
        {/* logo */}
        <div className='w-auto md:w-1/3 flex items-center justify-start gap-2.5'>
          <MobileMenu/>
          <Logo/>
        </div>
        {/* header Menu */}
        <HeaderMenu/>
        {/* userIcons */}
        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
          <SearchBar/>
          <CardIcons/>
          <FavouriteIcon/>
          <ClerkLoaded>
            <SignedIn>
              <UserButton/>
            </SignedIn>
          {!user && (
            <SignInButtonComponents/>
          )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  )
}

export default Navbar;