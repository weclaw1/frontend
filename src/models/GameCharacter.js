var m = require("mithril");

var Auth = require("./Auth");

const api_url = 'http://localhost:9000';

var GameCharacter = {
    list: [],

    getList: function() {
        return m.request({
            method: "GET",
            url: `${api_url}/users/${Auth.getTokenField("id")}/characters`,
            headers: Auth.tokenHeaders(),
        })
        .then(function(characters) {
            GameCharacter.list = characters
        })
    },

    current: {},
    get: function(id) {
        return m.request({
            method: "GET",
            url: `${api_url}/users/${Auth.getTokenField("id")}/characters/${id}`,
            headers: Auth.tokenHeaders(),
        })
        .then(function(character) {
            GameCharacter.current = character
        })
    },

    post: function() {
        return m.request({
            method: "POST",
            url: `${api_url}/users/${Auth.getTokenField("id")}/characters`,
            data: GameCharacter.current,
            headers: Auth.tokenHeaders(),
        })
        .then(function(response) {
            m.route.set("/characters");
        })
    },

    put: function() {
        return m.request({
            method: "PUT",
            url: `${api_url}/users/${Auth.getTokenField("id")}/characters/:id`,
            data: GameCharacter.current,
            headers: Auth.tokenHeaders(),
        })
        .then(function(response) {
            m.route.set("/characters");
        })
    },

    delete: function(id) {
        return m.request({
            method: "DELETE",
            url: `${api_url}/users/${Auth.getTokenField("id")}/characters/${id}`,
            headers: Auth.tokenHeaders(),
        })
        .then(function(response) {
            GameCharacter.getList();
            m.route.set("/characters");
        })
    },
}

module.exports = GameCharacter