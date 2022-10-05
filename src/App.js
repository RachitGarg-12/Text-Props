import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './Components/NavbarComp'
import TextForm from './Components/TextForm';

function App() {
  return (
    <div className="blank">
      <NavScroll Appname="Text-Props" About="About Us" />
      <div className="container my-3">
        <TextForm text_box_title="Enter the text to analyze" />
      </div>
    </div>
  );
}


export default App;
