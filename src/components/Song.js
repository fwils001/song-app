import React from 'react'
import songs from './src.data.json'

const Song = (props) => {
  return (
    <div className="song">
      <h1>Title: {props.song.title}</h1>
      <h2>Artist: {props.song.artist}</h2>
      <h3>Date it reached number 1: {props.song.date}</h3>
      <h4>Weeks at number 1: {props.song.date}</h4>
      <p>Record label: {props.song.label}</p>
      {songs.map((song) => (
        <Song song={song} />
      ))}
    </div>
  )
}

export default Song
