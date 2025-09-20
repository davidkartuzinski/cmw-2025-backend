/**
 * Development-only overrides.
 * Forces local upload provider so you don't use Cloudinary in dev.
 */
module.exports = () => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        // sizeLimit: 10 * 1024 * 1024, // optional
      },
    },
  },

  'populate-deep': {
    config: {
      defaultDepth: 5,
    },
  },
});
