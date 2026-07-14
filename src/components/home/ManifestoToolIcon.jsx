import adobeIllustratorIcon from '../../assets/brand-icons/adobe-illustrator.svg';
import blenderIcon from '../../assets/brand-icons/blender.svg';
import cSharpIcon from '../../assets/brand-icons/c-sharp.svg';
import cssIcon from '../../assets/brand-icons/css.svg';
import figmaIcon from '../../assets/brand-icons/figma.svg';
import htmlIcon from '../../assets/brand-icons/html5.svg';
import javascriptIcon from '../../assets/brand-icons/javascript.svg';
import reactIcon from '../../assets/brand-icons/react.svg';
import unityIcon from '../../assets/brand-icons/unity.svg';
import visualStudioCodeIcon from '../../assets/brand-icons/visual-studio-code.svg';

const iconByType = {
  blender: blenderIcon,
  'c-sharp': cSharpIcon,
  css: cssIcon,
  figma: figmaIcon,
  html: htmlIcon,
  illustrator: adobeIllustratorIcon,
  javascript: javascriptIcon,
  react: reactIcon,
  unity: unityIcon,
  'visual-studio-code': visualStudioCodeIcon,
};

export default function ManifestoToolIcon({ type }) {
  const icon = iconByType[type];

  return icon ? (
    <img
      aria-hidden="true"
      className="manifesto-context__tool-image"
      draggable="false"
      src={icon}
      alt=""
    />
  ) : null;
}
