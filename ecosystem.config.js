module.exports = {
  apps: [
    {
      name: 'openverse-frontend',
      exec_mode: 'cluster',
      instances: 'max',
      cwd: '/usr/app',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: `start -c ${process.cwd()}/nuxt.config.ts`,
    },
  ],
}
