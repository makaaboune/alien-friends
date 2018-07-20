import React from 'react';

const Scroll =(props) => {
  return(
    <div style={{overflowY:'scroll',height:'450px' ,borderTop:'3px solid #000'}}>
      {props.children}
    </div>
  )
}

export default Scroll;
