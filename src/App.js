import './App.css'
import data from './data.json'
import Song from './components/Song'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className="songs">
      <Header />
      <Nav />
      <h1>My Song App</h1>
      <h3>-----------</h3>
      {data.songs.map((song) => (
        <Song song={song} />
      ))}
      <Footer />
    </div>
  )
}

export default App
