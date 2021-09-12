<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import { Styles } from "sveltestrap";

  import Navbar from "./components/Navbar.svelte";
  import Callback from "./routes/Callback.svelte";
  import Dev from "./routes/Dev.svelte";
  import Home from "./routes/Home.svelte";
  import Browse from "./routes/Browse.svelte";
  import ArtistInfo from "./routes/ArtistInfo.svelte";
</script>

<Router>
  <div>
    <Navbar />
    <Route path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/dev" component={Dev} />
    <Route path="/browse" component={Browse} />
    <Route path="/artist/:id" component={ArtistInfo} />
    <Route path="callback" component={Callback} />
  </div>
</Router>

<Styles />
