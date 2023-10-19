import { useState, useEffect } from "react";
import CommerceHomeCard from "./card";
import { getPlacesOwn } from "../../services/login";

export default function CommerceHomeList() {
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    let placefetch = await getPlacesOwn();
    setPlaces(places.concat(placefetch));
    console.log(placefetch)
  }

  // map (value, index, self)

  useEffect(() => {
    fetchPlaces();
    console.log("entrando no useeffect do commercelist")
  }, []);

  return (
    <div>
      {places.length > 0 && 
        places.map((element) => {
          return <CommerceHomeCard place={element}/>
        })
      }
    </div>
  );
}
