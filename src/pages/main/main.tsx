import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import Post from "./post";

import "./main.css";

export interface PostInterface {
  id: string;
  userId: string;
  title: string;
  description: string;
  username: string;
}

export default function Main() {
  const [postsList, setPostsList] = useState<PostInterface[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as PostInterface[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="main-container">
      {!postsList && (
        <div className="welcome-message">
          <h2>Welcome to this post creation App with ReactJS.</h2>
          <p>Sign In to start creating posts!</p>
        </div>
      )}
      {postsList?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
