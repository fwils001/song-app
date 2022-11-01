const Song = (props) => {
  return (
    <div className="song">
      <h1>Title: {props.song.title}</h1>
      <h2>Artist: {props.song.artist}</h2>
      <h2>Date it reached number 1: {props.song.date}</h2>
      <h2>Weeks at number 1: {props.song.weeks}</h2>
      <h2>Record label: {props.song.label}</h2>
    </div>
  )
}

export default Song
