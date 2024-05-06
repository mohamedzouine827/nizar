import { MetadataRoute } from "next";

export default function robots() : MetadataRoute.Robots {
    const url = "https://nizar-abdelkarim.vercel.app"
    return {
        rules: {
            userAgent : "*",
            allow : ["/", "/about", "/work", "/contact"],
            disallow : [],
        },
        sitemap : `${url}/sitemap.xml`,
    }
}