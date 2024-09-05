let idSeed = 10000;
function uniqueId() {
    return `__primer_id_${idSeed++}`;
}

export { uniqueId };
