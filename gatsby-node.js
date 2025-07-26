const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  
  const typeDefs = `
    type MdxFrontmatter {
      title: String!
      date: String!
      slug: String!
      excerpt: String
      category: String
      tags: [String]
      featured: Boolean
    }
  `;
  
  createTypes(typeDefs);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error('GraphQL query error');
  }

  const postTemplate = path.resolve('./src/templates/BlogPost.tsx');

  result.data.allMdx.nodes.forEach(node => {
    const slug = node.frontmatter?.slug || 'default-slug';
    createPage({
      path: `/blog/${slug}`,
      component: postTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
