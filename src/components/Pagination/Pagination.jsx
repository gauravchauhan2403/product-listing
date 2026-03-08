import BackArrow from "../../assets/back.png"
import FrontArrow from "../../assets/right-arrow.png"
const Pagination = ({ total, limit, skip, setSkip }) => {

  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (page) => {
    const newSkip = (page - 1) * limit;
    setSkip(newSkip);
  };

  return (

    <div className="flex justify-center flex-wrap mt-8 gap-2">

      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="border px-2 py-2 rounded"
      >
        <span className="flex text-center align-bottom ">
          <img className="h-5 w-5 mt-0.5 mr-0.5" src={BackArrow} title="back arrow icon" />
          <p>Prev</p>
        </span>
      </button>

      {[...Array(totalPages)].map((_, index) => {

        const page = index + 1;

        return (

          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`border px-2 py-2 rounded ${
              currentPage === page ? "bg-blue-400" : ""
            }`}
          >
            {page}
          </button>

        );

      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="border px-2 py-2 rounded"
      >
        <span className="flex text-center align-bottom ">
          <p>Next</p>
          <img className="h-5 w-5 mt-0.5 ml-0.5" src={FrontArrow} title="back arrow icon" />
        </span>
      </button>

    </div>

  );
};

export default Pagination;