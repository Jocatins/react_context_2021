import React, { useState } from "react";

function NewSongForm({ addSong }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    addSong(title);
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Song title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          required
          value={title}
        />
        <input type="submit" value="add song" />
      </form>
    </div>
  );
}

export default NewSongForm;
