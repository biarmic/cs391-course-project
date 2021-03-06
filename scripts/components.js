/**
 * Creates a new instance of Session.
 */
function Session() {
    this.user = null;
}

/**
 * Creates a new instance of user.
 * @param {string} username 
 * @param {string} password 
 * @param {string} name 
 * @param {Date} birthDate 
 * @param {string} gender 
 */
function User(username, password, name, birthDate, gender) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    this.lists = [];
}

/**
 * Appends all lists to the DOM.
 */
User.prototype.appendDOM = function () {
    this.lists.forEach(list => list.appendDOM());
}

/**
 * Returns an empty id slot for lists.
 */
User.prototype.findId = function () {
    for (var i = 0; i <= this.lists.length; ++i) {
        var exists = false;
        for (var j = 0; !exists && j < this.lists.length; ++j)
            if (this.lists[j].id.substr(1) == i)
                exists = true;
        if (!exists)
            return i;
    }
    return -1;
}

/**
 * Removes the List with the given id.
 * @param {string} id 
 */
User.prototype.removeList = function (id) {
    for (var i = 0; i < this.lists.length; ++i)
        if (this.lists[i].id == id) {
            this.lists.splice(i, 1)[0].remove();
            break;
        }
}

/**
 * Returns the List with the given id.
 * @param {string} id 
 */
User.prototype.getList = function (id) {
    for (var i = 0; i < this.lists.length; ++i)
        if (this.lists[i].id == id)
            return this.lists[i];
    return null;
}