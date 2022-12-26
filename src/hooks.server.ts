/* eslint-disable */
// @ts-nocheck
import { SvelteKitAuth } from '@auth/sveltekit';
import FacebookProvider from '@auth/core/providers/facebook';
import GoogleProvider from '@auth/core/providers/google';

import {
	FACEBOOK_CLIENT_ID,
	FACEBOOK_CLIENT_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	AUTH_SECRET
} from '$env/static/private';

export const handle = SvelteKitAuth({
	providers: [
		FacebookProvider({
			clientId: FACEBOOK_CLIENT_ID,
			clientSecret: FACEBOOK_CLIENT_SECRET
		}),
		GoogleProvider({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		})
		// Google -> set header: Referrer-Policy: no-referrer-when-downgrade
	],
	secret: AUTH_SECRET
});
