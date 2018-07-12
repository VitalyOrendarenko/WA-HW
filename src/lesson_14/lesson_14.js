import { Bulb } from './components/bulb/bulb';
import { Garland } from './components/garland/garland';
import './lesson_14.scss';
import './components/select/select';

const bulb = new Bulb(document.querySelector('#bulb1'));
const garland = new Garland(document.querySelector('#garland1'),);
const countries = new Select(document.querySelector('#countriesList'), countries)