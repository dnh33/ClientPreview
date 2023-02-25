import React, { useEffect } from 'react';

export default function FullView(url) {
  return (
    <div
      className="flex items-center gap-12 justify-center "
      style={{ height: 'calc(100vh - 54px)' }}
    >
      <iframe
        src={url}
        width={994}
        height={584}
        className="inline-block border-0 m-0 p-0 overflow-hidden z-50
"
      ></iframe>

      <iframe
        src={url}
        width={401.869}
        height={537.128}
        className="inline-block border-0 m-0 p-0 overflow-hidden z-50
"
      ></iframe>

      <iframe
        src={url}
        width={194.558}
        height={365.904}
        className="inline-block border-0 m-0 p-0 overflow-hidden z-50
"
      ></iframe>
    </div>
  );
}
