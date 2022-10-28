import './App.css';
import { Avatar } from './components/avatar';
import { LinksArray } from './utils/linksArray';

function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="inner_container">
            <Avatar />
            <div className="links_ar_container">
              {LinksArray.map(link => {
                return (
                  <a key={link.id} href={link.href}>{link.name}</a>
                )
              })}
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
