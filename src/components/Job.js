const Job = ({ title, country, city, contractType, className }) => {
  // console.log(props);
  // const { title, country, city, contractType, className } = props; // destructuring
  return (
    <div className={`job ${className}`}>
      <h3>{title}</h3>
      {/* {title ? <h3>{title}</h3> : <h3>Pas de titre de job</h3>} */}
      {/* {title && <h3>{title}</h3>} */}
      <div>
        <span>{contractType}</span>
        <span> - </span>
        <span>{country}</span>
        <span> - </span>
        <span>{city}</span>
      </div>
    </div>
  );
};

export default Job;
