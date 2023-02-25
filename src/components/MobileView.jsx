import React from 'react';

export default function MobileView({ url }) {
  return (
    <center>
      <div>
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
