import React from 'react';
import { render } from 'react-dom';

function Popup() {
  return (
    <div>
      <h3>Hello</h3>
      <p>Chrome Extension with React & Webpack</p>
    </div>
  );
}

render(<Popup/>, document.getElementById("chrome-extension"));
