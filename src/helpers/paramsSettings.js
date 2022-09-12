function postParams (request) {
    Object.defineProperty(request, 'posts', {
        configurable: true,
        enumerable: true,
        get() { return parseInt(request.params.postId)}
    })
    console.log()
}

module.exports = postParams
