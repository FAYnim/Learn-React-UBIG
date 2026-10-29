import React from 'react';

const StokProduk = ({ nama, stok = 0}) => {
    return (
        <div>
            <p>{nama} - {stok === 0 ? 'Stok Habis' : `Stok: ${stok}`}</p>
        </div>
    )
}

export default StokProduk;