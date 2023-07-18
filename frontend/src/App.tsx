import "./App.css";
import GigsCard from "./components/GigsCard";

function App() {
  const DUMMY = {
    gigsTitle: "A React Page",
    gigDescription:
      "Provided with Design structure, Giggs requested to create the same with React",
    gigPrice: "300rs",
    postedBy: {
      name: "Eric Vone",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&w=1000&q=80",
    },
    gigImage:
      "https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124",
  };
  return (
    <p className="text-3xl">
      <GigsCard {...DUMMY} />
    </p>
  );
}

export default App;
