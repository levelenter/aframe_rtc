module.exports = {
  apps: [
    {
      name: 'VRrtc',
      script: 'server_build',
      /* cwd: '/home/XXXX/YYYY/', */
      env: {
        PORT: 4441,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 4441,
        NODE_ENV: 'production',
      },
    },
  ],
};
