import React from 'react'
import styles from './SideBar.module.css'
import Profiles from './Profiles/Profiles'

export default function SideBar() {
  let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,1,1,1,1,1,1,1]
  return (
    <div className={`bg-white h-full  flex flex-col overflow-y-scroll overflow-hidden p-4 rounded-lg ${styles.sidebar}`}>
        {arr.map((item,index)=>{
          return <Profiles profile={item}/>
        })}
        <div className={` fixed bottom-4 left-4 bg-black h-60 ${styles.profile} `}>

        </div>
    </div>
  )
}
