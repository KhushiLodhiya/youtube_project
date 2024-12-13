
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [maxResults, setMaxResults] = useState(12); // Default number of videos
  
   const API_KEY = 'AIzaSyBtR6yVHjM6t5fySvwcs5urlTNZ0n_Z6-w';

  useEffect(() => {
    if (!searchQuery) return; // Only fetch if searchQuery is set

    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${maxResults}&q=${searchQuery}&key=${API_KEY}`;

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const fetchedVideos = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));
        setVideos(fetchedVideos);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [searchQuery, maxResults]);

  const handleSearch = (e) => {
    e.preventDefault();
    const input = document.getElementById('search-input').value.trim();
    if (input) {
      setSearchQuery(input);
    }
  };

  // For handling video playback
  const openVideo = (videoId) => {
    setSelectedVideoId(videoId);
  };

  const closeVideo = () => {
    setSelectedVideoId(null);
  };

  // Function to handle category button click
  const handleCategoryClick = (category) => {
    setSearchQuery(category); // Set the search query based on the category
  };

  return (
    <div className="sidebar">
      {/* Sidebar */}
      <div className="left">
        <div className="logo">
          <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="" className="hi" />
          <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" className="he" />
        </div>

        <div className="right-btn">
          <p onClick={() => handleCategoryClick('Home')}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt="" /> Home</p>
          <p onClick={() => handleCategoryClick('Explore')}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" alt="" /> Explore</p>
          <p onClick={() => handleCategoryClick('Shorts')}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" alt="" /> Shorts</p>
          <p onClick={() => handleCategoryClick('Subscriptions')}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" alt="" /> Subscriptions</p>
        </div>

        <hr className="line" />

        <div className="icons">
          <p onClick={() => handleCategoryClick('Library')}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" alt="" /> Library</p>
          <p onClick={() => handleCategoryClick('History')}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" alt="" /> History</p>
          <p onClick={() => handleCategoryClick('Your Videos')}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" alt="" /> Your Videos</p>
          <p onClick={() => handleCategoryClick('Watch Later')}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" alt="" /> Watch Later</p>
          <p onClick={() => handleCategoryClick('Liked Videos')}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" alt="" /> Liked Videos</p>
          <p onClick={() => handleCategoryClick('Show More')}><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" alt="" /> Show More</p>
        </div>
    
       <hr className="line" />

        <div className="subs">         
           <h4>SUBSCRIPTIONS</h4>
           <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true" alt="" /> Nadir On The Go</p>
         <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" alt="" /> Coke Studio Mumbai</p>
          <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" alt="" /> MKHBD</p>
          <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" alt="" /> Figma</p>
          <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" alt="" /> Alux.com</p>
          <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true" alt="" /> ATC Android ToTo C...</p>
        </div>
          </div>

     {/* //main containt */}
      <div className="right">
        <div className="section1">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              id="search-input"
              placeholder="Search"
              className="search-box"
            />
            <button type="submit" className="submit">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                alt="Search"
              />
            </button>
          </form>
             {/* top right */}

        <div className="last">
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" />
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" />
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" />
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true" alt="" />
          </div>
        </div>
     

        <div className="pagination-buttons">
          <button onClick={() => setMaxResults(5)}>5 Videos</button>
          <button onClick={() => setMaxResults(10)}>10 Videos</button>
          <button onClick={() => setMaxResults(15)}>15 Videos</button>
          <button onClick={() => setMaxResults(20)}>20 Videos</button>
          <button onClick={() => setMaxResults(25)}>25 Videos</button>
          <button onClick={() => setMaxResults(35)}>35 Videos</button>
          <button onClick={() => setMaxResults(50)}>50 Videos</button>
        </div>
        <hr />

        <div className="section2">
          {/* Add category buttons */}
          <button onClick={() => handleCategoryClick('')}>All</button>
          <button onClick={() => handleCategoryClick('songs')}>Songs</button>
          <button onClick={() => handleCategoryClick('movies')}>Movies</button>
          <button onClick={() => handleCategoryClick('dance')}>Dance</button>
          <button onClick={() => handleCategoryClick('tech')}>Tech</button>
          <button onClick={() => handleCategoryClick('food')}>Food</button>
          <button onClick={() => handleCategoryClick('cooking')}>Cooking</button>
          <button onClick={() => handleCategoryClick('study')}>Study</button>
        </div>

        <hr />

        <div className="section3">
          {videos.map((video) => (
            <div key={video.id} className="box2" onClick={() => openVideo(video.id)}>
              <img src={video.thumbnail} alt={video.title} />
              <div className="con1">
                <div className="con2">
                  <h5>{video.title}</h5>
                  <p>{video.channelTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideoId && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
            <button className="close-button" onClick={closeVideo}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
