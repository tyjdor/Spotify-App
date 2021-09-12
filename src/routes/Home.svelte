<script lang="ts">
	import { Container, Col, Row } from 'sveltestrap';

	import { user } from '../stores/userStore';
	import Artists from '../components/ArtistCards.svelte';
</script>

<Container>

	{#if $user}
		<Row>
			<Col>
				<Artists />
			</Col>
		</Row>
	{:else}
		<p>You are not logged in. Click on the login button to sign in with Spotify.</p>
	{/if}

</Container>