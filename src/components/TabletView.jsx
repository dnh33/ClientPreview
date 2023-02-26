import React from 'react';
import Iframe from 'react-iframe';

export default function TabletView({ url }) {
  return (
    <center>
      <div className="flex items-center justify-center scale-90">
        <Iframe
          url={url}
          width="972px"
          height="860px"
          className="inline-block border-0 m-0 p-0 overflow-hidden z-50"
          display="block"
          position="relative"
        />
      </div>
    </center>
  );
}
