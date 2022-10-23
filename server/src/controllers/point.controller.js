const { createError } = require("../util/error")
const { createSuceess } = require("../util/success")
const { getPointsByTaskId, createPoint, updatePoint }  = require("../data/repositiries/point.repository");

const point = {
    getPointsByTaskId(req, res) {
        getPointsByTaskId(req.params.task_id, (err, rows) => {
            if (err) {
                console.error(err);
                return res.send(createError("Can not get this points"));
            }
            res.send(JSON.stringify(rows));
        });
    },
    
    createPoint(req, res) {
        createPoint(req.body, err => {
            if (err) {
                console.log(err);
                return res.send(createError("Can not create this point"));
            }
            return res.send(createSuceess("Point was successfully created"));
        });
    },

    updatePoint(req, res) {
        updatePoint(req.params.id, req.body.done, err => {
            if (err) {
                console.log(err);
                return res.send(createError("can't update this point"))
            }
            return res.send(createSuceess("Point updated successfully"))
        })
    }
};

module.exports = point;