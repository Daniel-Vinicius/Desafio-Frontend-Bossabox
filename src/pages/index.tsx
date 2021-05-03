import { Container } from "./styles.home";

import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <>
      <Container>
        <header>
          <h1>VUTTR</h1>
          <h2>Very Useful Tools to remember</h2>
        </header>
        <SearchBar checkboxLabel="Search in tags only" />
      </Container>
    </>
  );
}
