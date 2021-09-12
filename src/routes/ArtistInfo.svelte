<script lang="ts">
  import { Container, Col, Row } from "sveltestrap";
  import { useParams } from "svelte-navigator";

  import { user } from "../stores/userStore";
  import { getArtistById } from "../api/artist";

  const params = useParams();
  const artist = getArtistById($params.id, $user);
</script>

<Container>
  {#if $user}
    <Row class="d-flex p-2">
      <Col xs="6">
        {#await artist}
          <p>loading...</p>
        {:then res}
          <Row>
            {#if res.data.name}
              <img
                class="rounded-circle"
                src={res.data.images[0].url}
                height={res.data.images[0].height}
                width={res.data.images[0].width}
                alt={`Picture of ${res.data.name}`}
              />
            {/if}
            <p>{res.data.name}</p>
            <p>Genres: {res.data.genres.join(", ")}</p>
          </Row>
        {/await}
      </Col>
    </Row>
  {:else}
    <p>
      You are not logged in. Click on the login button to sign in with Spotify.
    </p>
  {/if}
</Container>
