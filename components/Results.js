import Thumbnail from "./Thumbnail"


const Results = ({results}) => {
    return (
      <div className="px-5 m-10 sm:grid md:grid-cols-2 2xl:grid-cols-3 3xl:flex flex-wrap align-center justify-center">
        {results.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </div>
    );
}

export default Results
