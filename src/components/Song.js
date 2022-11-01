const Song = (props) => {
  return (
    <div className="song">
      <h1>Title: {props.song.title}</h1>
      <h2>Artist: {props.song.artist}</h2>
      <h3>Date it reached number 1: {props.song.date}</h3>
      <h3>Weeks at number 1: {props.song.weeks}</h3>
      <h3>Record label: {props.song.label}</h3>
    </div>
  )
}

export default Song
