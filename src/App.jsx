import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Login from './pages/Login';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <HeaderContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
