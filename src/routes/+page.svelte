<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';

	if ($page.data.session) console.dir($page.data.session);

	// $page.data.session:
	// 	{
	//     "user": {
	//         "name": "Me",
	//         "email": "me@yopmail.com",
	//         "image": "https://lh3.googleusercontent.com/a/AE...ndkI3om_5Wdw=s96-c"
	//     },
	//     "expires": "2023-01-25T15:29:06.860Z"
	// }
</script>

<p>
	{#if Object.keys($page.data.session || {}).length}
		{#if $page.data.session?.user?.image}
			<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session?.user?.email || $page.data.session?.user?.name}</strong>
		</span>
		<button on:click={() => signOut()} class="button">Sign out</button>
	{:else}
		<span class="notSignedInText">You are not signed in</span>
		<button on:click={() => signIn('google')}>Sign In with Google</button>
		<button on:click={() => signIn('facebook')}>Sign In with Facebook</button>
	{/if}
</p>
