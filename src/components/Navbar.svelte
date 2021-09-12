<script lang="ts">
  import { Link } from "svelte-navigator";
  import { Navbar, Button } from "sveltestrap";

  import { user } from "../stores/userStore";
  import { redirectToSpotifyOAuth } from "../api/auth";

  const handleLogout = () => user.set(null);
</script>

<Navbar>
  <Link to="/">Following</Link>
  <Link to="/browse">New Releases</Link>

  {#if $user}
    <Button on:click={handleLogout}>Logout</Button>
  {:else}
    <Button on:click={redirectToSpotifyOAuth}>Login</Button>
  {/if}
</Navbar>
