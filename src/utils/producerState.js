/* eslint-disable camelcase */
import producer0_0 from '../images/producers/0/0.jpg';
import producer0_1 from '../images/producers/0/1.jpg';
import producer0_2 from '../images/producers/0/2.jpg';

import producer1_0 from '../images/producers/1/0.jpg';
import producer1_1 from '../images/producers/1/1.jpg';
import producer1_2 from '../images/producers/1/2.jpg';
import producer1_3 from '../images/producers/1/3.jpg';
import producer1_4 from '../images/producers/1/4.jpg';

import producer2_0 from '../images/producers/2/0.jpg';
import producer2_1 from '../images/producers/2/1.jpg';

import producer3_0 from '../images/producers/3/0.jpg';
import producer3_1 from '../images/producers/3/1.jpg';
import producer3_2 from '../images/producers/3/2.jpg';
import producer3_3 from '../images/producers/3/3.jpg';
import producer3_4 from '../images/producers/3/4.jpg';

import producer4_0 from '../images/producers/4/0.jpg';
import producer4_1 from '../images/producers/4/1.jpg';
import producer4_2 from '../images/producers/4/2.jpg';
import producer4_3 from '../images/producers/4/3.jpg';

import producer5_0 from '../images/producers/5/0.jpg';
import producer5_1 from '../images/producers/5/1.jpg';
import producer5_2 from '../images/producers/5/2.jpg';
import producer5_3 from '../images/producers/5/3.jpg';
import producer5_4 from '../images/producers/5/4.jpg';
import producer5_5 from '../images/producers/5/5.jpg';
import producer5_6 from '../images/producers/5/6.jpg';

import producers from '../../data/producers-rus.json';

const pictures = [
  [producer0_0, producer0_1, producer0_2],
  [producer1_0, producer1_1, producer1_2, producer1_3, producer1_4],
  [producer2_0, producer2_1],
  [producer3_0, producer3_1, producer3_2, producer3_3, producer3_4],
  [producer4_0, producer4_1, producer4_2, producer4_3],
  [producer5_0, producer5_1, producer5_2, producer5_3, producer5_4, producer5_5, producer5_6],
];

// const producerOfTheDay = Math.floor(Math.random() * producers.length);
// let producerOfTheDay = Math.floor(Math.random() * (dateNow.getDay() - 2));

const dateNow = new Date();
let producerOfTheDay = dateNow.getDay() - 2;
if (producerOfTheDay < 0) producerOfTheDay = 0;

if (typeof window !== 'undefined') {
  window.localStorage.setItem(
    'producerState',
    JSON.stringify({
      producers,
      pictures,
      lang: 'ru',
    }),
  );
}

export default {
  producers,
  producerOfTheDay,
  pictures,
  lang: 'ru',
};
