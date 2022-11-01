import './App.css'
import data from './data.json'
import Song from './components/Song'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div className="Songs">
      <h1>My Song App</h1>
      {data.songs.map((song) => (
        <Song song={song} />
      ))}
      <Footer />
      <Header />
    </div>
  )
}

export default App
