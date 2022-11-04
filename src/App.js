import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <header className="grid main-header">
       <div className="flex-container header-container">
    <span className="logo logo-nav header-item">
      Lategram
    </span>
    
    <div className="header-item searchbar ">
      <label for="searchbar ">
        <div className="flex-container">
          <div className="search-icon-container">
            <svg className="search-nav-icon"viewBox="0 0 512 512" width="100" title="search">
        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
      </svg></div>

              <input id="searchbar" type="text" className="searchbar-input" placeholder="Search..."/>
          </div>
        </label>
    </div>
  <nav className="header-item main-nav">
    <ul className="navbar flex-container">
      <li className="navbar-item">
       <i className="bi bi-house-door-fill"></i>
      </li>
      <li className="navbar-item">
        <i className="bi bi-send"></i>
      </li>
      <li className="navbar-item">
        <i className="bi bi-plus-square"></i>
      </li>
      <li className="navbar-item">
        <i className="bi bi-compass"></i>
      </li>
      <li className="navbar-item">
        <i className="bi bi-heart"></i>
      </li>
      <li className="navbar-item no-hover">
        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
      </li>
    </ul> 
  </nav>
  </div>
</header>

<section className="main-content grid">
  <div className="main-gallery-wrapper flex-container">
    <div className="pop-wrapper flex-container">
      <span className="pop flex-container">
        <div className="pop-img-container">
        <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" className="pop-img"/>
          </div>
        <p className="pop-text">Lorem.</p>
      </span>
      
      <span className="pop flex-container">
        <div className="pop-img-container">
        <img src="https://images.unsplash.com/photo-1657214059189-6bace4ad1ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" className="pop-img"/>
          </div>
        <p className="pop-text">Lorem.</p>
      </span>
      <span className="pop flex-container">
        <div className="pop-img-container">
        <img src="https://images.unsplash.com/photo-1548366565-6bbab241282d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="pop-img"/>
          </div>
        <p className="pop-text">Lorem.</p>
      </span>
      <span className="pop flex-container">
        <div className="pop-img-container">
        <img src="https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="pop-img"/>
          </div>
        <p className="pop-text">Lorem.</p>
      </span>
      <span className="pop flex-container">
        <div className="pop-img-container">
        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="pop-img"/>
          </div>
        <p className="pop-text">Lorem.</p>
      </span>  
      <span className="pop flex-container">
        <div className="pop-img-container">
        <img src="https://images.unsplash.com/photo-1657003963857-ec800f2cce43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=702&q=80" alt="" className="pop-img"/>
          </div>
        <p className="pop-text">Lorem.</p>
      </span> 
      
    </div>
    
    <div className="card-wrapper flex-container">
      <div className="card-header grid">
        <div className="header-img-container flex-container">
          <img className="card-header-img" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
        </div>
        <span className="card-title">
          Lorem, ipsum.
        </span>
          
         <span className="card-subtitle">Lorem, ipsum.</span>
        <div className="card-opt-btn flex-container"><i className="bi bi-three-dots"></i></div>
      </div>
      <div className="card-img-container">
        <img className="card-img" src="https://images.unsplash.com/photo-1587502624372-45627391a31f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt=""/>
      </div>
      <div className="card-data flex-container">
        <div className="card-icons flex-container"> 
        <span className="card-icon card-icon-left"><i className="bi bi-heart"></i></span>
        <span className="card-icon card-icon-left"><i className="bi bi-chat"></i></span>
        <span className="card-icon card-icon-left"><i className="bi bi-send"></i></span>
        <span className="card-icon card-icon-right"><i className="bi bi-bookmark"></i></span>
        </div>
        <span className="bold card-text">701 Likes</span>
        <span className="card-text"><span className="bold title-margin">Lorem, ipsum.</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, nesciunt. Lorem, ipsum dolor.</span>
        <span className="card-text comments-btn">See more comments</span>
        <span className="card-time"></span>
        <div className="add-comment-container flex-container">
          <span className="card-icon"><i className="bi bi-emoji-smile"></i></span>
          <div className="comment-container">
            <input className="comment-input" type="text" placeholder="Add a comment...."/>
          </div>
          
          <a href="#" className="publish" >Publish</a>
        </div>
        
      </div>
  
    </div>
    
    <div className="card-wrapper flex-container">
      <div className="card-header grid">
        <div className="header-img-container flex-container">
        <img className="card-header-img" src="https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""/>
          </div>
        <span className="card-title">
          Lorem, ipsum.
        </span>
          
         <span className="card-subtitle">Lorem, ipsum.</span>
        <div className="card-opt-btn flex-container"><i className="bi bi-three-dots"></i></div>
      </div>
      <div className="card-img-container">
        <img className="card-img" src="https://images.unsplash.com/photo-1657214058650-31cc8400713b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" alt=""/>
      </div>
      <div className="card-data flex-container">
        <div className="card-icons flex-container"> 
        <span className="card-icon card-icon-left"><i className="bi bi-heart"></i></span>
        <span className="card-icon card-icon-left"><i className="bi bi-chat"></i></span>
        <span className="card-icon card-icon-left"><i className="bi bi-send"></i></span>
        <span className="card-icon card-icon-right"><i className="bi bi-bookmark"></i></span>
        </div>
        <span className="bold card-text">701 Likes</span>
        <span className="card-text"><span className="bold title-margin">Lorem, ipsum.</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, nesciunt. Lorem, ipsum dolor.</span>
        <span className="card-text comments-btn">See more comments</span>
        <span className="card-time"></span>
        <div className="add-comment-container flex-container">
          <span className="card-icon"><i className="bi bi-emoji-smile"></i></span>
          <div className="comment-container">
            <input className="comment-input" type="text" placeholder="Add a comment...."/>
          </div>
          
          <a href="#" className="publish" >Publish</a>
        </div>
        
      </div>
  
    </div>

  </div>
