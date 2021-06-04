const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongoURI:
          'mongodb+srv://coreymunn:Sherm@n5@cluster0.kdjja.mongodb.net/blog-site-dev?retryWrites=true&w=majority',
      },
    };
  }
  // in some form of production, then...
  return {
    env: {
      mongoURI:
        'mongodb+srv://coreymunn:Sherm@n5@cluster0.kdjja.mongodb.net/blog-site?retryWrites=true&w=majority',
    },
  };
};
