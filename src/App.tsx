import { useState } from 'react';
import './App.css';
import {
  ButtonDemo,
  IconDemo,
  LandingPage,
  MainContent,
  showcaseComponents,
  Sidebar,
} from './showcase';

function App() {
  const [activeComponent, setActiveComponent] = useState('');

  const renderComponentDemo = () => {
    switch (activeComponent) {
      case 'button':
        return <ButtonDemo />;
      case 'icon':
        return <IconDemo />;
      case '':
        return (
          <LandingPage onGetStarted={() => setActiveComponent('button')} />
        );
      default:
        return <div>Component not found</div>;
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 flex'>
      <Sidebar
        components={showcaseComponents}
        activeComponent={activeComponent}
        onComponentSelect={setActiveComponent}
      />

      <MainContent
        activeComponent={activeComponent}
        components={showcaseComponents}
      >
        {renderComponentDemo()}
      </MainContent>
    </div>
  );
}

export default App;
