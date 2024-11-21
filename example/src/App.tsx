import React, { useState } from 'react';
import { useChartConnect, SuccessEvent, ErrorEvent } from '@chartapi/react-connect';

import Result, { ResultContainer } from './Result';

import './App.css';

const App = () => {
  const [sendState, setSendState] = useState<boolean>(false);
  const [result, setResult] = useState<ResultContainer>();

  const onSuccess = (value: SuccessEvent) => setResult({ kind: 'success', value });
  const onError = (value: ErrorEvent) => setResult({ kind: 'error', value });
  const onClose = () => setResult({ kind: 'closed' });

  const { open } = useChartConnect({
    clientId: process.env.REACT_APP_CHART_CLIENT_ID,
    onSuccess,
    onError,
    onClose,
  });

  const submissionHandler: React.FormEventHandler<HTMLFormElement>  = (e) => {
    e.preventDefault();
    open({
      ...(sendState ? { state: new Date().toISOString() } : undefined),
    })
  };

  return (
    <div className="container">
      <h2><a href="https://www.npmjs.com/package/@chartapi/react-connect">@chartapi/react-connect</a> Example App</h2>
      <form className="actions" onSubmit={submissionHandler}>
        <div className="row">
          <label className="top-label">Include State:</label>
          <input type="checkbox" checked={sendState} onChange={() => setSendState(prev => !prev)} />
        </div>
        <div className="row">
          <button className="cta" type="submit">
            Open Chart Connect
          </button>
        </div>
      </form>
      <div className="results">
          { !result && <p>Complete a Chart Connect session and the success event will be displayed here</p> }
          { result && <Result result={result} /> }
      </div>
    </div>
  );
};
export default App;
