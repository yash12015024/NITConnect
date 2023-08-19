import React from 'react'
import { Avatar } from '@material-ui/core';
import "./css/QuoraBox.css";
import { selectUser } from '../feature/userSlice';
import { useSelector } from 'react-redux';

function QuoraBox() {
  const user = useSelector(selectUser);
  return (
    <>
      <div className='quoraBox'>
        <div className='quoraBox__info'>
          <Avatar src={user?.photo} />
          <p>What is Your Question or Link</p>
        </div>
      </div>
    </>
  )
}

export default QuoraBox;
