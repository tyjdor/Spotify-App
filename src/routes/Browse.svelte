<script lang="ts">
  import { Card, CardBody, Container, Col, Row } from "sveltestrap";

  import { user } from "../stores/userStore";
  import { getBrowse } from "../api/browse";
  import { navigate } from "svelte-navigator";
  // import ArtistCard from "src/components/ArtistCard.svelte";
  // import ArtistCards from "src/components/ArtistCards.svelte";
  // import App from "src/App.svelte";
  // import ArtistInfo from "./ArtistInfo.svelte";

  const albums = getBrowse($user);
</script>

{#if $user}
  <Row>
    <Col>
      {#await albums}
        <p>loading...</p>
      {:then albums}
        {#each albums as album}
          <Card on:click={() => navigate(`/artist/${album.artists[0].id}`)}>
            <CardBody class="cursor-pointer">
              {#if album.name}
                <Col xs="3">
                  <img
                    class="rounded-circle"
                    src={album.images[0].url}
                    height="50"
                    width="50"
                    alt={`Picture of ${album.name} `}
                  />
                </Col>
              {/if}
              <p>{album.name}</p>
            </CardBody>
          </Card>
        {/each}
      {/await}
    </Col>
  </Row>
{:else}
  <p>
    You are not logged in. Click on the login button to sign in with Spotify.
  </p>
{/if}
