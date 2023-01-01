import "./App.css";
import Search from "./search";
import List from "./list";
import React from "react";

const stories = [
  {
    title: "React",
    url: "www.thisReact.com",
    author: "John Macisfloid",
    num_comments: 35,
    points: 4,
    ObjectID: 0,
  },
  {
    title: "Ducks",
    url: "www.lovelyDucks.com",
    author: "Terry Quackensfold",
    num_comments: 13,
    points: 1,
    ObjectID: 1,
  },
];

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div className="App">
      <h1>App Component</h1>

      <Search onSearch={handleSearch} />

      <List list={searchedStories} />
    </div>
  );
}

export default App;
