import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function GetId() {
  const { id } = useParams();
  console.log('THE ID: ', id);
  return id;
}

function Player() {
  console.log('COSA: ', GetId());
  const [videoId, setVideoId] = useState(GetId());
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    async function fetchVideoData() {
      try {
        const res = await fetch(`http://localhost:4000/video/${videoId}/data`);
        const data = await res.json();
        setVideoData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchVideoData();
  }, [videoId]);

  return (
    <div className='App'>
      <header className='App-header'>
        <video controls muted autoPlay>
          <source
            src={`http://localhost:4000/video/${videoId}`}
            type='video/mp4'
          ></source>
        </video>
        <h1>{videoData.name}</h1>
      </header>
    </div>
  );
}

export default Player;
