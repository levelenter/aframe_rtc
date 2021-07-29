module.exports = {
  apps: [
    {
      name: 'Application Name(4001)',
      script: '/server/index.ts',
      cwd: '/home/XXXX/YYYY/',
      env: {
        PORT: 4001,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 4001,
        NODE_ENV: 'production',
      },
    },
  ],
};
