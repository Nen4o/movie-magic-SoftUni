const User = require('../models/User');

createUser = (data) => {
    User.create(data);
}

findUser = (data) => {
    return User.findOne({ email: data.email });
}

module.exports = {
    createUser,
    findUser,

}