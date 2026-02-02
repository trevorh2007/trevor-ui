import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  ButtonDemo,
  IconDemo,
  LandingPage,
  MainContent,
  PopoverDemo,
  showcaseComponents,
  Sidebar,
} from './showcase';
import { ThemeProvider } from './showcase/contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className='min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-all duration-150'>
          <Sidebar components={showcaseComponents} />

          <MainContent components={showcaseComponents}>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/components/button' element={<ButtonDemo />} />
              <Route path='/components/icon' element={<IconDemo />} />
              <Route path='/components/popover' element={<PopoverDemo />} />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </MainContent>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
