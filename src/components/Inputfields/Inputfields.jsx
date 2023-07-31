import React from 'react';


const Inputfields =({inputchange, value})=>{
  return (
    <>
      <input
            type="text"
            placeholder="write something..."
            name={'name'}
            value={value}
            onChange={inputchange}
          />
    </>
  )
};

export default Inputfields
