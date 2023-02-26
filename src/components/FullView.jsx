import React, { useState, useEffect } from 'react';
import Iframe from 'react-iframe';

export default function FullView({ url }) {
  const [iframeUrls, setIframeUrls] = useState([url, url, url]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue) {
      const newUrls = [inputValue, inputValue, inputValue];
      setIframeUrls(newUrls);
    } else {
      const defaultUrls = [url, url, url];
      setIframeUrls(defaultUrls);
    }
  }, [inputValue, url]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen scale-box">
      <div className="flex justify-center gap-8">
        {iframeUrls.map((iframeUrl, index) => (
          <iframe
            key={index}
            src={iframeUrl}
            width={index === 0 ? 1200 : index === 1 ? 380.869 : 256}
            height={index === 0 ? 800 : index === 1 ? 537.128 : 458}
            className={`inline-block border-0 m-0 p-0 overflow-hidden z-50 
            ${index === 0 ? 'desktop-border' : ''}
            ${index === 1 ? 'tablet-border' : ''}
            ${index === 2 ? 'iphone-border' : ''}
          `}
            style={{ alignSelf: 'flex-end' }}
          ></iframe>
        ))}
      </div>
    </div>
  );
}
