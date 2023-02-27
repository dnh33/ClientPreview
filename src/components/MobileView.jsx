import React from 'react';

export default function MobileView({ url }) {
  return (
    <center>
      <div className="p-24 h-screen rounded-lg scale-90">
        <iframe
          width={332}
          height={568}
          src={url}
          className="inline-block border-0 m-0 p-0 overflow-hidden rounded-lg border-common mx-auto z-0"
        />
      </div>
    </center>
  );
}
