import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const FunkcionalnaKomponenta = (props) => {
  console.log('*****', props);
  const { atribut, props1, atr2, povrce } = props;
  const [counter, setCounter] = useState(0);
  const [novaPromeljiva, setNovaPormenljiva] = useState(0);
  const [niz, setNiz] = useState([]);
  const [niz2, setNiz2] = useState([])

  // KOMPONENTA SE RENDERUJE KAD GOD JOJ SE PROMENI ILI STATE ILI PROPS

  // OVO NAM  JE SLUCAJ SA USEEFFECT KAD ON TREBA DA SE DESI SAMO JEDNOM U APLIKACKACIJI
  // kad hocu nesto da
  useEffect(() => {
    // samo ce se jednom izvrsiti - samo inicijalno ili na rifres
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log('>>>>>>>>>>>> use EFFECT BROJ 1', response.data);
      setNiz(response.data);
    });
  }, []); // to sto se samo jednom pozove jeste zbog ovih [] zagrada na kraju

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => res.json())
      .then((result) => {
        console.log('>>>>>  USE EFFECT 2 result is', result);
        setNiz2(result)
      });
  }, []);

  // OVAJ USEEFFECT KORISTIM KAD GOD MI SE RENDERUJE OVA KOMPONENTA
  useEffect(()=> {
       console.log('!!!!!!!!!!!!!!!!!!!!! ovo ce se izvrsiti na svaki render ove komponente zato sto nemam depencie')
  })

// OVAJ USEEFFECT SE KORSTI KAD MI SE PORMENI VREDNOST DEPENDECIJA KOJI JE U [], A MENI JE TO OVDE COUNTER
  useEffect(() => {
       console.log('Ovo ce se izvrsiti svaki put kad mi se promenljiva COUNTER pormeni, tj kad dobije novu vrendost')
  }, [counter])

  const fja = () => {
    console.log('MENI TREBA IZ PRETHODNE KOMPOENNTE INFO O POVRCU', povrce);
    console.log('MENI TREBA VREDNOST ATTR2 ZA NEKU MOJU RACUNICU', atr2);
  };
  return (
    <>
      <button
        onClick={() => {
          console.log('kliknutou funkcionalnoj');
          setCounter(counter + 1);
          setNovaPormenljiva(90);
          fja();
          console.log(
            '>>>>> USEFFETC 1 : Vrednost niza koju sam napnio sa response od axios',
            niz
          );

          console.log('>>>>> USEFFETC  2 Vrednost niza koju sam napnio sa response od axios',
          niz2')
          
        }}
      >
        FUNKCIONALNA KOMPOENTA: Ovo je broj {counter} a nova pormenjva je
        {novaPromeljiva}
      </button>

      <div>
        Od mog prijatelja HomePage sam dobio {(atribut, props1, atr2.a)}
      </div>
    </>
  );
};
