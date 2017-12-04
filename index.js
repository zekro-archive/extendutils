Object.assign(String.prototype, {
    /**
     * Tests if the string contains another
     * string or a string of an array.
     * @param {(string|string[])} cont Containing query
     * @param {*boolean} casesens Casesensitivity
     * @returns {boolean} Input contains query
     */
    contains(cont, casesens) {
        var totest = casesens ? this : this.toLowerCase()
        if (Array.isArray(cont)) {
            var collector = [];
            (casesens ? cont : cont.map(s => s.toLowerCase())).forEach(s => {
                collector.push(totest.indexOf(s) > -1)
            })
            return collector.indexOf(true) > -1
        }
        else
            return totest.indexOf(casesens ? cont.toLowerCase() : cont) > -1
    },
    /**
     * Replace all entered strings with new strings
     * or remove strings when no new string is defined.
     * @param {string} oldstr 
     * @param {*string} newstr 
     */
    replaceAny(oldstr, newstr) {
        if (!newstr)
            newstr = ""
        var curr = this
        while (curr.indexOf(oldstr) > -1)
            curr = curr.replace(oldstr, newstr)
        return curr
    }
})

Object.assign(Array.prototype, {
    /**
     * Tests if the array contains a string or
     * a string of another array.
     * Atention: It returns true if the input array
     * contains ANY string of the query, and not the
     * specific sequence of it!
     * @param {(string|string[])} cont Containing query
     * @param {*boolean} casesens Casesensitivity
     * @returns {boolean} Input contains query
     */
    contains(cont, casesens) {
        var results = []
        if (Array.isArray(cont)) {
            (casesens ? this : this.map(s => s.toLowerCase())).forEach(s => {
                cont.forEach(c => {
                    results.push(s.indexOf(casesens ? c : c.toLowerCase()) > -1)
                })
            })
        } else {
            (casesens ? this : this.map(s => s.toLowerCase())).forEach(s => {
                results.push(s.indexOf(casesens ? cont : cont.toLowerCase()) > -1)
            })
        }
        return results.indexOf(true) > -1
    }
})

