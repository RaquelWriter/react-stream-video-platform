import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import girl from './images/Auora_lilla.png';
import logo from './images/logo4.png';

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch('http://localhost:4000/videos');
        const data = await response.json();
        setVideos([...data]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <>
      <div className='header-container'>
        <div className='title'>Tales Castle</div>
        <div>
          <img style={{ width: '200px' }} src={logo} alt='Tales Castle Logo' />
        </div>
      </div>

      <div className='App App-header'>
        <div className='container'>
          <div className='row'>
            {videos.map((video) => (
              <div className='col-md-4' key={video.id}>
                <Link to={`/player/${video.id}`}>
                  <div className='card'>
                    <img
                      className='thumb'
                      src={`http://localhost:4000${video.poster}`}
                      alt={video.name}
                    />
                    <div className='card-body'>
                      <p>{video.name}</p>
                      <p>{video.duration}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
