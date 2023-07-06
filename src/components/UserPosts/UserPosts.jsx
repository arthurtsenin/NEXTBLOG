import styles from "./UserPosts.module.css";
import { UserPostCard } from "@/components/UserPostCard/UserPostCard";
import { Loader } from "@/components/Loader/Loader";

export const UserPosts = ({
  isLoading,
  data,
  userName,
  deleteHandler,
  updateHandler,
}) => {
  if (!data?.length) return <h2>{`${userName}, you haven't posts`}</h2>;

  if (isLoading) return <Loader />;

  return (
    <div className={styles.posts}>
      {isLoading ? (
        <Loader />
      ) : (
        data
          ?.map((post) => (
            <UserPostCard
              key={post._id}
              post={post}
              deleteHandler={deleteHandler}
              updateHandler={updateHandler}
            />
          ))
          .reverse()
      )}
    </div>
  );
};
