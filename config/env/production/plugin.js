// config/env/production/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      // Per Strapi Cloud docs, use the provider id 'cloudinary'
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'populate-deep': { config: { defaultDepth: 5 } },
});
