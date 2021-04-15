import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FunkcionalnaKomponenta } from './Function';
import { KlasnaKomponenta } from './Class';

class HomePage extends Component {
  state = {
    svaPiva: [],
    ime: 'djurica',
  };
  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log(response.data);
      const pomocniNiz = [...response.data];
      this.setState({ svaPiva: [...pomocniNiz] });
      this.setState({ ime: 'rastko' });
    });
  }

  render() {
    const { svaPiva } = this.state;
    console.log('pica,', svaPiva);

    let prikaziPiva;
    if (svaPiva) {
      prikaziPiva = (
        <Link
          to={{
            pathname: '/bears',
            state: { svaPiva: svaPiva },
          }}
        >
          PIVA
        </Link>
      );
    }
    const ooo = { ime: 'persun' };
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>Home</div>
        <Link
          to={{
            pathname: `/product`,
          }}
          style={{ textDecoration: 'none' }}
        >
          <button>Click to see products</button>
        </Link>

        {prikaziPiva}
        <FunkcionalnaKomponenta
          atribut="pozdrav"
          props1={'isto je'}
          atr2={{ a: 1 }}
          povrce={ooo}
        />
        <KlasnaKomponenta zovemKakoHoces={23} />
      </div>
    );
  }
}

export { HomePage };
