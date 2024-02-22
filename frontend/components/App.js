import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`




function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
      function fetchPhoto() {
        axios.get(URL) 
          .then(res => {
            console.log(res.data)
            setApod(res.data)
          })
          .catch(err => {
            console.log(err.message)
          })
      }
      // fetchPhoto()

      setApod({
          "date": "2024-02-22",
          "explanation": "Big, bright, beautiful spiral, Messier 106 dominates this cosmic vista. The nearly two degree wide telescopic field of view looks toward the well-trained constellation Canes Venatici, near the handle of the Big Dipper. Also known as NGC 4258, M106 is about 80,000 light-years across and 23.5 million light-years away, the largest member of the Canes II galaxy group. For a far far away galaxy, the distance to M106 is well-known in part because it can be directly measured by tracking this galaxy's r...",
          "hdurl": "https://apod.nasa.gov/apod/image/2402/M106field_KyunghoonLim2048.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "A View Toward M106",
          "url": "https://apod.nasa.gov/apod/image/2402/M106field_KyunghoonLim1024.jpg"
        })
    }, [])

    if (!apod) return 'Fetching Photo of teh Day...'
  return (
   <section>
    <Card 
    title={apod.title}
    date={apod.date} 
    text={apod.explanation}
    imageURL={apod.url}

    />
   </section>
  )
}

export default App
