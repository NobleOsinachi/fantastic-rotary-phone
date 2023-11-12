import { Post } from "@/app/api/data/route";

export async function getPosts() {
  try {
    const data = await fetch("/api/posts");
    const posts: Array<Post> = await data.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostById(id: number = 1) {
  try {
    const data = await fetch(`/api/posts/${id}`);
    const post: Post = await data.json();
    return post;
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error);
    return null;
  }
}
