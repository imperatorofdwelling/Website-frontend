import React from 'react';
import Image from 'next/image'
import GoogleLogo from '../../../public/images/login/googleLogo.svg'

const Auth0: React.FC = () => {
  return (
    <div className="flex gap-2 justify-center items-center mt-6 w-full text-xs leading-none text-center text-white whitespace-nowrap">
      <GoogleLogo />
      <div className="self-stretch my-auto">Or</div>
      {/* <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e63c3b049431e8e44d1164f8a8cb7a3f3dcc1effccdbb6fbd63dcb398baa78b?placeholderIfAbsent=true&apiKey=6b438dbe2e8a48a5baec60fd6590cb02"
      width={40} height={40} alt="Twitter Icon" className="object-contain shrink-0 self-stretch my-auto"
      /> */}
    </div>
  );
};

export default Auth0;
