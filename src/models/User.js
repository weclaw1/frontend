var m = require("mithril");

const api_url = 'http://localhost:9000';

var User = {
    list: [],
    getList: function() {
        return m.request({
            method: "GET",
            url: `${api_url}/users`,
            withCredentials: false,
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
            withCredentials: false,
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
        })
        .then(function(response) {
            User.getList()
        })
    },

    put: function() {
        return m.request({
            method: "PUT",
            url: `${api_url}/users/:id`,
            data: User.current,
        })
        .then(function(response) {
            User.getList()
        })
    },

    delete: function(id) {
        return m.request({
            method: "DELETE",
            url: `${api_url}/users/${id}`,
        })
        .then(function(response) {
            User.getList()
        })
    },
}

module.exports = User