import HomePage from '../components/home/HomePage.jsx';
import { homeContent } from '../data/homeContent.js';

export default function Home() {
  return <HomePage content={homeContent} />;
}
