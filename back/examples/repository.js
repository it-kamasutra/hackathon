var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String
});
var User = mongoose.model('MyUser', userSchema);


const {writeJsonToFile, readJsonFromFile} = require("./fsUtils");

const filePath = 'users.json';

const getUsers = (search) => {
    if (!search) {
        return User.find();
    } else {
        return User.find({name: new RegExp(search)});
    }
};

const getUser = (id) => {
        return User.find({_id: id});
};

const deleteUser = (id) => {
    return User.deleteOne({_id: id});
}

const updateUser = (id, name) => {
    return User.update({_id: id}, {name: name});
}

const addUser = async (name) => {
    var user = new User({name});
    return user.save()/*

    let users = await getUsers();
    users.push({id: users.length + 1, name});
    return writeJsonToFile(filePath, users)*/
};

exports.getUsers = getUsers;
exports.updateUser = updateUser;
exports.getUser = getUser;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
