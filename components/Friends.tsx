import React, { useEffect, useState } from 'react';
import Friend from './Friend';
import { auth } from '@/auth';
import { getSidebarUsers } from '@/lib/userdata';

const Friends = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const authUser = await auth();
        if (authUser?.user?._id) {
          const otherUsers = await getSidebarUsers(authUser.user._id);
          setUsers(otherUsers);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Run once on component mount

  return (
    <div className='flex-1 overflow-y-auto'>
      {users.map((user) => (
        <Friend key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Friends;
