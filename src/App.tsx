import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Router from '@routes/index';


const App = () => (
  <Suspense fallback={<CircularProgress />}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Suspense>
);

export default App;
