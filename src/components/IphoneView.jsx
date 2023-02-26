import React from 'react';

export default function IphoneView({ url }) {
  return (
    <center>
      <div className="my-9">
        <iframe
          width={373}
          height={762}
          src={url}
          className="inline-block border-0 m-0 p-0 overflow-hidden z-50
"
        />
      </div>
    </center>
  );
}
