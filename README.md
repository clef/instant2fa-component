# Instant2FAComponent

## Installation

```bash
npm install --save instant2fa-component
```

## Settings page

```javascript
// UserSettings.jsx
import React from 'react';
import Instant2FAComponent from 'instant2fa-component';

const UserSettings = () => {
  return (
    <div>
      <Instant2FAComponent
        uri='YOUR_SETTINGS_PAGE_URI'
      ></Instant2FAComponent>
    </div>
  )
};

export default UserSettings;
```

## Verification page

```javascript
// UserVerification.jsx
import React from 'react';
import Instant2FAComponent from 'instant2fa-component';

const UserVerification = () => {
  const onEvent = (event) => {
    if (event.type === "verificationSuccess") {
      var token = event.payload.token;
      console.log("Verification token is: " + token);

      $.ajax({
          method: 'POST',
          url: '/two-factor-verification',
          data: {
              instant2faToken: event.payload.token
          }
      });
    }
  }

  return (
    <div>
      <Instant2FAComponent
        uri='YOUR_VERIFICATION_PAGE_URI'
        onEvent={onEvent}
      ></Instant2FAComponent>
    </div>
  )
};

export default UserVerification;
```
