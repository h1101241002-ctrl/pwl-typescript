function sapaan(input: string | number): string {
    if (typeof input === "string") {
        return `Halo, ${input}`; 
    } 
    else {
        return `Umur: ${input} tahun`; 
    }
}

console.log(sapaan("Nayla Zakiyah Andani"));
console.log(sapaan(19));