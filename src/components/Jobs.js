import Job from "../components/Job";
import data from "../assets/jobs.json";
const Jobs = () => {
  const number = 9;
  // const isBig = (number) => {
  //   if (number > 5) {
  //     return <p>C'est beaucoup</p>;
  //   } else {
  //     return <p>C'est peu</p>;
  //   }
  // };
  // if (number > 5) {
  //   console.log("C'est beaucoup");
  // } else {
  //   console.log("C'est peu");
  // }

  return (
    <div className="all-jobs container">
      {number > 5 ? <p>C'est beaucoup</p> : <p>C'est peu</p>}
      {/* {isBig(number)} */}
      {data.map((element) => {
        // console.log(element);
        return (
          <Job
            key={element.id}
            title={element.title}
            country={element.country}
            city={element.city}
            contractType={element.contractType}
            className={element.className}
          />
        );
      })}
    </div>
  );
};

export default Jobs;
