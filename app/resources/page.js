"use client";
import Image from "next/image";
import usePhotosStore from "../store/photos";
import usePostsStore from "../store/posts";
import useUsersStore from "../store/users";
import { fetchUsers, fetchPosts, fetchPhotos } from "../utils/dataFetch.js";
import LoadingSpinner from "../components/LoadingSpinner";
import { useState } from "react";

const Resources = () => {
  const [loading, setLoading] = useState(false);
  const [fetchTime, setFetchTime] = useState("");
  const users = useUsersStore((state) => state.users);
  const setUsers = useUsersStore((state) => state.setUsers);

  const posts = usePostsStore((state) => state.posts);
  const setPosts = usePostsStore((state) => state.setPosts);

  const photos = usePhotosStore((state) => state.photos);
  const setPhotos = usePhotosStore((state) => state.setPhotos);

  const getFetchTime = () => new Date().getTime();

  const getUsers = async () => {
    const time = new Date(getFetchTime()).toTimeString();
    setFetchTime(time);
    try {
      const data = await fetchUsers();
      console.info("Users: ", data);
      setUsers(data);
    } catch (err) {
      console.error("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const getPosts = async () => {
    try {
      const data = await fetchPosts();
      console.info("Posts: ", data);
      setPosts(data);
    } catch (err) {
      console.error("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const getPhotos = async () => {
    try {
      const data = await fetchPhotos();
      console.info("Photos: ", data);
      setPhotos(data);
    } catch (err) {
      console.error("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-auto bg-gradient-to-br from-teal-500 to-indigo-900 justify-center flex flex-row space-evenly p-1">
      <div className="w-auto min-w-[200px] bg-gradient-to-r  border border-fuchsia-500 rounded-md">
        <span className="btn btn-sm btn-primary m-1" onClick={getUsers}>
          Users
        </span>
        <p className="text-xs text-slate-950">{fetchTime}</p>
        <div className="bg-gradient-to-r from-gray-400">
          {loading && <LoadingSpinner />}
          {users.length ? (
            users.map((user) => (
              <ul key={user.id}>
                <p className="p-2 my-1 odd:bg-blue-400">{user.name}</p>
              </ul>
            ))
          ) : (
            <p>User list is empty</p>
          )}
        </div>
      </div>
      <div className="w-auto min-w-[200px] bg-gradient-to-br  border border-red-400 rounded-md mx-1.5">
        <span className="btn btn-sm btn-secondary m-1" onClick={getPosts}>
          Posts
        </span>
        <p className="text-xs text-slate-950">{fetchTime}</p>
        <div className="">
          {loading && <LoadingSpinner />}
          {posts.length ? (
            posts.map((post) => (
              <ul key={post.id} className="p-2 my-1 odd:bg-green-400">
                {post.title}
              </ul>
            ))
          ) : (
            <p>Post list is empty</p>
          )}
        </div>
      </div>
      <div className="w-auto min-w-[200px] bg-gradient-to-br border border-fuchsia-500 rounded-md">
        <span className="btn btn-sm btn-accent m-1" onClick={getPhotos}>
          Photos
        </span>
        <p className="text-xs text-slate-950">{fetchTime}</p>
        <div className="">
          {loading && <LoadingSpinner />}
          {photos.length ? (
            photos.map((photo) => (
              <ul key={photo.id} className="odd:bg-purple-500">
                <p className="p-2 my-1 ">{photo.url}</p>
              </ul>
            ))
          ) : (
            <p>Photo list is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
