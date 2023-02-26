import React from 'react';

export default function MobileView({ url }) {
  return (
    <center>
      <div className="grid h-screen place-items-center">
        <iframe
          width={332}
          height={568}
          src={url}
          className="inline-block border-0 m-0 p-0 overflow-hidden z-50  iphone-frame
"
        />
      </div>
    </center>
  );
}
