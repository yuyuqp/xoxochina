// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserSite = owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
	site: process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : 'https://example.com'),
	base: process.env.BASE_PATH ?? (repo && !isUserSite ? `/${repo}/` : '/'),
});
