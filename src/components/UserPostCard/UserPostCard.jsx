import styles from "./UserPostCard.module.css";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const UserPostCard = ({ post, deleteHandler, updateHandler }) => {
  return (
    <figure className={styles.post}>
      <Image src={post.image} alt="Post image" width={200} height={200} />
      <figcaption className={styles.infoContainer}>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.postDesc}>{post.description}</p>
      </figcaption>
      <FaEdit
        className={styles.update}
        onClick={() => updateHandler(post._id)}
      />
      <MdDelete
        className={styles.delete}
        onClick={() => deleteHandler(post._id)}
      />
    </figure>
  );
};
