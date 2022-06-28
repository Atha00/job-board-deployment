import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
// import data from "./assets/jobs.json";

// console.log(data);

function App() {
  // const word = "Bonjour"
  // const tab = [<p>{word}</p>, <p>Bonjour</p>, <p>Bonjour</p>];

  // const array1 = [1, 4, 9, 16];
  // const newTab = array1.map((x) => x * 2);

  // console.log(newTab); // [2, 8, 18, 32]

  return (
    <>
      <Header title="The Job Board" />
      <Jobs />
      <Footer />
      {/* {newTab.map((element) => {
        return <p>{element}</p>;
      })} */}
      {/* {data.map((job, index) => {
        // console.log(job);
        // console.log(index);
        return (
          <div key={index}>
            <p>{job.title}</p>
            <p>{job.contractType}</p>
          </div>
        );
      })} */}
    </>
  );
}

export default App;
