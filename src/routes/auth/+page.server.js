import {
	FACEBOOK_CLIENT_ID,
	FACEBOOK_CLIENT_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET
} from '$env/static/private';

export function load() {
	console.log(FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET);
	console.log(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
}