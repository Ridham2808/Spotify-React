import logo from '../assets/logo.png';
import home from '../assets/Home.png';
import search from '../assets/Search.png';
import your from '../assets/Your.png';
import create from '../assets/Create.png';
import group from '../assets/Group.png';
import yourspo from '../assets/yourspo.png';
import grommet from '../assets/grommet.png';

import './SideBar.css';

function Sidebar(){
    return(
        <>
        <div id="menubar">
        <i>
          <img
            src={logo}
            alt="Spotify Logo"
          />
        </i>

        <div className="menu-1">
          <span>
            <img src={home} alt="Home Icon" />
            <p>Home</p>
          </span>
          <span>
            <img src={search} alt="Search Icon" />
            <p>Search</p>
          </span>
          <span>
            <img
              src={your}
              alt="Your Library Icon"
            />
            <p>Your Library</p>
          </span>
        </div>

        <div className="menu-2">
          <span>
            <img
              src={create}
              alt="Create Icon"
            />
            <p>Liked Song</p>
          </span>
          <span>
            <img
              src={group}
              alt="Liked Icon"
            />
            <p>Liked Song</p>
          </span>
          <span>
            <img
              src={yourspo}
              alt="Your Episodes Icon"
            />
            <p>Your Episodes</p>
          </span>
        </div>

        <div className="menu-3">
          <span>FAV</span>
          <span>Daily Mix 1</span>
          <span>Discover Weekly</span>
          <span>Malayalam</span>
          <span>Dance/Electronix Mix</span>
          <span>EDM/Popular</span>
          <span>
            <img
              src={grommet}
              className="install"
              alt="Install Icon"
            />
            <p>Install App</p>
          </span>
        </div>
      </div>
        </>
    );
}

export default Sidebar;