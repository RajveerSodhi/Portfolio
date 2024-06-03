/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: `
                            default-src 'self';
                            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com;
                            style-src 'self' 'unsafe-inline';
                            img-src 'self' data:;
                            frame-src 'self' https://js.stripe.com http://localhost:3000;
                            connect-src 'self' https://api.stripe.com;
                        `.replace(/\s{2,}/g, ' ').trim()
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
