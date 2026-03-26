class Lingkaran {
    constructor(public jariJari: number) {}

    public hitungLuas(): number {
        return Math.PI * this.jariJari * this.jariJari;
    }
}

const bulat = new Lingkaran(14);
console.log(bulat.hitungLuas());