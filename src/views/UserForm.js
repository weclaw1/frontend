var m = require("mithril");
var User = require("../models/User");
var Auth = require("../models/Auth")

module.exports = {
    oninit: function(vnode) { vnode.attrs.id ? User.get(vnode.attrs.id) : User.current = {} },
    view: function() {
        return m("form", {
                onsubmit: function(e) {
                    e.preventDefault();
                    m.route.get() === "/register" ? Auth.register(User.current) : 
                    User.current.id ? User.put() : User.post();
                }
            }, [
            m("div.form-group", [
                m("label[for=inputUsername]", "Username"),
                m("input.form-control#inputUsername[type=text][placeholder=Username]", {
                    oninput: m.withAttr("value", function(value) {User.current.username = value}),
                    value: User.current.username
                })
            ]),
            m("div.form-group", [
                m("label[for=inputPassword]", "Password"),
                m("input.form-control#inputPassword[type=password][placeholder=Password]", {
                    oninput: m.withAttr("value", function(value) {User.current.password = value})
                })
            ]),
            m("div.form-group", [
                m("label[for=inputEmail]", "Email"),
                m("input.form-control#inputEmail[type=email][placeholder=Email]", {
                    oninput: m.withAttr("value", function(value) {User.current.email = value}),
                    value: User.current.email
                })
            ]),
            m("button.btn.btn-primary[type=submit]", m.route.get() === "/register" ? "Register" : "Save"),
        ])
    }
}