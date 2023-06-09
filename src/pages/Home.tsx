import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Home() {
  return (
    <>
      <div>This is the Home Page</div>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
}
