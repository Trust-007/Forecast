import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Detail from './pages/Detail';
import getData from './store/forecast/actionThunk';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} replace />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:cityid" element={<Detail />} />
    </Routes>
  );
};

export default App;
