module.exports = () => {
  // Default to dev presets
  const dbConfig = {
    url: 'mongodb+srv://admin:securePassword@mongo-sandbox.vdr7w.mongodb.net/dev?retryWrites=true&w=majority',
    opts: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: 300000,
    },
  };

  switch (process.env.NODE_ENV) {
    case 'production':
      break;
    case 'stage':
      break;
    case 'test':
      Object.assign(dbConfig, { url: 'mongodb://localhost:27017/test' });
      break;
    case 'dev':
    default:
      break;
  }

  return dbConfig;
};
