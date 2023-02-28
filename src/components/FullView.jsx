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
    <div className="flex items-center justify-center -mt-16 h-screen scale-box">
      <div className="flex justify-center gap-8">
        {iframeUrls.map((iframeUrl, index) => (
          <Iframe
            url={iframeUrl}
            width={index === 0 ? 1280 : index === 1 ? 480 : 300}
            height={index === 0 ? 840 : index === 1 ? 738 : 558}
            className={`inline-block border-common m-0 p-0 overflow-hidden z-50 
            ${index === 0 ? 'desktop-border' : ''}
            ${index === 1 ? 'tablet-border' : ''}
            ${index === 2 ? 'iphone-border' : ''}
            
          `}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
