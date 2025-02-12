import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  }

  return (
    <>
      <Header onToggleFilters={toggleFilter} CheckIsFilterOpen={isFilterOpen} />
      <main>
        
      </main>
      <Footer />
    </>
  )
}

export default App;
