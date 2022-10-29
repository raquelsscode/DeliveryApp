const runSchema = (schema) => async (value) => schema.validateAsync(value);

module.exports = runSchema;