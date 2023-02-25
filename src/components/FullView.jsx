import React, { useEffect, useState } from 'react';

export default function FullView({ url }) {
  const [iframeUrls, setIframeUrls] = useState([]);

  useEffect(() => {
    setIframeUrls([url, url, url]);
  }, [url]);

  return (
    <div
      className="flex items-center gap-12 justify-center"
      style={{ height: 'calc(100vh - 54px)' }}
    >
      {iframeUrls.map((iframeUrl, index) => (
        <iframe
          key={index}
          src={iframeUrl}
          width={index === 0 ? 994 : index === 1 ? 401.869 : 194.558}
          height={index === 0 ? 584 : index === 1 ? 537.128 : 365.904}
          className="inline-block border-0 m-0 p-0 overflow-hidden z-50"
        ></iframe>
      ))}
    </div>
  );
}
