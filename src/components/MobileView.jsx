import React from 'react';

export default function MobileView({ url }) {
  return (
    <center>
      <div className="flex -pt-16 items-center justify-center h-screen rounded-lg">
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
