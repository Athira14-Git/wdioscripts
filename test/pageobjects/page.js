
module.exports = class Page {
    
    open (path) {
        return browser.url(`https://my.setmore.com/start-now/${path}`)
    }
}
