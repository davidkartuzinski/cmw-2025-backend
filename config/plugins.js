// config/plugins.js
/**
 * Global plugin configuration for Strapi v5.
 * - Production: Cloudinary upload provider (requires CLOUDINARY_* envs)
 * - Development override lives in: config/env/development/plugins.js
 */
module.exports = ({ env }) => ({
  // -------- Upload provider (PRODUCTION default = Cloudinary) --------
  upload: {
    config: {
      provider: '@strapi/provider-upload-cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

  // -------- populate-deep (you already used this) --------
  'populate-deep': {
    config: {
      defaultDepth: 5, // tweak as needed
    },
  },

  // ------------------------------------------------------------------
  // Below are OPTIONAL plugin configs. Uncomment/configure as needed.
  // ------------------------------------------------------------------

  // Example: GraphQL
  // graphql: {
  //   config: {
  //     endpoint: '/graphql',
  //     shadowCRUD: true,
  //     playgroundAlways: false,
  //     depthLimit: 10,
  //     amountLimit: 100,
  //   },
  // },

  // Example: Email (SMTP)
  // email: {
  //   config: {
  //     provider: 'smtp',
  //     providerOptions: {
  //       host: env('SMTP_HOST', 'smtp.sendgrid.net'),
  //       port: env.int('SMTP_PORT', 587),
  //       auth: {
  //         user: env('SMTP_USERNAME'),
  //         pass: env('SMTP_PASSWORD'),
  //       },
  //     },
  //     settings: {
  //       defaultFrom: env('EMAIL_FROM', 'no-reply@example.com'),
  //       defaultReplyTo: env('EMAIL_REPLY_TO', 'support@example.com'),
  //     },
  //   },
  // },

  // Example: Sitemap (if you add a sitemap plugin)
  // sitemap: {
  //   enabled: true,
  //   config: {
  //     cron: '0 0 * * *', // daily
  //   },
  // },

  // Example: Meilisearch (if you add it later)
  // 'meilisearch': {
  //   config: {
  //     host: env('MEILI_HOST'),
  //     apiKey: env('MEILI_API_KEY'),
  //     // indexes: { ... }
  //   },
  // },
});
