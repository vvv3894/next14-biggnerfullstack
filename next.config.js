/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'http',
                hostname:"www.pexels.com"

            }
        ]
    }



}

module.exports = nextConfig
