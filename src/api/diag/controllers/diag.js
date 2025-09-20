module.exports = {
  async provider(ctx) {
    const conf = ctx?.strapi?.config?.get('plugin.upload', {}) || {};
    ctx.body = {
      provider: conf?.config?.provider || 'unknown',
      envNode: process.env.NODE_ENV || 'unknown',
      hasCloudinaryVars:
        !!process.env.CLOUDINARY_NAME &&
        !!process.env.CLOUDINARY_KEY &&
        !!process.env.CLOUDINARY_SECRET,
    };
  },
};
