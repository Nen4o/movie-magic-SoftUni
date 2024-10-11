const User = require('../models/User');

createUser = (data) => {
    User.create(data);
}

module.exports = {
    createUser,
}