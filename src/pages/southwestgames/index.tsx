import React from 'react'
import swGamesLogo from "../../../public/img/swgames/sg3.png";
import Image from 'next/image';

function EarlyRegistration() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Image src={swGamesLogo} alt="Southwest Games Logo" width="500" height="500" />
            <h2 className='text-2xl mt-6'>Coming Soon</h2>
            <h1 className='text-8xl font-bold'>Oct 26th, 2024</h1>

        </div>
    )
}

export default EarlyRegistration