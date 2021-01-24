import React from 'react';
import {graphql} from 'gatsby';
import BlogLink from '../components/blog/blog-link';

const PostsPage = ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <BlogLink key={edge.node.id} post={edge.node} />);
  return <div>{Posts}</div>;
};

export default PostsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;
