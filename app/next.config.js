const path = require("path")

module.exports = {
  webpack(config) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "next-auth$": path.join(process.cwd(), "next-auth/server"),
        "next-auth/react$": path.join(process.cwd(), "next-auth/react"),
        "next-auth/jwt$": path.join(process.cwd(), "next-auth/lib/jwt"),
        "next-auth/adapters": path.join(process.cwd(), "next-auth/adapters"),
        "next-auth/providers": path.join(process.cwd(), "next-auth/providers"),
      },
    }

    return config
  },
}
