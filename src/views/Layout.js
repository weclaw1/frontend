var m = require("mithril");
var classNames = require('classnames');

module.exports = {
    view: function(vnode) {
        return m("div", [
            m("nav.navbar.navbar-expand-md.navbar-dark.bg-dark.fixed-top", [
                m("a.navbar-brand[href='/']", {oncreate: m.route.link}, "Frontend"),
                m("button.navbar-toggler[type=button][data-toggle=collapse][data-target=#navbarCollapse][aria-controls=navbarCollapse][aria-expanded=false][aria-label=Toggle navigation]",
                    m("span.navbar-toggler-icon")
                ),
                m("div.collapse.navbar-collapse#navbarCollapse", [
                    m("ul.navbar-nav.mr-auto", [
                        m("li.nav-item", {class: m.route.get() === '/users' ? "active" : ""}, [
                            m("a.nav-link[href='/users']", {oncreate: m.route.link}, "Users")
                        ]),
                        m("li.nav-item", {class: m.route.get() === '/characters' ? "active" : ""}, [
                            m("a.nav-link[href='/characters']", {class: localStorage.getItem("token") ? "" : "disabled", oncreate: m.route.link}, "Characters")
                        ])
                    ]),
                    m("ul.navbar-nav.ml-auto", [
                        m("li.nav-item", {class: classNames({
                            'active': m.route.get() === '/register', 
                            'd-none': localStorage.getItem("token")
                        })}, [
                            m("a.nav-link[href='/register']", {oncreate: m.route.link}, "Register")
                        ]),
                        m("li.nav-item", {class: m.route.get() === '/login' ? "active" : ""}, [
                            m("a.nav-link", {href: localStorage.getItem("token") ? "/logout" : "/login", oncreate: m.route.link}, localStorage.getItem("token") ? "Logout" : "Login")
                        ])
                    ])
                ])
            ]),
            m("main.container[role=main]", vnode.children)
        ])
    }
}