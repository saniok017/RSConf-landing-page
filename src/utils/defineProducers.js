import producerState from './producerState';


const defineProducer = (language) => {
  switch (language) {
    case 'en':
      return producerState.producersEng;
    case 'by':
      return producerState.producersBy;
    default:
      return producerState.producers;
  }
};

export default defineProducer;
