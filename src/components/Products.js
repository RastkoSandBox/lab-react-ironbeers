import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
    state = {
        products: [
            { id: 1, name: 'prvi' },
            { id: 2, name: 'drugi' },
            { id: 3, name: 'treci' },
        ],
    };
    render() {
        const { products } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '30px' }}>Products</div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>Prvi proizvod</div>
                    <Link
                        to={{
                            pathname: `/product/${products[0].id}`,
                            state: { product: products[0] },
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        <button>More details</button>
                    </Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>Drugi porizvod</div>
                    <Link
                        to={{
                            pathname: `/product/${products[1].id}`,
                            state: { product: products[1] },
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        <button>More details</button>
                    </Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>Treci porizvod</div>
                    <Link
                        to={{
                            pathname: `/product/${products[2].id}`,
                            state: { product: products[2] },
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        <button>More details</button>
                    </Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Link
                        to={{
                            pathname: `/`,
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        <button>Back to home</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export { Products };