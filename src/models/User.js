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
    }
}

module.exports = User