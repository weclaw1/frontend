var m = require("mithril");
var GameCharacter = require("../models/GameCharacter");
var Auth = require("../models/Auth");

module.exports = {
    oninit: GameCharacter.getList,
    view: function() {
        return m("div", [
            m("table.table.table-striped", [
                m("thead", [
                    m("tr", [
                        m("th[scope=col]", "ID"),
                        m("th[scope=col]", "Name"),
                        m("th[scope=col]", "Level"),
                        m("th[scope=col]", "Class"),
                        m("th[scope=col]", "Actions"),
                    ]),
                ]),
                m("tbody", GameCharacter.list.map(function(character) {
                    return m("tr", [
                        m("th[scope=row]", character.id),
                        m("td", character.characterName),
                        m("td", character.level),
                        m("td", character.characterClass),
                        m("td", [
                            m("a.btn.btn-primary", {class: Auth.getTokenField("admin") ? "" : "disabled", href: "/characters/edit/" + character.id, oncreate: m.route.link}, m("span.oi.oi-pencil[title=Edit][aria-hidden=true]")),
                            m("button.btn.btn-danger", {onclick: m.withAttr("value", GameCharacter.delete), value: character.id}, m("span.oi.oi-delete[title=Delete][aria-hidden=true]")),
                        ]),
                    ])
                })),
            ]),
            m("a.btn.btn-success[href='/characters/add']", {oncreate: m.route.link}, m("span.oi.oi-plus[title=Add][aria-hidden=true]"))
        ])
    }
}