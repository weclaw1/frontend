var m = require("mithril");
var Auth = require("../models/Auth");

module.exports = {
    oninit: function(vnode) { Auth.username = ""; Auth.password = ""; },
    view: function() {
        return m("form", {
                onsubmit: function(e) {
                    e.preventDefault();
                    Auth.login();
                }
            }, [
            m("div.form-group", [
                m("label[for=inputUsername]", "Username"),
                m("input.form-control#inputUsername[type=text][placeholder=Username]", {
                    oninput: m.withAttr("value", function(value) {Auth.setUsername(value)}),
                })
            ]),
            m("div.form-group", [
                m("label[for=inputPassword]", "Password"),
                m("input.form-control#inputPassword[type=password][placeholder=Password]", {
                    oninput: m.withAttr("value", function(value) {Auth.setPassword(value)}),
                })
            ]),
            m("button.btn.btn-primary[type=submit]", "Login"),
        ])
    }
}