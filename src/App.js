import './App.css';
import { Avatar } from './components/avatar';
import { LinksArray } from './utils/linksArray';
import slack from "./components/assets/slack.png"
import github from "./components/assets/github.png"
import { Icon } from './components/icon';
import zuri_logo from "./components/assets/Vector.png"
import G from "./components/assets/ingressive.png"


function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="inner_container">
            <div className="header_main">
              <Avatar />
              <div className="links_ar_container">
                {LinksArray.map(link => {
                  return (
                    <a key={link.id} href={link.href} id={link.id} title={link?.title}>{link.name}</a>
                  )
                })}
              </div>
              <div style={{ padding:"50px 0 100px 0",  display:"flex", justifyContent: "center", gap: "24px"}}>
                <Icon image={slack} />
                <Icon image={github} />
              </div>
            </div>
            <footer>
              <div className='footer_line'></div>
              <div className="footer">
                  <div className="footer_logo_1_container">
                    <img src={zuri_logo} alt="footer_logo_1" className="footer_logo_1"  />
                  </div>
                  <p className="footer_para">HNG Internship 9 Frontend Task</p>
                  <img src={G} alt="footer__logo_2" className="footer__logo_2" />
              </div>
            </footer>
          </div>
      </div>
    </div>
  );
}

export default App;