<div className="sidebar">
  <div className="sidebar-menu-container">
    <div className="sidebar-card sidebar-header grid">
      <img  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="sidebar-img sidebar-hd-img"/>
      <span className="sidebar-title card-title">
        Lorem, ipsum.
      </span>
      <span className="card-subtitle sidebar-subtitle">Lorem.</span>
      <span className="sidebar-btn">
        Change
      </span>
    </div>
    <div className="suggestions-header grid">
      <span className="suggestions-text">
        Suggestions for you
      </span>
      <span className="sidebar-btn-alt">
        See all
      </span>
    </div>
     <div className="sidebar-card sidebar-card-alt grid">
      <img  src="https://images.unsplash.com/photo-1657000529335-5c1bf76204af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="sidebar-img side-bar-img-alt"/>
      <span className="sidebar-title card-title">
        Lorem, ipsum.
      </span>
      <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">Lorem.</span>
      <span className="sidebar-btn">
        Follow
      </span>
    </div>
    <div className="sidebar-card sidebar-card-alt grid">
      <img  src="https://images.unsplash.com/photo-1656143269388-e65183fac19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="sidebar-img side-bar-img-alt"/>
      <span className="sidebar-title card-title">
        Lorem, ipsum.
      </span>
      <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">Lorem.</span>
      <span className="sidebar-btn">
        Follow
      </span>
    </div>
    <div className="sidebar-card sidebar-card-alt grid">
      <img  src="https://images.unsplash.com/photo-1656863949585-2bd7f7d0f3d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="sidebar-img side-bar-img-alt"/>
      <span className="sidebar-title card-title">
        Lorem, ipsum.
      </span>
      <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">Lorem.</span>
      <span className="sidebar-btn">
        Follow
      </span>
    </div>
    <div className="sidebar-card sidebar-card-alt grid">
      <img  src="https://images.unsplash.com/photo-1656858772675-49e73a27d22b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="sidebar-img side-bar-img-alt"/>
      <span className="sidebar-title card-title">
        Lorem, ipsum.
      </span>
      <span className="card-subtitle sidebar-subtitle sidebar-subtitle-alt">Lorem.</span>
      <span className="sidebar-btn">
        Follow
      </span>
    </div>
    
    
  
  </div>
</div>  
</section>
    
    
    
    
    </>
  );
}

export default App;
