
import "bootstrap";

import { mercuryToAudio } from '../plugins/init_mercury.js';
import { player } from '../plugins/init_plyr.js';
import { slick_carousel } from '../components/init_slick.js';
import { favorites } from '../components/favorites.js';


if (document.getElementById("mercuryButton")) {
  mercuryToAudio();
}

slick_carousel();
favorites();
