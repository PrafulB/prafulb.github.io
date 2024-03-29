import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
// import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionEducation from '../components/section-education';
import SectionPublications from '../components/section-publications';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const education = get(data, 'site.siteMetadata.education', false); 
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const publications = get(data, 'site.siteMetadata.publications', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const noBlog = !posts || !posts.length;
  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {education && education.length && <SectionEducation education={education} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
        )}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {publications && publications.length && (
        <SectionPublications publications={publications} />
        )}
      {/* {!noBlog && <SectionBlog posts={posts} />} */}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        pronunciation
        title
        description
        about
        author
        github
        linkedin
        resume
        education {
          name
          description
        }
        projects {
          name
          description
          link
        }
        experience {
          name
          description
          link
        }
        publications {
          name
          authors
          link
        }
        skills {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
