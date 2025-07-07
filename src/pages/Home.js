import { Link } from 'react-router-dom';
import '../styles/App.css';
import Template from '../layouts/Template';

export default function Home() {
  return (
    <Template title="Home Page">
      <div className='options-wrapper'>
        <Link to={'/create-timer'} className="options-button"><p>Create Timer</p></Link>
        <Link to={'/my-timers'} className="options-button"><p>My Timers</p></Link>
        <Link to={'/browse-timers'} className="options-button"><p>Browse Timers</p></Link>
        <Link to={'/stats'} className="options-button"><p>Stats</p></Link>
      </div>
    </Template>
  );
}