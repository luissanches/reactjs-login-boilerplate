import React from 'react';
import TopAppBar from '../components/main/TopAppBar'

function MainPage(props) {
  return (
    <div>
      <TopAppBar history={props.history}/>
    </div>
  );
}

export default MainPage