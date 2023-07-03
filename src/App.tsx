import {
  BaseCard,
  ListItems,
  DropdownInput,
} from "./components";

import "./App.css";

function App() {
  const dropdownItem = [
    "UI&UX Design",
    "Web Development",
    "Mobile Development",
  ];

  const itemList = [
    "Telor Ayam 1 Butir",
    "Minyak Goreng 1/2 Cup",
    "Garam 1/2 Sendok Teh",
    "Merica 1/2 Sendok Teh",
    "Mentega 1/2 Sendok Teh",
  ];

  return (
    <div className="App">
      <div className="wrapper">
        <h4>Jawaban 1:</h4>

        <BaseCard classname="hover-card">
          <h3>Little Known Facts</h3>
          <p>
            All the lorem ipsum generators on the
            internet tand to repeat predefined
            chunks as necessary
          </p>
        </BaseCard>
      </div>

      <div className="wrapper">
        <h4>Jawaban 2:</h4>

        <div className="dropdown-section">
          <DropdownInput options={dropdownItem} />
        </div>
      </div>

      <div className="wrapper">
        <h4>Jawaban 3:</h4>

        <ListItems
          title="Resep Telor Ceplok"
          itemList={itemList}
        />
      </div>
    </div>
  );
}

export default App;
