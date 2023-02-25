import React from 'react';

export default function TabletView({ url }) {
  return (
    <center>
      <div className="grid h-screen place-items-center">
        <iframe
          width={972}
          height={860}
          src={url}
          className="inline-block border-0 m-0 p-0 overflow-hidden z-50
"
        />
      </div>
    </center>
  );
}
