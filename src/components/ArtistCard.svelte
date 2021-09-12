<script lang="ts">
  import { navigate } from "svelte-navigator";
  import { Card, CardBody, Row, Col } from "sveltestrap";

  import type { Artist } from "../models/artist";

  export let artist: Artist;
</script>

<Card on:click={() => navigate(`/artist/${artist.id}`)}>
  <CardBody>
    <Row>
      {#if artist.images}
        <Col xs="1">
          <img
            class="rounded-circle"
            src={artist.images[0].url}
            height="50"
            width="50"
            alt={`Picture of ${artist.name}`}
          />
        </Col>
      {/if}
      <Col xs="11">
        <p>{artist.name}</p>
        <p>Genres: {artist.genres.join(", ")}</p>
      </Col>
    </Row>
  </CardBody>
</Card>
