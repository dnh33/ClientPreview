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
    <div className="flex flex-column justify-end h-screen scale-box">
      <div className="flex justify-between">
        {iframeUrls.map((iframeUrl, index) => (
          <Iframe
            key={index}
            url={iframeUrl}
            width={index === 0 ? 1200 : index === 1 ? 480.869 : 256}
            height={index === 0 ? 800 : index === 1 ? 737.128 : 458}
            className={`inline-block border-0 m-0 p-0 overflow-hidden z-50 
            ${index === 0 ? 'desktop-border' : ''}
            ${index === 1 ? 'tablet-border' : ''}
            ${index === 2 ? 'iphone-border' : ''}
          `}
            style={index === 0 ? { alignSelf: 'flex-end' } : {}}
            userAgent={
              index === 0
                ? 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                : index === 1
                ? 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
                : 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
            }
          />
        ))}
      </div>
    </div>
  );
}
