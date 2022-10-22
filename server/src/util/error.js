const createError = (message) => {
    return JSON.stringify({
        success: false,
        message
    });
}

module.exports = {
    createError,
};
