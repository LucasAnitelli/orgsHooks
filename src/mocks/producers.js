import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const generatorNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const producers = {
  title: "Produtores",
  list: [
    {
      name: "Green",
      image: green,
      distance: generatorNumber(1, 500),
      star: generatorNumber(1, 5),
    },
    {
      name: "Salad",
      image: salad,
      distance: generatorNumber(1, 500),
      star: generatorNumber(1, 5),
    },
    {
      name: "JennyJack",
      image: jennyJack,
      distance: generatorNumber(1, 500),
      star: generatorNumber(1, 5),
    },
    {
      name: "Grow",
      image: grow,
      distance: generatorNumber(1, 500),
      star: generatorNumber(1, 5),
    },
    {
      name: "Potager",
      image: potager,
      distance: generatorNumber(1, 500),
      star: generatorNumber(1, 5),
    }
  ]
}