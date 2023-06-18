import immagine from "./img/imgGruppo.png";
import './App.css';
export default function Default(){
    return(
        <div className="App">
        <header className="App-header">
          <img src={immagine} className="App-logo" alt="logo" />
          <p>
            To do list
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    )
}