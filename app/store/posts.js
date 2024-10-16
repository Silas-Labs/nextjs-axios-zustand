import { create } from "zustand";

const usePostsStore = create((set) => ({
  posts: [],
  setPosts: (fetchedPosts) => set({ posts: fetchedPosts }),
}));

export default usePostsStore;
