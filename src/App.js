import React from 'react';
import Post from "./components/post/post";
import data from './assets/mock-data.json'

function App() {
  console.log(data)

  return (
      <div className="App">
          {data.map((value, i) =>
            <Post key={i} title={value.title} text={value.text} currentLikes={value.currentLikes} />
          )}
      </div>
  );
}

export default App;
