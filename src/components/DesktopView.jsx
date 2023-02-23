import React from 'react';

export default function DesktopView({ url }) {
  return (
    <>
      <iframe
        width={'100%'}
        height={'1000px'}
        src={url}
        className="inline-block border-0 m-0 p-0 overflow-hidden z-50
"
      />
    </>
  );
}
