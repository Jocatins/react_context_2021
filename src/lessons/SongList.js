import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSongForm from "./NewSongForm";

function SongList() {
  const [songs, setSongs] = useState([
    { title: "arrow of god", id: 1 },
    { title: "arrow of god", id: 2 },
    { title: "order of god", id: 3 },
  ]);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };
  return (
    <div>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
}

export default SongList;
