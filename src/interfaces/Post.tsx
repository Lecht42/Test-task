export default interface Post {
    userId: number; 
    id: number; 
    title: string; 
    body: string 
} 

export default interface Posts extends Array<Post> { }