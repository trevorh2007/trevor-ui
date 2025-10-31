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
import { ThemeProvider } from './showcase/contexts/ThemeContext';

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
    <ThemeProvider>
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-all duration-150'>
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
    </ThemeProvider>
  );
}

export default App;
