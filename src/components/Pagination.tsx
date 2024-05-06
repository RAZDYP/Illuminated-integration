import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

function PaginationNew() {
  let accumulatedOutput = [];
  const List = styled("ul")({
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  });
  const { items } = usePagination({
    count: 10,
  });
  return (
    <nav className="pagination-bar">
      <List className="d-flex align-items-center justify-content-between">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;
          let divClose = false;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = (
              <p className="fw-bold m-0 text-center" key={index}>
                ...
              </p>
            );
            accumulatedOutput.push(<li key={index}>{children}</li>);
          } else if (type === "page") {
            children = (
              <button
                type="button"
                key={index}
                className={
                  selected ? "pagination-button-selected" : "pagination-buttons"
                }
                {...item}
              >
                {page}
              </button>
            );
            if (page === 10) {
              divClose = true;
            }
            accumulatedOutput.push(<li key={index}>{children}</li>);
            if (divClose) {
              return (
                <div className="d-flex w-25 justify-content-between">
                  {accumulatedOutput}
                </div>
              );
            }
          } else {
            children = (
              <button
                key={index}
                className="stock-next-previous-btn"
                type="button"
                {...item}
              >
                {type}
              </button>
            );
            return (
              <div>
                <li key={index}>{children}</li>
              </div>
            );
          }
        })}
      </List>
    </nav>
  );
}

export default PaginationNew;
