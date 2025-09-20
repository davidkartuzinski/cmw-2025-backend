module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/_upload-provider',
      handler: 'diag.provider',
      config: { auth: false },
    },
  ],
};
