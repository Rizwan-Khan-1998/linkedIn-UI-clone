<<<<<<< HEAD
=======
/* eslint-disable react/jsx-key */
>>>>>>> 7b14bed (responsive)
import Post from "./Post";
import useFetchPost from "../../hooks/useFetchPost";

export default function Posts() {
  const { postsData, loading, error } = useFetchPost();
<<<<<<< HEAD
  console.log(postsData);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;
  if (!postsData || postsData.length === 0) return <p>No posts available</p>;
  return (
    <>
      <Post post={postsData[0]} />
      <Post post={postsData[1]} />
=======
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;
  if (!postsData || postsData.length === 0) return <p>No posts available</p>;
  console.log(postsData)
  return (
    <>
      {postsData.map((post) => (
        <Post
          key={post.id}
          post={post}
        loading={loading} />
      ))}
>>>>>>> 7b14bed (responsive)
    </>
  );
}
