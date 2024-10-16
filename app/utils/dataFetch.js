import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const fetchUsers = async () => {
  const response = await axios
    .get(`${BASE_URL}users`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("Error fetching users: ", err);
      return err;
    });

  return response;
};

export const fetchPosts = async () => {
  const response = await axios
    .get(`${BASE_URL}posts`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("Error fetching posts: ", err);
      return err;
    });
  return response;
};

export const fetchPhotos = async () => {
  const response = await axios
    .get(`${BASE_URL}photos`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("Error fetching photos: ", err);
      return err;
    });
  return response;
};
