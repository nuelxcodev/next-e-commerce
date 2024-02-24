import { Avatar } from '@mui/material'
import { useSession } from 'next-auth/react';
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

function Avatarimage() {
  const { data: session } = useSession();

  function stringToColor(string) {
    let hash = 0;
    let color = '#';
    /* eslint-disable no-bitwise */
    for (let i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    for (let i; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: (`${name.split(' ')[0][0]}${name.split(' ')[1][0]}`).toUpperCase(),
    };
  }
  return (
    <div>
      <div className=' flex m-0'>
        {session?.user.name ?
          session?.user.image ? (
            <Avatar alt={session.user.name}
              src={session.user.image} />) :
            (<Avatar {...stringAvatar(session?.user.name.toString())} />) :
          <BiUserCircle size={35} />
        }
        <span className='m-1'>{session?.user.name}</span>
      </div>
    </div>
  )
}

export default Avatarimage