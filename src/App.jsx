import React, { useState } from 'react';
import {
  MdDevicesOther,
  MdDesktopMac,
  MdTabletMac,
  MdPhoneIphone,
  MdBuild,
} from 'react-icons/md';
import DesktopView from './components/DesktopView';
import FullView from './components/FullView';
import MobileView from './components/MobileView';
import TabletView from './components/TabletView';
import './App.css';

function App() {
  const [view, setView] = useState('full');
  const [url, setUrl] = useState('https://kritiskinfrastruktur.dk');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  let content;
  switch (view) {
    case 'desktop':
      content = <DesktopView url={url} />;
      break;
    case 'tablet':
      content = <TabletView url={url} />;
      break;
    case 'mobile':
      content = <MobileView url={url} />;
      break;
    case 'full':
      content = <FullView url={url} />;
      break;
    default:
      content = <DesktopView />;
  }

  const [inputVisible, setInputVisible] = useState(false);

  function handleToggleInput() {
    setInputVisible(!inputVisible);
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setUrl('https://' + event.target.value);
      console.log('I was pressed');
      console.log(url);
    }
  };

  return (
    <div className="h-full w-full flex flex-col">
      <header>
        <nav className="navbar z-50 bg-gray-900 text-white py-2 px-4 flex items-center justify-between">
          <div className="navbar-left flex items-center">
            <img src="/webfair-logo.png" alt="LOGO" className="h-5 mr-2" />
          </div>
          <div className="navbar-middle flex items-center">
            <div className="navbar-buttons flex items-center gap-4">
              <button
                title="Desktop view"
                className={`navbar-button flex items-center gap-2 ${
                  view === 'desktop' ? 'active' : ''
                }`}
                onClick={() => handleViewChange('desktop')}
              >
                <MdDesktopMac />
                {/* Desktop */}
              </button>
              <button
                title="Tablet view"
                className={`navbar-button flex items-center gap-2 ${
                  view === 'tablet' ? 'active' : ''
                }`}
                onClick={() => handleViewChange('tablet')}
              >
                <MdTabletMac />
                {/* Tablet */}
              </button>
              <button
                title="Mobile view"
                className={`navbar-button flex items-center gap-2 ${
                  view === 'mobile' ? 'active' : ''
                }`}
                onClick={() => handleViewChange('mobile')}
              >
                <MdPhoneIphone />
                {/*  Mobile */}
              </button>
              <button
                title="View all devices"
                className={`navbar-button flex items-center gap-2 ${
                  view === 'full' ? 'active' : ''
                }`}
                onClick={() => handleViewChange('full')}
              >
                <MdDevicesOther />
                {/*  Full */}
              </button>
            </div>
          </div>
          <div className="navbar-right flex items-center">
            {' '}
            <button
              className="navbar-input-button text-xs bg-transparent"
              onClick={handleToggleInput}
            >
              <MdBuild />
            </button>
            {inputVisible && (
              <div className="navbar-input-container">
                <input
                  type="text"
                  className="border-gray-300 rounded-md w-full px-3 py-2 leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ml-4"
                  placeholder="Enter website URL"
                  onKeyDown={handleKeyDown}
                />
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="flex-1 h-full">{content}</main>
    </div>
  );
}

export default App;
