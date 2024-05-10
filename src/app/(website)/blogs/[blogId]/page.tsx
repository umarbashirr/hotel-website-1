const SingleBlogPostPage = ({ params }: { params: { blogId: string } }) => {
  const blogId = params?.blogId;
  return <div>{blogId}</div>;
};

export default SingleBlogPostPage;
