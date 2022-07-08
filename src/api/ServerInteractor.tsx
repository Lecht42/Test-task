import IPost from "../interfaces/IPost";

export class ServerInteractor {
    
    static async fetchPosts() {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts")

        return JSON.parse(await result.text())
    }
    
    static async fetchPostInfo(id : string ) {
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        return JSON.parse(await result.text())
    }
    
    static async createPost(post: IPost) {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts", 
        {
            method: 'POST',
            body: JSON.stringify(post),
        });

        return  result.ok
    }

    static async updatePost(id : string, post: IPost) {
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
        {
            method: 'PUT',
            body: JSON.stringify(post),
        });

        return result.ok
    }

    static async deletePost(id : string) {
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
        { method: 'DELETE' });

        return result.ok
    }
    
}
