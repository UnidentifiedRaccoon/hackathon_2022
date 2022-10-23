const createSuceess = (message) => {
    return JSON.stringify({
        success: true,
        message
    });
}

module.exports = {
    createSuceess,
};
