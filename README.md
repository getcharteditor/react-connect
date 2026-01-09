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
    // sessionSettingsId: '<your-session-settings-id>', // optional; if provided, will prefill information in the form
    // flow: 'irs-8821', // optional; if provided, will set the flow to the specified flow override the master settings
    // providers: ['irs', 'ssa'], // optional; if provided, will set the providers to the specified providers override the master 
    // overlay: `rgba(199,201,199,0.5)` // optional; if provided, will set the overlay to the specified overlay CSS attribute
    // metadata: { userId: '123', source: 'web' }, // optional; any JSON object that will be passed as a stringified query parameter

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

## Advanced Usage

### Passing Metadata

You can pass custom metadata as a JSON object that will be included as a stringified query parameter. This is useful for tracking additional context about the connection session:

```jsx
const { open } = useChartConnect({
  clientId: '<your-client-id>',
  metadata: {
    userId: '12345',
    source: 'dashboard',
    campaign: 'spring-2024',
  },
  onSuccess,
  onError,
  onClose,
});
```

**Note:** The metadata object is JSON-stringified and passed as a URL search parameter. Avoid passing large objects or non-serializable values (e.g., functions, circular references).
