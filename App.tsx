import React, { Suspense, useState } from 'react';
import { LandingPage } from './components/LandingPage';

const EditorApp = React.lazy(() => import('./EditorApp'));

const App: React.FC = () => {
  const [isLanding, setIsLanding] = useState(true);

  if (isLanding) {
    return <LandingPage onEnter={() => setIsLanding(false)} />;
  }

  return (
    <Suspense fallback={null}>
      <EditorApp />
    </Suspense>
  );
};

export default App;
