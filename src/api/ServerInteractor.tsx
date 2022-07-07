export class ServerInteractor {
    
    static async  fetchPosts() {
        let result = await fetch("https://jsonplaceholder.typicode.com/posts")

        return JSON.parse(await result.text())
    }

}
