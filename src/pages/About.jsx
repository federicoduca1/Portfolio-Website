import AboutHero from '../components/about/AboutHero.jsx';
import DesignJourney from '../components/about/DesignJourney.jsx';
import EducationLearning from '../components/about/EducationLearning.jsx';
import PersonalExplorer from '../components/about/PersonalExplorer.jsx';
import {
  aboutHeroContent,
  designJourneyContent,
  educationLearningContent,
  personalExplorerContent,
} from '../data/aboutContent.js';

export default function About() {
  return (
    <>
      <AboutHero content={aboutHeroContent} />
      <DesignJourney content={designJourneyContent} />
      <EducationLearning content={educationLearningContent} />
      <PersonalExplorer content={personalExplorerContent} />
    </>
  );
}
