// import Footer from "../components/footer";
// import Card from "../components/card";
// import '../css/destination.css'


// export default function Destination() {
//       return (
//             <>
//                   
                  
//                   <div className="destination-container">
//                         <Card img={"india.jpg"} country={"India"} description={"A land of timeless traditions, vibrant festivals, and diverse landscapes from the Himalayas to serene beaches"} state1={"Maharashtra"} state2={"New Delhi"} state3={"Hydrabad"} price={"1,40,000"} />
//                         <Card img={"itlay.jpg"} country={"Italy"} description={"The cradle of art, fashion, and cuisine — from Roman ruins to Venetian canals and Tuscan vineyards"} state1={"Tuscany"} state2={"Veneto"} state3={"Lazio"} price={"1,20,000"} />
//                         <Card img={"canada.jpg"} country={"Canada"} description={"Vast wilderness and modern cities, with majestic mountains, pristine lakes, and a welcoming culture"} state1={"Ontario"} state2={"Quebec"} state3={"Alberta"} price={"1,30,000"} />
//                         <Card img={"figi.jpg"} country={"Fiji Island"} description={"An island paradise of crystal-clear waters, white sandy beaches, and warm tropical hospitality."} state1={"Viti Levu"} state2={"Suva"} state3={"Mamanuca Islands"} price={"1,60,000"} />
//                         <Card img={"usa.jpg"} country={"USA"} description={"A melting pot of cultures, iconic landmarks, and natural wonders stretching from coast to coast."} state1={"California"} state2={"Texas"} state3={"Florida"} price={"2,00,000"} />
//                         <Card img={"uk.jpg"} country={"United Kingdom"} description={"Historic castles, royal heritage, and vibrant cities blending tradition with modernity."} state1={"Wales"} state2={"England"} state3={"Scotland"} price={"1,30,000"} />
//                         <Card img={"france.jpg"} country={"France"} description={"Romantic boulevards, world-class art, fine wine, and breathtaking countryside landscapes"} state1={"Paris"} state2={"Nouvelle-Aquitaine"} state3={"Auvergne-Rhône-Alpes"} price={"3,20,000"} />
//                         <Card img={"japan.jpg"} country={"Japan"} description={"Where ancient temples meet neon cities, blending centuries-old tradition with futuristic innovation."} state1={"Tokyo"} state2={"Osaka"} state3={"Kyoto"} price={"1,50,000"} />
//                         <Card img={"austrilla.jpg"} country={"Austrilla"} description={"From the Outback to the Great Barrier Reef, discover diverse landscapes and unique wildlife."} state1={"New South Wales"} state2={"Queensland"} state3={"Victoria"} price={"2,40,000"} />
//                         <Card img={"china.jpg"} country={"China"} description={"Ancient traditions meet futuristic skylines, with the Great Wall and vibrant cities to explore."} state1={"Beijing"} state2={"Shanghai"} state3={"Guangdong"} price={"1,80,000"} />
//                         <Card img={"brazil.jpg"} country={"Brazil"} description={"Home of the Amazon rainforest, carnival vibes, and endless golden beaches."} state1={"Rio de Janeiro"} state2={"São Paulo"} state3={"Bahia"} price={"1,60,000"} />
//                         <Card img={"spain.jpg"} country={"Spain"} description={"Passionate flamenco, world-class cuisine, and sun-kissed Mediterranean coastlines."} state1={"Andalusia"} state2={"Catalonia"} state3={"Madrid"} price={"2,10,000"} />
//                         <Card img={"germany.jpg"} country={"Germany"} description={"Fairy-tale castles, bustling cities, and beer gardens steeped in tradition."} state1={"Bavaria"} state2={"Berlin"} state3={"Hamburg"} price={"2,00,000"} />
//                         <Card img={"switzerland.jpg"} country={"Switzerland"} description={"Snow-capped Alps, sparkling lakes, and world-famous chocolates await."} state1={"Zurich"} state2={"Bern"} state3={"Geneva"} price={"2,90,000"} />
//                         <Card img={"south-korea.jpg"} country={"South Korea"} description={"A perfect blend of K-pop culture, futuristic cities, and ancient palaces."} state1={"Seoul"} state2={"Busan"} state3={"Incheon"} price={"1,50,000"} />
//                         <Card img={"thailand.jpg"} country={"Thailand"} description={"Tropical islands, golden temples, and vibrant street markets."} state1={"Bangkok"} state2={"Chiang Mai"} state3={"Phuket"} price={"90,000"} />
//                         <Card img={"greece.jpg"} country={"Greece"} description={"Whitewashed villages, island sunsets, and ancient myths come alive."} state1={"Athens"} state2={"Santorini"} state3={"Crete"} price={"2,10,000"} />
//                         <Card img={"netherlands.jpg"} country={"Netherlands"} description={"Picturesque canals, tulip fields, and timeless windmills."} state1={"Amsterdam"} state2={"Rotterdam"} state3={"Utrecht"} price={"1,90,000"} />
//                         <Card img={"russia.jpg"} country={"Russia"} description={"Endless landscapes, imperial cities, and onion-domed cathedrals."} state1={"Moscow"} state2={"St. Petersburg"} state3={"Kazan"} price={"2,00,000"} />
//                         <Card img={"south-africa.jpg"} country={"South Africa"} description={"Thrilling safaris, diverse cultures, and dramatic coastlines."} state1={"Cape Town"} state2={"Johannesburg"} state3={"Durban"} price={"1,70,000"} />
//                         <Card img={"turkey.jpg"} country={"Turkey"} description={"East meets West with mosques, bazaars, and Cappadocia skies."} state1={"Istanbul"} state2={"Cappadocia"} state3={"Ankara"} price={"1,60,000"} />
//                         <Card img={"newzeland.jpg"} country={"New Zealand"} description={"Dramatic mountains, Maori culture, and adventure sports galore."} state1={"Auckland"} state2={"Wellington"} state3={"Queenstown"} price={"1,70,000"} />
//                         <Card img={"mexico.jpg"} country={"Mexico"} description={"Colorful culture, Mayan ruins, and sunny beaches."} state1={"Mexico City"} state2={"Yucatan"} state3={"Jalisco"} price={"1,40,000"} />
//                         <Card img={"argentina.jpg"} country={"Argentina"} description={"Tango rhythms, Patagonia landscapes, and fine wines."} state1={"Buenos Aires"} state2={"Córdoba"} state3={"Mendoza"} price={"1,80,000"} />
//                         <Card img={"singapour.jpg"} country={"Singapore"} description={"A futuristic garden city with world-class attractions and cuisines."} state1={"Marina Bay"} state2={"Sentosa"} state3={"Chinatown"} price={"1,10,000"} />
//                         <Card img={"egypt.jpg"} country={"Egypt"} description={"Land of pharaohs, pyramids, and the timeless Nile River."} state1={"Cairo"} state2={"Luxor"} state3={"Alexandria"} price={"1,30,000"} />
//                         <Card img={"maldives.jpg"} country={"Maldives"} description={"Turquoise lagoons, coral reefs, and luxurious overwater villas."} state1={"Male"} state2={"Addu City"} state3={"Laamu"} price={"1,80,000"} />
//                   </div>


