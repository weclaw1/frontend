var m = require("mithril");
var GameCharacter = require("../models/GameCharacter");
var Auth = require("../models/Auth")

module.exports = {
    oninit: function(vnode) { vnode.attrs.id ? GameCharacter.get(vnode.attrs.id) : GameCharacter.current = {} },
    view: function() {
        return m("form", {
                onsubmit: function(e) {
                    e.preventDefault();
                    GameCharacter.current.id ? GameCharacter.put() : GameCharacter.post();
                }
            }, [
            m("div.form-group", [
                m("label[for=inputCharacterName]", "Character name"),
                m("input.form-control#inputCharacterName[type=text][placeholder=Character name]", {
                    oninput: m.withAttr("value", function(value) {GameCharacter.current.characterName = value}),
                    value: GameCharacter.current.characterName
                })
            ]),
            m("div.form-group", {disabled: Auth.getTokenField("admin") ? false : true}, [
                m("label[for=inputLevel]", "Level"),
                m("input.form-control#inputLevel[type=number][placeholder=Level]", {
                    disabled: GameCharacter.current.id ? false : true,
                    oninput: m.withAttr("value", function(value) {GameCharacter.current.level = value}),
                    value: GameCharacter.current.level
                })
            ]),
            m("div.form-group", [
                m("label[for=inputCharacterClass]", "Character class"),
                m("select.form-control#inputCharacterClass", {
                    onchange: m.withAttr("value", function(value) {GameCharacter.current.characterClass = value}),
                    value: GameCharacter.current.characterClass,
                    required: true
                }, [
                    m("option", "Knight"),
                    m("option", "Paladin"),
                    m("option", "Sorcerer"),
                    m("option", "Druid"),
                ])
            ]),
            m("button.btn.btn-primary[type=submit]", "Save"),
        ])
    }
}