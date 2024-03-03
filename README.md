# @trychart/react-connect

[![NPM](https://img.shields.io/npm/v/@trychart/react-connect)](https://www.npmjs.com/package/@trychart/react-connect)

## Install

```bash
npm install --save @trychart/react-connect
```

## Usage

```jsx
import React, { useState } from 'react';
import { useChartConnect } from '@trychart/react-connect';

const App = () => {
  const [code, setCode] = useState(null);

  const onSuccess = ({ code }) => setCode(code);
  const onError = ({ errorMessage }) => console.error(errorMessage);
  const onClose = () => console.log('User exited Chart Connect');

  const { open } = useChartConnect({
    clientId: '<your-client-id>',
    // Check Chart's [documentation](https://developer.trychartapi.com/docs/reference/96f5be9e0ec1a-providers) for the full list of payroll provider IDs
    // payrollProvider: '<payroll-provider-id>',
    // For `sandbox`, omit or use 'false' if in production. Use "chart" or "provider" for sandbox testing, depending on test plan. See Chart's [documentation](https://developer.trychartapi.com/implementation-guide/Test/Testing-Plan) for an overview of Chart and Provider sandboxes.
    // sandbox: false,
    // manual: false,
    // zIndex: 999,
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
