import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FilterDrawer from './components/FilterDrawer/FilterDrawer';

import tagsArray from '../src/data/tags.json';

function App() {

  // useState for Filters button
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  }

  //  useState for Tags button
  const [isTagOn, setIsTagOn] = useState(false);
  const toggleTag = () => {
    setIsOn(!isTagOn);
  }


  return (
    <>
      <Header handleToggleFilters={toggleFilter} CheckIsFilterOpen={isFilterOpen} />
      <FilterDrawer tags={tagsArray} handleToggleTag={toggleTag} checkIsTagOn={isTagOn}/>
      <Footer />
    </>
  )
}

export default App;
