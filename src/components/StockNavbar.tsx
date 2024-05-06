// ICONS
import SearchIcon from "/images/sidebar/search-icon.png";
import DownArrowIcon from "/images/stock-navbar/chevron-down.png";
import PlusCircleIcon from "/images/stock-navbar/plus-circle.png";
import ColumnIcon from "/images/stock-navbar/columns-03.png";

// MATERIAL UI
import Autocomplete from "@mui/joy/Autocomplete";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];
function StockNavbar() {
  return (
    <div className="stock-navbar w-100">
      <div className="col-md-7 stock-navbar-left-div">
        <div className="sidebar-search mb-0 col-md-4 ">
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            className="border-0  sidebar-search-text"
            style={{ outline: "none" }}
            placeholder="Search items"
          />
        </div>
        <div className="col-md-2">
          <button className="w-75 stock-navbar-filter-button">
            <p className="m-0">Filters</p>
            <img src={DownArrowIcon} alt="Down Arrow Icon" />
          </button>
        </div>
        <div className="col-md-4">
          <Autocomplete
            style={{ fontSize: "16px" }}
            size="md"
            className="stock-navbar-search-dropdown"
            multiple
            id="tags-default"
            placeholder="Search filters"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={[top100Films[2]]}
          ></Autocomplete>
        </div>
      </div>
      <div className="col-md-4 stock-navbar-right-div">
        <div className="col-md-3">
          <button className=" w-100 stock-navbar-add-item-button">
            <img src={PlusCircleIcon} alt="" />
            <p className="m-0">Add Item</p>
          </button>
        </div>
        <div className="col-md-3">
          <button className=" w-100 stock-navbar-filter-button">
            <p className="m-0">Item actions</p>
            <img src={DownArrowIcon} alt="Down Arrow Icon" />
          </button>
        </div>

        <div className="">
          <button className="stock-navbar-column-button">
            <img src={ColumnIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StockNavbar;
