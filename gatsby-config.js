module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `http://localhost:9000/`,
    // Your Name
    name: 'Praphulla Bhawsar',
    pronunciation: '( pruh-full bahv-sahr )',
    // Main Site Title
    title: `Praphulla Bhawsar`,
    // Description that goes under your name in main bio
    description: `AI Engineer | PhD Student | Data Scientist-in-training | Geekus Maximus`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/prafulb`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/PrafulB/`,
    resume: `Praphulla Bhawsar CV.pdf`,
    // Content of the About Me section
    // about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: 'Ph.D. in Bioinformatics',
        description: 'Stony Brook University  |  Aug 2021 - Ongoing'
      },
      {
        name: 'M.S. in Computer Science',
        description: 'New York University  |  May 2019'
      },
      {
        name: 'B.Eng in Computer Engineering',
        description: 'University of Mumbai  |  Jun 2015'
      }
    ],
    projects: [
      {
        name: 'EpiPath: Digital Pathology in the Browser',
        description:
          'Currently developing a zero-cost web app for Annotation, AI Modeling and Active Learning on Digital Medical Images in Box directly from the browser.',
        link: 'https://episphere.github.io/path',
      },
      {
        name: 'Galaxy Morphology Classification Via Transfer Learning',
        description:
          'Trained a VGG-19 CNN using Keras to classify galaxies by morphology from raw sky survey images, demonstrating the advantages of transfer learning on astronomical datasets.',
        link: 'https://github.com/PrafulB/Galaxy_Merger_Detection_Using_CNNs',
      }
      // {
      //   name: 'DisTwitter',
      //   description:
      //     'A simplistic Twitter clone to run on a distributed architecture with Golang and Protobufs. Integrated a rudimentary file-based database using Viewstamped Replication, along with a neat front-end in ReactJS.',
      //   link: 'https://github.com/RyanFitzgerald/devfolio',
      // },
      // {
      //   name: 'Rock-Paper-Scissors with AI',
      //   description:
      //     'Designed a rock-paper-scissors game against an AI. Performed contour detection and feature extraction on webcam feed, followed by real-time gesture recognition using an SVM classifier.',
      //   link: '',
      // }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'National Cancer Institute',
        description: 'Doctoral Fellow  |  Aug 2021 - Present\nData Engineer  |  Mar 2019 - Aug 2021',
        link: 'https://dceg.cancer.gov/fellowship-training/fellowship-experience/meet-fellows/dserg/bhawsar-praphulla',
      },
      {
        name: 'NYU Student Tech Innovation',
        description: 'Lead Developer  |  Sept 2017 - Feb 2019',
        link: '',
      },
      {
        name: 'Reliance Jio, India',
        description: 'Full Stack Developer  |  June 2015 - July 2017',
        link: 'https://www.jio.com/',
      },
    ],
    publications: [
      {
        name: 'Browser-based data annotation, active learning, and real-time distribution of artificial intelligence models: from tumor tissue microarrays to COVID-19 radiology',
        authors: 'Bhawsar PM, Abubakar M, Schmidt MK, Camp NJ, Cessna MH, Duggan MA, Garcia.Closas M, Almeida JS, Journal of Pathology Informatics 2021',
        link: 'https://www.jpathinformatics.org/text.asp?2021/12/1/38/326825',
      },
      {
        name: 'Genomic and evolutionary classification of lung cancer in never smokers',
        authors: 'Zhang, T., Joubert, P., Ansari-Pour, N. et al., Nature Genetics 2021',
        link: 'https://doi.org/10.1038/s41588-021-00920-0',
      },
      {
        name: 'Mortality Tracker: the COVID-19 case for real time web APIs as epidemiology commons',
        authors: 'Almeida, J. S., Shiels, M., Bhawsar, P. et al., Bioinformatics 2020',
        link: 'https://doi.org/10.1093/bioinformatics/btaa933',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript, TensorFlow(+.js), Node.js, Python, PyTorch, Keras, OpenCV(+.js), Go, TypeScript, ReactJS, React Native, HTML, CSS',
      },
      {
        name: 'Databases',
        description: 'SQL, MongoDB, Elasticsearch, Redis, Couchbase, Firestore, BigQuery',
      },
      {
        name: 'Other',
        description:
          'Git, Amazon Web Services (AWS), Google Cloud Platform (GCP), Docker, Tableau, D3.js, Plotly.js, Nginx',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
