module.exports = {
  apps: [
    {
      name: "gbb-server",
      script: "./server/dist/index.js",
      instances: "max",
      exec_mode: "cluster",
      env_production: {
        NODE_ENV: "production",
      }
    }
  ]
}
