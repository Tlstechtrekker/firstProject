import Headerwrapper from './components/Headerwrapper/headerwrapper';
import Navbar from './components/Navbar/navbar';
/* import Logo from './components/Logo/logo' */
import Socialmedia from './components/Socialmedia/Socialmedia';

/* import Footernav from './components/Footernav/Footernav'; */

function App() {
  return (
    <div className="main">
      <div className="wrapper">

        <header>
          <Headerwrapper>
            {/* <Logo /> */}
            <Navbar />
            <Socialmedia />
          </Headerwrapper>
        </header>

        <div className="maincontent"></div>

        <footer>
          //3 cols - contact-menu-form
          <div className="contact"></div>
          <div className="menuwrapper"></div>
          <div className="form"></div>
        </footer>

      </div>
    </div>
  );
}

export default App;
