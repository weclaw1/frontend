import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';

import 'open-iconic/font/css/open-iconic-bootstrap.css';

var m = require("mithril");

var Layout = require("./views/Layout");
var UserList = require("./views/UserList");
var UserForm = require("./views/UserForm");

m.route(document.body, "/users", {
  "/users": {
    render: function() {
      return m(Layout, m(UserList))
    }
  },
  "/users/edit/:id": {
    render: function(vnode) {
      return m(Layout, m(UserForm, vnode.attrs))
    }
  },
  "/users/add": {
    render: function(vnode) {
      return m(Layout, m(UserForm))
    }
  },
})
