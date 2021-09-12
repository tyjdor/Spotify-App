<script lang="ts">
  import Artist from "./ArtistCard.svelte";
  import { user } from "../stores/userStore";
  import { getFollowedArtists } from "../api/follow";

  let followedArtists = getFollowedArtists($user);
</script>

{#await followedArtists}
  <p>loading...</p>
{:then artists}
  {#each artists as artist}
    <div class="mb-1">
      <Artist {artist} />
    </div>
  {/each}
{:catch err}
  <p>an error occured: {err}</p>
{/await}
