interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

function cetakMahasiswa(bk: Buku): void {
    console.log(`${bk.judul} - ${bk.pengarang} - ${bk.tahunTerbit} - ${bk.tersedia}`);
}

const data: Buku ={
    judul: "Laut Bercerita",
    pengarang: "Leila S. Chudori",
    tahunTerbit: 2017,
    tersedia: true
};

cetakMahasiswa(data);