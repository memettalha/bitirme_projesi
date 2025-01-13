
const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a
            href="#"
            className="flex items-center text-blue-500 justify-center px-3 h-8 ms-0 leading-tight"
          >
            <span className="sr-only"> &lt;</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>
        {[1, 2, 3, 4, 5].map((page, index) => (
          <li key={index}>
            <a
              href="#"
              aria-current={page === 3 ? 'page' : undefined}
              className={`flex items-center justify-center px-3 h-8 leading-tight  ${
                page === 3
                  ? 'z-10 text-blue-600  '
                  : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-blue-500 bg-white  rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">&gt;</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const PaginationLarge = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white"
          >
            <span className="sr-only">&lt;</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>
        {[1, 2, 3, 4, 5].map((page, index) => (
          <li key={index}>
            <a
              href="#"
              aria-current={page === 3 ? 'page' : undefined}
              className={`flex items-center justify-center px-4 h-10 leading-tight border ${
                page === 3
                  ? 'z-10 text-blue-600  bg-blue-500'
                  : 'text-gray-500 bg-white '
              }`}
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-whiterounded-e-lg"
          >
            <span className="sr-only">&gt;</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Paginations = () => {
  return (
    <div>
      <PaginationLarge/>
    </div>
  );
};

export default Paginations;