//                   
                  
//             </>
//       );
// }

// import { useEffect, useState } from "react";
// import Header from "../components/header";
// import "../css/destination.css";
// import { getDestinations } from "../api";
// import Footer from "../components/footer";

// export default function Destination() {

// const [loading, setLoading] = useState(true);
// const [error, setError] = useState("");

// useEffect(() => {
//   getDestinations()
//     .then((data) => {
//       setDestinations(data);
//       setLoading(false);
//     })
//     .catch(() => {
//       setError("Failed to load destinations");
//       setLoading(false);
//     });
// }, []);

//   const [destinations, setDestinations] = useState([]);

//   useEffect(() => {
//     getDestinations()
//       .then((data) => setDestinations(data))
//       .catch((err) => console.error(err));
//   }, []);

// if (loading) return <h2>Loading...</h2>;
// if (error) return <h2>{error}</h2>;


//   return (
//     <>
//       <Header />
//       <div className="destination-container">
//         <h1>Popular Destinations</h1>

//         <div className="destination-container">
//           {destinations.map((item) => (
//             <div className="destination-card" key={item._id}>
//               <img src={item.image} alt={item.name} />
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//               <span>₹{item.price}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />

    
//     </>
    
//   );
// }


import { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import Header from "../components/header";
import Footer from "../components/footer";


export default function Destination() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
      .then(res => res.json())
      .then(data => setDestinations(data));
  }, []);

  return (
    <>
      <Header />
      
        <br /><br /><br />
        <strong><center><h2>Top Destinations</h2></center></strong>
        <br /><br /><br />
        <div className="destination-grid">

          {destinations.map((d) => (
            <DestinationCard key={d._id} destination={d} />
          ))}
        </div>
      

      <Footer />
    </>
  );
}




