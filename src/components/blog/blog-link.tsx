import React from 'react';
import { Link } from 'gatsby';

const BlogLink = ({ post }: any) => (
  <div>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
);

export default BlogLink;
