import React from 'react'

export default function Profiles({profile}) {
  return (
    <div className='w-full h-fit bg-white rounded-lg hover:bg-gray-100 flex items-center p-4'>
        <img src={profile.image?profile.image:""} alt="PfP" />
        <div className='flex flex-col gap-1 p-2'>
            <h1>{profile.name?profile.name:"Test profile"}</h1>
            <p>{profile.message?profile.message:"Test message"}</p>
        </div>
    </div>
  )
}
