/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol:"https",
                hostname:"steadfast.com.bd"
            }
        ] 

        
      },
};

export default nextConfig;
