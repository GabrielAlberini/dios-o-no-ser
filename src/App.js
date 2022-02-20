import './App.css';
import { Banner } from './components/Banner/Banner'
import Countdown from 'react-countdown';

function App() {

  const Message = () => <h1>HOLA GENTE</h1>

  const PLAY_DATE = 1645382944936 + 1138000000;
 
  return (
    <div className="App">
      <Banner />
      <Countdown date={PLAY_DATE}>
        <Message />
      </Countdown>
    </div>
  );
}

export default App;
