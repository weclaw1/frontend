var m = require("mithril");
var User = require("../models/User");

module.exports = {
    oninit: User.getList,
    view: function() {
        return m("table.table.table-striped", [
            m("thead", [
                m("tr", [
                    m("th[scope=col]", "ID"),
                    m("th[scope=col]", "Username"),
                    m("th[scope=col]", "Password"),
                    m("th[scope=col]", "Email"),
                    m("th[scope=col]", "Actions"),
                ]),
            ]),
            m("tbody", User.list.map(function(user) {
                return m("tr", [
                    m("th[scope=row]", user.id),
                    m("td", user.username),
                    m("td", user.password),
                    m("td", user.email),
                    m("td", [
                        m("a", {href: "/users/edit/" + user.id, oncreate: m.route.link}, m("span.oi.oi-pencil[title=Edit][aria-hidden=true]")),
                    ]),
                ])
            })),
        ])
    }
}