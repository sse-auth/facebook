# React Facebook Login

> A Component React for Facebook Login

## How to use

### Basic
```js
import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from '@sse-auth/facebook';

const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />,
  document.getElementById('demo')
);
```

### Custom CSS Class and Icon
```js

import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from '@sse-auth/facebook';

const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook" 
  />,
  document.getElementById('demo')
);
```

### Server
```js
'use strict';

import React from 'react';
import FacebookLogin from '@sse-auth/facebook';

class MyComponent extends React.Component {
  constructor(props) {
      super(props);
  };

  responseFacebook = (response) => {
    console.log(response);
  };

  render() {
    return (
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook} 
      />
    )
  }
}

export default MyComponent;
```


## Parameters

|    params    |   value  |             default value            |
|:------------:|:--------:|:------------------------------------:|
|     appId    |  string  |              Required                |
|     size     |  string  |        small - medium - metro        |
|     scope    |  string  | public_profile, email, user_birthday |
|     fields   |  string  |         name,email,picture           |
|   callback   | function |          resultFacebookLogin         |
|   autoLoad   |  boolean |                 false                |
|     xfbml    |  boolean |                 false                |
|   textButton |  string  |          Login with Facebook         |
|   cssClass   |  string  | kep-login-facebook kep-login-facebook-[button-size]|
|   version    |  string  |                  2.3                 |
|   icon       |  string  |                  none                |
|   language   |  string  |                  en_US               |