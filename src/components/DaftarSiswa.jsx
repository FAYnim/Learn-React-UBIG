import React from 'react';

const DaftarSiswa = () => {
    const siswa = [
        { id: 1, nama: 'Andi', jurusan: 'RPL' },
        { id: 2, nama: 'Budi', jurusan: 'TKJ' },
        { id: 3, nama: 'Citra', jurusan: 'RPL' },
        { id: 4, nama: 'Dina', jurusan: 'DKV' }
    ];

    return (
        <div>
            <h2>Daftar Siswa</h2>

            <div>
                {siswa.map((item) => (
                    <div key={item.id}>
                        <p><b>Nama Siswa: {item.nama}</b></p>
                        <p>Jurusan: {item.jurusan}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DaftarSiswa;