import {Route, Routes} from 'react-router-dom';

import BoardPage from './pages/BoardPage/BoardPage';
import TicketPage from './pages/TicketPage/TicketPage';

function App() {
  return(
    <Routes>
      <Route path="*" element={<BoardPage />}/>
      <Route path="/full/:id/*" element={<TicketPage />}/>
    </Routes>
  );
}

export default App;
