import './App.css'
import Header from './components/Header'
import LocationList from './components/LocationList'

function App() {
  return (
    <>
      <Header />
      <div className="appBody">
        <h2>Selected Cities</h2>
        <LocationList />
      </div>
    </>
  )
}

export default App
