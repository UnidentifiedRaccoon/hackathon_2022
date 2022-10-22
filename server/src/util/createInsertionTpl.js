const createInsertionTpl = (items, rowLength) => {
    let insertionTemplate = [];

    for (let i = 0; i < items.length; i+=rowLength) {
        insertionTemplate.push('(?,?,?,?)');
    }

    return insertionTemplate.join(',');
}

module.exports = {
    createInsertionTpl,
}