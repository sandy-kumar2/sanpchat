import React from 'react'
import Friend from './Friend'
import { auth } from '@/auth'
import { getSidebarUsers } from '@/lib/userdata';

const Friends = async () => { 
  const authUser = await auth();
  const otherUsers:any =  authUser?.user ? await getSidebarUsers(authUser?.user?._id) : [];

  return (
    <div className='flex-1 overflow-y-auto '>
      {
        otherUsers?.map((user: any) => {
          return (
            <Friend key={user._id} user={user}/>
          )
        })
      }
    </div>
  )
}

export default Friends