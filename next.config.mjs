import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Otimização para evitar FOUC (Flash of Unstyled Content) em dev
    transpilePackages: ["@vanilla-extract/css"],
}

export default withVanillaExtract(nextConfig)
