import {useEffect, useState} from 'react';
import {generateAntWinLikelihoodCalculator} from '../helpers/AntWinProbability';
import {Ant, CalculatingState} from '../models/Ant';
import {Response} from '../models/Response';

export function useAnts() {
  const [firstAnts, setFirstAnts] = useState<Ant[]>();
  const [ants, setAnts] = useState<Ant[]>();
  const [antsCalculated, setAntsCalculated] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  async function loadAnts() {
    const response = await fetch('https://sg-ants-test.herokuapp.com/ants');
    const data = (await response.json()) as Response;
    const newAnts = data.ants.map((ant) => {
      return {
        ...ant,
        state: CalculatingState.NOT_CALCULATED,
      };
    });
    setAnts(newAnts);
    setFirstAnts(newAnts);
  }

  function calculateAntWinProbability() {
    setIsCalculating(true);
    const newAnts = firstAnts?.map((ant) => {
      const callback = (probability: number) => {
        setAnts((oldAnts) => {
          const newAnts = oldAnts?.map((oldAnt) => {
            if (oldAnt.name === ant.name) {
              return {
                ...oldAnt,
                state: CalculatingState.CALCULATED,
                probability: probability,
              };
            }
            return oldAnt;
          });
          return newAnts;
        });
        setAntsCalculated((oldAntsCalculated) => oldAntsCalculated + 1);
      };
      generateAntWinLikelihoodCalculator()(callback);
      return {
        ...ant,
        state: CalculatingState.CALCULATING,
      };
    });
    setAnts(newAnts);
  }

  useEffect(() => {
    if (antsCalculated === ants?.length) {
      setIsCalculating(false);
      setAntsCalculated(0);
    }
  }, [ants, antsCalculated]);

  useEffect(() => {
    void loadAnts();
  }, []);

  return {ants, isCalculating, calculateAntWinProbability};
}
