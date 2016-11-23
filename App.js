import React from 'react';
import Instant2FAComponent from './src/Instant2FAComponent.jsx';

const App = () => {
  const onError = (e) => {
    alert("There was an error: " + e.message)
  }

  return (
    <div>
      <Instant2FAComponent
        uri='https://hosted.instant2fa.com/users/123456'
        onError={onError}
      ></Instant2FAComponent>
    </div>
  )
};

export default App;
