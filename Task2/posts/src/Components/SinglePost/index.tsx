import { TSinglePostProps } from "./types";
import styles from "./SinglePost.module.scss";
const { titleContainer, postContainer } = styles;
const SinglePost = ({ title, body }: TSinglePostProps) => {
  return (
    <div className={postContainer}>
      <div className={titleContainer}>
        <p>{title}</p>
      </div>
      <p>{body}</p>
    </div>
  );
};

export { SinglePost };
