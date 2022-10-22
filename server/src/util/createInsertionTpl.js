const createInsertionTpl = (items, rowLength) => {
    let insertionTemplate = [];

    for (let i = 0; i < items.length; i+=rowLength) {
        insertionTemplate.push(`(${new Array(rowLength).fill('?').join(',')})`);
    }

    return insertionTemplate.join(',');
}

module.exports = {
    createInsertionTpl,
}