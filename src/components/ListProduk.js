import React from 'react';

const ListProduk = () => {
    // Normal array
    // const produk = ["Mouse", "Keyboard", "Monitor"];
    
    // array object
    const produk = [
        { id: 1, nama: "Keyboard", harga: 150000 },
        { id: 2, nama: "Mouse", harga: 125000 },
        { id: 3, nama: "Monitor", harga: 500000 },
    ]

    return (
        <div>
            <h2>Daftar Produk</h2>

            {/* <ul>
                {produk.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul> */}
            
            <ul>
                {produk.map((item) => (
                    <div key={item}>
                        <h3>{item.nama}</h3>
                        <p>Harga: Rp {item.harga.toLocaleString('id-ID')}</p>
                    </div>
                ))}
            </ul> 
        </div>
    )
}

export default ListProduk;