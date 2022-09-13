class PostsRepository{
    async getAll(){
        return [];
    }
    async getOne(id){
        const post = {
            id,
            title: 'Post1',
            author: 'Me'
        }
        return post;
    }
    async create(post){
        const newPost = {...post}
        return newPost;
    }

    async replaceOne(id, post){
        const replacedPost = {
            postId: id,
            ...post}
        return replacedPost;
    }
    async updateOne(id, post){
        const updatedPost = {
            postId: id,
            title: 'Post1',
            author: 'Me'
        }
        return updatedPost;
    }
    async deleteOne(id){
        const deletedPost = {
            id,
            title: 'Post1',
            author: 'Me'
        }
        return deletedPost;
    }
}

module.exports = {PostsRepository};
