import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MoreDetails extends Component {
    render() {
        const productId = this.props.location.state.product.id;
        const name = this.props.location.state.product.name;
        console.log(productId);
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    More details about product with id: {productId} and name: {name}
                </div>

                <Link
                    to={{
                        pathname: `/product`,
                    }}
                    style={{ textDecoration: 'none' }}
                >
                    <button>Back to see all products</button>
                </Link>
                <Link
                    to={{
                        pathname: `/`,
                    }}
                    style={{ textDecoration: 'none' }}
                >
                    <button>Back to HOME</button>
                </Link>
            </div>
        );
    }
}

export { MoreDetails };