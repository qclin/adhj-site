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
        tableName: "CAPTIONS",
        tableLinks: ["PROJECT"], // optional, for deep linking to records across tables.
      },
      {
        baseId: process.env.AIRTABLE_BASE_ID,
        tableName: "VIDEOS",
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
      description: "Anne Duk Hee Jordan is a visual artist and food artist.",
      url: "https://dukhee.de",
      image: "",
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    sourceS3,
    sourceAirtable,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
