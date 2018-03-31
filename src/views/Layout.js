var m = require("mithril");

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
                        m("li.nav-item", {class: m.route.get() === '/' ? "active" : ""}, [
                            m("a.nav-link[href='/']", {oncreate: m.route.link}, "Home")
                        ]),
                        m("li.nav-item", {class: m.route.get() === '/users' ? "active" : ""}, [
                            m("a.nav-link[href='/users']", {oncreate: m.route.link}, "Users")
                        ]),
                        m("li.nav-item", {class: m.route.get() === '/characters' ? "active" : ""}, [
                            m("a.nav-link[href='/characters']", {oncreate: m.route.link}, "Characters")
                        ])
                    ])
                ])
            ]),
            m("main.container[role=main]", vnode.children)
        ])
    }
}