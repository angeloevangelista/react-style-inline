import { useHover } from "./hooks/useHover";

function App() {
  const HoverH1 = useHover({
    defaultStyle: { color: "red" },
    hoverStyle: { color: "#7159c1" },
    tagName: "h1",
  });

  const Box = useHover({
    defaultStyle: {
      width: 60,
      height: 60,
      background: "#7159c1",
      borderRadius: 4,
      margin: 50,
      transition: "all linear 4s",
    },
    hoverStyle: { transform: "scale(1.2)" },
    tagName: "div",
  });

  return (
    <div className="App">
      <HoverH1>Heello</HoverH1>

      <Box />
    </div>
  );
}

export default App;
