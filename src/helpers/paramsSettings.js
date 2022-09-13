function postParams (request) {
    Object.defineProperty(request, 'postId', {
        configurable: true,
        enumerable: true,
        get() { return parseInt(this.params.postId)}
    })
}

module.exports = postParams
