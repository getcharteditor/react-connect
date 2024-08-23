# @chartapi/react-connect

[![NPM](https://img.shields.io/npm/v/@chartapi/react-connect)](https://www.npmjs.com/package/@chartapi/react-connect)

## Install

```bash
npm install --save @chartapi/react-connect
```

## Usage

```jsx
import React, { useState } from 'react';
import { useChartConnect } from '@chartapi/react-connect';

const App = () => {
  const [code, setCode] = useState(null);

  const onSuccess = ({ code }) => setCode(code);
  const onError = ({ errorMessage }) => console.error(errorMessage);
  const onClose = () => console.log('User exited Chart Connect');

  const { open } = useChartConnect({
    clientId: '<your-client-id>',
    // zIndex: 999,
    // sandbox: true,
    onSuccess,
    onError,
    onClose,
  });

  return (
    <div>
      <header>
        <p>Code: {code}</p>
        <button type="button" onClick={() => open()}>
          Open Chart Connect
        </button>
      </header>
    </div>
  );
};
```
