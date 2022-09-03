import { Card, Wrapper } from "./Components";
import "./App.css";

const cards = [
  {
    id: 1,
    imgSrc: "",
    name: "Zigniew",
    surname: "Herbert",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 789",
  },
  {
    id: 2,
    imgSrc: "",
    name: "Henryk",
    surname: "Sienkiewicz",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 789",
  },
  {
    id: 3,
    imgSrc: "",
    name: "Wisława",
    surname: "Szymborska",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 789",
  },
];

function App() {
  return (

    <div className="App">
          <Wrapper>
      {cards.map(
        (
          {
            id,
            imgSrc,
            name,
            surname,
            street,
            postCode,
            town,
            subRegion,
            phoneNumber,
          },
          index
        ) => (
          <Card
            key={id + index}
            imageSrc={imgSrc}
            surname={surname}
            name={name}
            street={street}
            postCode={postCode}
            town={town}
            subRegion={subRegion}
            phoneNumber={phoneNumber}
          />
        )
      )}
      </Wrapper>
    </div>
  );
}

export default App;
