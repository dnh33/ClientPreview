import React from 'react';

export default function FullView(url) {
  return (
    <div
      className="flex items-center gap-12 justify-center "
      style={{ height: 'calc(100vh - 54px)' }}
    >
      <iframe
        src={url}
        width={781.846}
        height={586.385}
        sandbox="allow-same-origin allow-scripts"
        className="inline-block border-0 m-0 p-0 overflow-hidden z-50
"
      ></iframe>

      <iframe
        src={url}
        width={401.869}
        height={537.128}
        sandbox="allow-same-origin allow-scripts"
        className="inline-block border-0 m-0 p-0 overflow-hidden z-50
"
      ></iframe>

      <iframe
        src={url}
        width={185.558}
        height={365.904}
        sandbox="allow-same-origin allow-scripts"
        className="inline-block border-0 m-0 p-0 overflow-hidden z-50
"
      ></iframe>
    </div>
  );
}
