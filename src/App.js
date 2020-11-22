import React from 'react'
import { Chrono} from 'react-chrono'

const Home = () => {
  const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }];

  return (
    <div style={{ width: "500px", height: "400px" }}>
      <Chrono items={items} />
    </div>
  )
}

export default Home
