import React from 'react';
// import './NavigationPage.css';

function OpenNav(props) {
  return (
    <div onClick={()=>props.triggerOpen()} style={{color: '#047496'}}>
      <i className="fa fa-bars" />
    </div>
    
  );
}

export default OpenNav;
