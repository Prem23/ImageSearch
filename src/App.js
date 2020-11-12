import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './header';
import Search from './search';
import ImgList from './imglist';

function App() {
  const [search, setSearch] = React.useState('');
  const [imgList, setImgList] = React.useState([]);

  const handleSearch = ev => {
    setSearch(ev.currentTarget.previousElementSibling.value);
  }

  React.useEffect(() => {
    axios.get(`https://www.alamy.com/xml-search-results.asp?qt=${search}`, {
      headers: {
        'Content-Type': 'application/xml'
      }
    })
    .then(resp => {
      setImgList([]);
    })
    .catch(err => {
      console.log(err);
    })

  },[search])

  return (
    <div className="App">
      <Header />
      <Search search={search} handleSearch={handleSearch} />
      <ImgList imgList={imgList} />
    </div>
  );
}

export default App;
