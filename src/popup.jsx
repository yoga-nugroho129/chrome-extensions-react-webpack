import React from 'react';
import { createRoot } from 'react-dom/client';

function Popup() {
  return (
    <div>
      <h3>Hello Test</h3>
      <p>Chrome Extension with React & Webpack</p>
    </div>
  );
}

const root = createRoot(document.getElementById("chrome-extension"))

root.render(<Popup/>);
