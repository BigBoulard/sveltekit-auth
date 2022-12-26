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
	secret: AUTH_SECRET,
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
	// see https://next-auth.js.org/configuration/providers/oauth#allowdangerousemailaccountlinking-option
	allowDangerousEmailAccountLinking: true,
	// see https://next-auth.js.org/configuration/callbacks
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			return true;
		},
		async redirect({ url, baseUrl }) {
			return baseUrl;
		},
		async session({ session, token, user }) {
			return session;
		},
		async jwt({ token, user, account, profile }) {
			return token;
		}
	}
});
