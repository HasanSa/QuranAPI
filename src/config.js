const env = process.env.NODE_ENV;
const common = {
  port: 8080
};
const config = {
  develop: {
    mongodb: {
      host: '127.0.0.1',
      database: 'quran-database'
    }
  },
  production: {
    mongodb: {
      user: 'admin',
      password: 'admin',
      host: 'ds137054.mlab.com',
      database: 'quran-database'
    }
  },
  test: {
    mongodb: {
      host: '127.0.0.1',
      database: 'quran-database'
    }
  }
};
export default Object.assign(common, config[env]);