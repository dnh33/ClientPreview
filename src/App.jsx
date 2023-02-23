import React, { useState } from 'react';
import {
  MdDevicesOther,
  MdDesktopMac,
  MdTabletMac,
  MdPhoneIphone,
} from 'react-icons/md';
import DesktopView from './components/DesktopView';
import FullView from './components/FullView';
import MobileView from './components/MobileView';
import TabletView from './components/TabletView';
import './App.css';

function App() {
  const [view, setView] = useState('desktop');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const ShowcaseUrl = 'https://www.66nord.com/';

  let content;
  switch (view) {
    case 'desktop':
      content = <DesktopView url={ShowcaseUrl} />;
      break;
    case 'tablet':
      content = <TabletView url={ShowcaseUrl} />;
      break;
    case 'mobile':
      content = <MobileView url={ShowcaseUrl} />;
      break;
    case 'full':
      content = <FullView url={ShowcaseUrl} />;
      break;
    default:
      content = <DesktopView />;
  }

  return (
    <div className="h-full w-full flex flex-col">
      <header>
        <nav className="navbar z-50 bg-gray-900 text-white py-2 px-4 flex items-center justify-center gap-8">
          <img src="/webfair-logo.png" alt="LOGO" className="h-5 mr-2" />
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
        </nav>
      </header>
      <main className="flex-1 h-full">{content}</main>
    </div>
  );
}

export default App;
