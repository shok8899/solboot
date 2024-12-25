module.exports = {
  apps: [{
    name: 'solana-bot',
    script: 'src/index.js',
    exec_mode: 'fork',
    exp_backoff_restart_delay: 100,
    node_args: ['--experimental-modules'],
    env: {
      NODE_ENV: 'production'
    }
  }]
};