import React from 'react';

export default function DesktopView({ url }) {
  return (
    <>
      <iframe
        src={url}
        className="inline-block desktop-frame border-0 m-0 p-0 overflow-hidden z-50
"
      />
    </>
  );
}
