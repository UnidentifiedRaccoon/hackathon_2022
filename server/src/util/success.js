const createSuceess = (message, data) => {
    return JSON.stringify({
        success: true,
        message,
        data
    });
}

module.exports = {
    createSuceess,
};
