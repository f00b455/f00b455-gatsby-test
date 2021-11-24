import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from './index.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./f00b455.scss file.
   */

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              heroImage { 
                  gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    `
  );

  return (
    <div className={styles.page}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to f00b455!</h1>
      </header>
      <main>
        <h2>Resources   asdasd&amp; Tools</h2>
        <ul className="resources">
          {data.allContentfulBlogPost.edges.map( edge => {
            const image = getImage(edge.node.heroImage)
            return <li>{edge.node.title} <GatsbyImage image={image} alt={edge.node.slug} /></li>
          })}
        </ul>
      </main>
    </div>
  );
}

export default Index;
