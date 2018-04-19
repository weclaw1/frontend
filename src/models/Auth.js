var m = require("mithril");
var jwtDecode = require('jwt-decode');

const api_url = 'http://localhost:9000';

var Auth = {
    username: "",
    password: "",

    error: "",

    setUsername: function(value) {
        Auth.username = value
    },
    setPassword: function(value) {
        Auth.password = value
    },

    // load: function() {
    //     Auth.token = localStorage.getItem("token");
    // },

    getTokenField: function(field) {
        if(localStorage.getItem("token")) {
            return jwtDecode(localStorage.getItem("token"))[field];
        } else {
            return null;
        }
    },

    login: function() {
        return m.request({
            method: "POST",
            url: `${api_url}/login`,
            data: {username:Auth.username, password:Auth.password},
        })
        .then(function(response) {
            localStorage.setItem("token", response.token);
            m.route.set("/users");
        })
    },

    logout: function() {
        localStorage.removeItem("token");
        m.route.set("/users");
    },

    register: function(user) {
        return m.request({
            method: "POST",
            url: `${api_url}/users/sign-up`,
            data: user,
        })
        .then(function(response) {
            m.route.set("/login");
        })
    },

    tokenHeaders: function() {
        if(localStorage.getItem("token")) {
            return {"Authorization": "Bearer " + localStorage.getItem("token")}
        } else {
            return {}
        }
    }

}

module.exports = Auth