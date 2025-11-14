const joi = require("joi");

const create = joi.object({
    title: joi.string().min(3).max(100).required(),
    description: joi.string().allow('').optional(),
    prize: joi.string().allow('').optional(),
    deadline: joi.date().iso().required(),
    level: joi.string().allow('').optional(),
    status: joi.boolean().optional(),
    datasetId: joi.number().integer().positive().required()
});

const update = joi.object({
    title: joi.string().min(3).max(100).optional(),
    description: joi.string().allow('').optional(),
    prize: joi.string().allow('').optional(),
    deadline: joi.date().iso().optional(),
    level: joi.string().allow('').optional(),
    status: joi.boolean().optional(),
    datasetId: joi.number().integer().positive().optional()
}).min(1);

module.exports = {
    create,
    update
};