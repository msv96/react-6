import "./App.css";
import Card from "./Card";
import Content from "./Content";

function App() {
  const data = [
    {
      id: 1,
      name: "Srini",
      age: 53,
      place: "Erode",
    },
    {
      id: 2,
      name: "Srini",
      age: 53,
      place: "Erode",
    },
    {
      id: 3,
      name: "Srini",
      age: 53,
      place: "Erode",
    },
    {
      id: 4,
      name: "Srini",
      age: 53,
      place: "Erode",
    },
    {
      id: 5,
      name: "Srini",
      age: 53,
      place: "Erode",
    },
    {
      id: 6,
      name: "Srini",
      age: 53,
      place: "Erode",
    },
    {
      id: 7,
      name: "Srini",
      age: 53,
      place: "Erode",
    },
    {
      id: 8,
      name: "Srini",
      age: 53,
      place: "Erode",
    },
    {
      id: 9,
      name: "Srini",
      age: 53,
      place: "Erode",
    },
  ];
  return (
    <div className="App">
      {data.map((el) => {
        return (
          <div>
            <Content id={el.id} />
            <Card key={el.id} Name={el.name} Age={el.age} Place={el.place} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
