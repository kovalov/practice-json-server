import { Pagination } from "./Pagination";

export const List = ({ users, numberOfPages, currentPage, setCurrentPage }) => {
  return (
    <main className="main">
      <div className="main__container container">
        <ul className="list">
          {users.map((item) => (
            <li key={item.id} className="list__item">
              <dl className="inner-list">
                <div className="inner-list__item">
                  <dt className="inner-list__title">Name:</dt>
                  <dd className="inner-list__description">{item.name}</dd>
                </div>
                <div className="inner-list__item">
                  <dt className="inner-list__title">Email:</dt>
                  <dd className="inner-list__description">{item.email}</dd>
                </div>
                <div className="inner-list__item">
                  <dt className="inner-list__title">Tel:</dt>
                  <dd className="inner-list__description">{item.phone}</dd>
                </div>
              </dl>
              {/* <div className="controls">
                <button className="controls__button">Delete</button>
              </div> */}
            </li>
          ))}
        </ul>
        <Pagination
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </main>
  );
};
