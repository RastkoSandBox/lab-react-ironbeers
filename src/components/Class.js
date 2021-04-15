import React, { Component } from 'react';

export class KlasnaKomponenta extends Component {
  // this.state    i this.props
  state = {
    counter: 8,
    novaPromeljiva: 0,
  };

  render() {
    const { zovemKakoHoces } = this.props;
    console.log('?????? pristuapm svim porpsima', this.props);
    console.log(
      '???? ovako pristupam samo propertiju zovemKakoHoces',
      zovemKakoHoces
    );
    return (
      <button
        onClick={() => {
          this.setState({ counter: this.state.counter + 1 });
          this.setState({ novaPromeljiva: 14 });
        }}
      >
        KLASNA KOMPOENTA: Ovo je broj {this.state.counter} a nova pormenljiva je{' '}
        {this.state.novaPromeljiva}
      </button>
    );
  }
}
