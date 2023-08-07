/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
      remotePatterns: []
    },
    swcMinify: true,
    webpack: (config, options) => {
      const { dir, defaultLoaders } = options;
      config.resolve.extensions.push('.ts', '.tsx');
      config.module.rules.push({
        test: /\.tsx?$/,
        include: [dir],
        exclude: /node_modules/,
        use: [
          defaultLoaders.babel,
          {
            loader: 'ts-loader',
            options: { compilerOptions: { noEmit: false } }
          }
        ]
      });
  
      return config;
    }
  };
  
  module.exports = nextConfig;