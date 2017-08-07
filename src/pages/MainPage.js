import React from 'react';
import TopAppBar from '../components/main/TopAppBar';
import LeftDrawer from '../components/main/LeftDrawer';

function MainPage(props) {
  return (
    <div>
      <TopAppBar history={props.history}/>
      <LeftDrawer />
    </div>
  );
}

export default MainPage