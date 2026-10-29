import React from 'react';

const Stok = ({ stok = 0 }) => {
    // Default if-else
    // if (stok === 0) {
    //     return (
    //         <div>
    //             <p>Stok Habis</p>
    //         </div>
    //     )
    // }
    // return (
    //     <div>
    //         <p>Stok: {stok}</p>
    //     </div>
    // )

    // Ternary Operator
    return (
        <div>
            {stok === 0 ? <p>Stok habis</p> : <p>Stok: {stok}</p>}
        </div>
    )
}

export default Stok;