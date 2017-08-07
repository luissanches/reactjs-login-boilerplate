import React from 'react';
import TopAppBar from '../components/main/TopAppBar';
import LeftDawer from '../components/main/LeftDawer';

function MainPage(props) {
  return (
    <div>
      <TopAppBar history={props.history}/>
      <LeftDawer />
    </div>
  );
}

export default MainPage