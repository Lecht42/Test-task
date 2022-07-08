import IPost from "../interfaces/IPost";

export class ServerInteractor {
    
    static async fetchPosts() {
        let result = await fetch("https://jsonplaceholder.typicode.com/posts")

        return JSON.parse(await result.text())
    }
    
    static async createPost(post: IPost) {
        let result = await fetch("https://jsonplaceholder.typicode.com/posts", 
        {
            method: 'POST',
            body: JSON.stringify(post),
        });
  
        return JSON.parse(await result.text())
    }

    static async fetchPostInfo(id : string ) {
        let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        return JSON.parse(await result.text())
    }

    static async updatePost(id : string, post: IPost) {
        let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
        {
            method: 'PUT',
            body: JSON.stringify(post),
        });
  
        return JSON.parse(await result.text())
    }

    static async deletePost(id : string) {
        let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
        { method: 'DELETE' });

        return JSON.parse(await result.text())
    }
    
}
