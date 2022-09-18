import { SinglePost } from "../index";
import { TPostsProps } from "./types";
const Posts = ({ posts }: TPostsProps) => {
  return (
    <div>
      {posts.map(({ title, body }, index) => (
        <SinglePost key={index} title={title} body={body} />
      ))}
    </div>
  );
};

export { Posts };
