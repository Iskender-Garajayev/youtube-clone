import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Videodetail from './components/Videodetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ background: '#f90' }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video:id' element={<Videodetail />} />
          <Route path='/channel:id' element={<ChannelDetail />} />
          <Route path='/search:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
