<script lang="ts">
	import { onMount } from 'svelte';

	import { loginFromCode } from '../api/auth';

	const urlParams = new URLSearchParams(window.location.search);
	const code = urlParams.get('code');
	
	onMount(() => loginFromCode(code));
</script>

<p>loading...</p>
