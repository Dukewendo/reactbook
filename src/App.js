import "./App.css";
import Search from "./search";
import List from "./list";

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
  return (
    <div className="App">
      <h1>App Component</h1>

      <Search />

      <List list={stories} />
    </div>
  );
}

export default App;
