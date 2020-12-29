import { defaultValue } from '../../utils';

const white = '#fff';
const bgWhite ='#fff';

const black = defaultValue({
  default: '#1E1E1F',
  darker: '#070E25',
  darker1: '#000000',
});



const gray = defaultValue({
  lighter1: '#838692',
  lighter: '#ABAEB4',
  default: '#BBBEC2',
  darker: '#C1C2C8',
  darker1: '#C4C4C4',
  darker2: '#E0E0E0',
  darker3: '#E0E3EE',
  darker4: '#F6F6F6',
  darker5: '#F8F8F8',
});

const orange = defaultValue({
  lighter2: '#FCB015',
  lighter1: '#FED151',
  lighter: '#FFA800',
  default: '#FFBF11',
  darker: '#FFC20F',
  darker1: '#FFC210',
  darker2: '#FFC721',

  gradient1: '#FFD047',
  gradient2: '#FFC20F',
});

const red = defaultValue({
  default: '#F16040',
});

const green = defaultValue({
  default: '#5FCB54',
});

const blue = defaultValue({
  default: '#4DBBF9',
});

export default {
  black,
  blue,
  gray,
  green,
  orange,
  red,
  white,
  bgWhite,
};