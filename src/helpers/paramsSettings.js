function postParams (request) {
    Object.defineProperty(request, 'postId', {
        configurable: true,
        enumerable: true,
        get() { return parseInt(this.params.postId)}
    })
}

function userParams (request) {
    Object.defineProperty(request, 'userId', {
        configurable: true,
        enumerable: true,
        get() { return parseInt(this.params.userId)}
    })
}

module.exports = {
    postParams,
    userParams
}
