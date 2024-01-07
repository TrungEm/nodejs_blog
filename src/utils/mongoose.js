const multipleMongooseToObject = (mongooses) => mongooses.map((mongoose) => mongoose.toObject()); // Object literal
const mongooseToObject = (mongoose) => (mongoose ? mongoose.toObject() : mongoose);

module.exports = { multipleMongooseToObject, mongooseToObject };
