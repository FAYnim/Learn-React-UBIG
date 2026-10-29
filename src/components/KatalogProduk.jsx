import React, { useState } from 'react';

const KatalogProduk = ({ judul = "Katalog Produk" }) => {
    const [tampil, setTampil] = useState(true);

    const produk = [
        { id: 1, nama: 'Keyboard', harga: 150000, stok: 5 },
        { id: 2, nama: 'Mouse', harga: 75000, stok: 0 },
        { id: 3, nama: 'Monitor', harga: 1200000, stok: 3 }
    ];

    return (
        <div>
            <h2>{judul}</h2>
            <p>Daftar produk toko</p>

            <button onClick={() => setTampil(!tampil)}>
                {tampil ? 'Sembunyikan Produk' : 'Tampilkan Produk' }
            </button>

            <div>
                {tampil ? (
                        produk.map((item) => (
                            <div key={item.id}>
                                <h4>{item.nama}</h4>
                                <p>{item.harga.toLocaleString('id-ID')}</p>
                                <p>{item.stok <= 0 ? 'Stok Habis' : `Stok tersedia: ${item.stok}`}</p>
                            </div>
                        ))
                    ) : (
                        <p>Produk disembunyikan</p>
                    )
                }
            </div>
        </div>
    )
}

export default KatalogProduk;