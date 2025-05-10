import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   output: 'standalone',
   images: {
      domains: ['cdn.rareblocks.xyz', 'unsplash.com','plus.unsplash.com','randomuser.me'], 
   },
};

export default nextConfig;
