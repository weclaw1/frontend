var m = require("mithril");

var Auth = require("./Auth");

const api_url = 'http://localhost:9000';

var User = {
    list: [],
    getList: function() {
        return m.request({
            method: "GET",
            url: `${api_url}/users`,
            headers: Auth.tokenHeaders(),
        })
        .then(function(users) {
            User.list = users
        })
    },

    current: {},
    get: function(id) {
        return m.request({
            method: "GET",
            url: `${api_url}/users/${id}`,
            headers: Auth.tokenHeaders(),
        })
        .then(function(user) {
            User.current = user
        })
    },

    post: function() {
        return m.request({
            method: "POST",
            url: `${api_url}/users`,
            data: User.current,
            headers: Auth.tokenHeaders(),
        })
        .then(function(response) {
            m.route.set("/users");
        })
    },

    put: function() {
        return m.request({
            method: "PUT",
            url: `${api_url}/users/:id`,
            data: User.current,
            headers: Auth.tokenHeaders(),
        })
        .then(function(response) {
            m.route.set("/users");
        })
    },

    delete: function(id) {
        return m.request({
            method: "DELETE",
            url: `${api_url}/users/${id}`,
            headers: Auth.tokenHeaders(),
        })
        .then(function(response) {
            User.getList();
            m.route.set("/users");
        })
    },
}

module.exports = User