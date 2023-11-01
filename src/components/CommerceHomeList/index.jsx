import { useState, useEffect } from "react";
import CommerceHomeCard from "./card";

export default function CommerceHomeList({ data }) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces(data);
  }, []);

  return (
    <>
      {places.length > 0 && 
        places.map((element) => {
          return <CommerceHomeCard place={element}/>
        })
      }
    </>
  );
}
