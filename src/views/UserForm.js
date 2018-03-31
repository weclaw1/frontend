var m = require("mithril");
var User = require("../models/User");

module.exports = {
    oninit: function(vnode) {User.get(vnode.attrs.id)},
    view: function() {
        return m("form", [
            m("div.form-group", [
                m("label[for=inputUsername]", "Username"),
                m("input.form-control#inputUsername[type=text][placeholder=Username]", {value: User.current.username})
            ]),
            m("div.form-group", [
                m("label[for=inputPassword]", "Password"),
                m("input.form-control#inputPassword[type=password][placeholder=Password]")
            ]),
            m("div.form-group", [
                m("label[for=inputEmail]", "Email"),
                m("input.form-control#inputEmail[type=email][placeholder=Email]", {value: User.current.email})
            ]),
            m("button.btn.btn-primary[type=submit]", "Save"),
        ])
    }
}