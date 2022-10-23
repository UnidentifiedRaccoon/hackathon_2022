import {Navigate, Route, Routes} from 'react-router-dom';

import BoardPage from './pages/BoardPage/BoardPage';
import TicketPage from './pages/TicketPage/TicketPage';
import Layout from './pages/Layout/Layout';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import useAuth from './hooks/useAuth';

const Authorized = () => {
  const {isAuth} = useAuth();
  return (
    <>
      {isAuth ? <Layout>
        <Routes>
          <Route path="*" element={<BoardPage />}/>
          <Route path="/full/:id/*" element={<TicketPage />}/>
        </Routes>
      </Layout> : <Navigate to="/login"/>}
    </>
  );
};

function App() {
  return(
    <>
      <Routes>
        <Route path="*" element={<Authorized />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/sign-up" element={<SignUpPage />}/>
      </Routes>

    </>
  );
}

export default App;
