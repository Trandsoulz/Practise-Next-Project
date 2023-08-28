/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        formats : ['image/avif', 'image/webp'],
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'images.dog.ceo',
                port : '',
            }
        ]
    }
}

module.exports = nextConfig


// domains : ['images.dog.ceo']