export class ServerInteractor {
    
    static async fetchPosts() {
        let result = await fetch("https://jsonplaceholder.typicode.com/posts")

        return JSON.parse(await result.text())
    }

    static async fetchPostInfo(id : string ) {
        let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        return JSON.parse(await result.text())
    }

    static async updatePost(id : string) {
        let result = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)

        return JSON.parse(await result.text())
    }

    static async deletePost(id : string) {
        let result = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)

        return JSON.parse(await result.text())
    }

}
