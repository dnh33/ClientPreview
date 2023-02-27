import React from 'react';
import Iframe from 'react-iframe';

export default function TabletView({ url }) {
  return (
    <center>
      <div className="rounded-xl scale-90 h-screen">
        <Iframe
          url={url}
          width="972px"
          height="860px"
          className="inline-block rounded-xl border-0 m-0 p-0 overflow-hidden z-50"
        />
      </div>
    </center>
  );
}
