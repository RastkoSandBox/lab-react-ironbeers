import React, { Component } from 'react'

class Allbears extends Component {



    render() {
        console.log('ovako se pristupa stetu iz Linka (kad hocu da posaljem neke podatke preko linka)', this.props.location.state)
        const l = this.props.location.state.svaPiva;
        return l.map(element => <div key={element.id}>{element.name}</div>
            //    return l.map(element => <Bear name={element.name}></Bear>  
        )
    }
}


export { Allbears };



// komponenta Bear = {
//     render() {
//         return(
//             <div>{this.props.name}</div>
//         )
//     }
// }