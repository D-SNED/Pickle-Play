import { useNavigate } from "react-router-dom";

const TournamentCard = ({ tournament }) => {
  const navigate = useNavigate();

  return (
    <div className="p-3">
      <div className="p-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src={tournament.location.picture_url}
            alt=""
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {tournament.name}
            </h5>
          </div>
          <div>
            <p className="mb-1 italic">
              {tournament.start_date} - {tournament.end_date}
            </p>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {tournament.description}
          </p>
          <button
            onClick={() => navigate(`${tournament.id}`)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C14533] rounded-lg hover:bg-[#d4402a]"
          >
            Details
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
