
import Card from "../components/Card";
import "../assets/css/sec-cards.css"
export default function Sec2() {

  
  return (
    <div className="cards-container">
      <Card
        source="https://lastfm.freetls.fastly.net/i/u/ar0/0acb14f033c7c52208dbb9931c051e4a"
        name="Wiz Khalifa"
        details="Author of lorem ipsum"
      />

      <Card
        source="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Travis_Scott_-_Openair_Frauenfeld_2019_08.jpg/1200px-Travis_Scott_-_Openair_Frauenfeld_2019_08.jpg"
        name="Travis Scott"
        details="Author of lorem ipsum"
      />

      <Card
        source="https://d9nvuahg4xykp.cloudfront.net/4433587067949540298/-8766661770285404002.jpg"
        name="Snoop Dogg"
        details="Author of lorem ipsum"
      />
    </div>
  );
}
