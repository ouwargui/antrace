import {useEffect, useState} from 'react';
import {Ant} from '../models/Ant';
import {Response} from '../models/Response';

export function useAnts() {
  const [ants, setAnts] = useState<Ant[]>();

  async function loadAnts() {
    const response = await fetch('https://sg-ants-test.herokuapp.com/ants');
    const data = (await response.json()) as Response;
    setAnts(data.ants);
    console.log('carregando formigas');
  }

  useEffect(() => {
    void loadAnts();
  }, []);

  return ants;
}
