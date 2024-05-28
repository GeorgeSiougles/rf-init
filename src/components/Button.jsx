import { CircleX, Dice6, Minus, Plus } from 'lucide-react';
import { FaDiceD20, FaHandFist } from 'react-icons/fa6';
import { GiSilverBullet } from 'react-icons/gi';

const Button = ({ icon, size = '1.5em', ...props }) => {
  let iconElement;
  switch (icon) {
    case 'd20':
      iconElement = <FaDiceD20 size={size} />;
      break;
    case 'plus':
      iconElement = <Plus size={size} />;
      break;
    case 'minus':
      iconElement = <Minus size={size} />;
      break;
    case 'remove':
      iconElement = <CircleX size={size} />;
      break;
    case 'ranged':
      iconElement = <GiSilverBullet size={size} />;
      break;
    case 'melee':
      iconElement = <FaHandFist size={size} />;
      break;
    case 'closeConditionModal':
      iconElement = 'X';
      break;
    case 'openConditionModal':
      iconElement = 'Add condition';
      break;

    default:
      iconElement = <Dice6 size={size} />;
      break;
  }
  return <button {...props}>{iconElement}</button>;
};
export default Button;
