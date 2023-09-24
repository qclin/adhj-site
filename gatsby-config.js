require("dotenv").config()

const sourceS3 = {
  resolve: "gatsby-source-s3-image",
  options: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    bucketName: process.env.S3_BUCKET_NAME,
    region: process.env.S3_REGION,
    protocol: process.env.S3_PROTOCOL,
  },
}
const sourceAirtable = {
  resolve: "gatsby-source-airtable",
  options: {
    apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
    tables: [
      {
        baseId: process.env.AIRTABLE_BASE_ID,
        tableName: "PROJECTS",
        // tableView: "YOUR_TABLE_VIEW_NAME", // optional
        // queryName: "OPTIONAL_NAME_TO_IDENTIFY_TABLE", // optional
        // mapping: { "CASE_SENSITIVE_COLUMN_NAME": "VALUE_FORMAT" }, // optional, e.g. "text/markdown", "fileNode"
        // tableLinks: ["CASE", "SENSITIVE", "COLUMN", "NAMES"] // optional, for deep linking to records across tables.
      },
      {
        baseId: process.env.AIRTABLE_BASE_ID,
        tableName: "VIDEOS",
        tableLinks: ["PROJECT"],
      },
      {
        baseId: process.env.AIRTABLE_BASE_ID,
        tableName: "CAPTIONS",
        tableLinks: ["PROJECT"],
      },
      {
        baseId: process.env.AIRTABLE_BASE_ID,
        tableName: "PRESS",
      },
      {
        baseId: process.env.AIRTABLE_BASE_ID,
        tableName: "NEWS",
      },
      {
        baseId: process.env.AIRTABLE_BASE_ID,
        tableName: "DRAWINGS",
      },
    ],
  },
}

module.exports = {
  siteMetadata: {
    title: "Anne Duk Hee Jordan",
    description: "Artist site of Anne Duk Hee Jordan",
    author: "Studio Hold",
    authorLink: "https://theholding.page/",
    openGraph: {
      title: "Anne Duk Hee Jordan",
      description:
        "Transience and transformation are the central themes in the work of Anne Duk Hee Jordan. Through movement and performance, Jordan gives materiality another dimension - she builds motorized sculptures and creates edible landscapes. Her sculptures are intended to draw the viewer into the present and open a dialogue between natural phenomena, philosophy and art. Her work is like an interactive fantasy play with the knowledge and theories about the world and our souls.",
      url: "https://dukhee.de",
      image: "./en_collage.png",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#06ff12",
        theme_color: "#ff35bb",
        display: "minimal-ui",
        icon: "src/images/mouse-pink.png", // This path is relative to the root of the site.
      },
    },
    sourceS3,
    sourceAirtable,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
