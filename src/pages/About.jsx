import AboutHero from '../components/about/AboutHero.jsx';
import DesignJourney from '../components/about/DesignJourney.jsx';
import EducationLearning from '../components/about/EducationLearning.jsx';
import {
  aboutHeroContent,
  designJourneyContent,
  educationLearningContent,
} from '../data/aboutContent.js';

export default function About() {
  return (
    <>
      <AboutHero content={aboutHeroContent} />
      <DesignJourney content={designJourneyContent} />
      <EducationLearning content={educationLearningContent} />
    </>
  );
}
