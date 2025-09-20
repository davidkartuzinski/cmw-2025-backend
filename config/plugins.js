// config/plugins.js
module.exports = ({ env }) => {
  // Choose provider via env. Defaults:
  // - production => Cloudinary (if creds present)
  // - other envs => local
  const useCloudinary = env.bool(
    'UPLOAD_USE_CLOUDINARY',
    env('NODE_ENV') === 'production' &&
      !!env('CLOUDINARY_NAME') &&
      !!env('CLOUDINARY_KEY') &&
      !!env('CLOUDINARY_SECRET')
  );

  return {
    'populate-deep': {
      config: { defaultDepth: 5 },
    },

    upload: {
      config: useCloudinary
        ? {
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
          }
        : {
            // Local provider for dev
            provider: 'local',
            providerOptions: {
              // Optional: customize local folder (defaults to public/uploads)
              // sizeLimit: 10 * 1024 * 1024, // 10MB
            },
          },
    },
  };
};
