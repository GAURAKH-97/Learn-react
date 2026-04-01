import withData from './Hoc/withData';
import PostList from './PostList';

const PostListWithData = withData(PostList, "https://jsonplaceholder.typicode.com/posts")

export default PostListWithData