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
    <div className="stock-navbar">
      <div className="stock-navbar-left-div">
        <div className="sidebar-search  ">
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            className=" sidebar-search-text"
            style={{ outline: "none" }}
            placeholder="Search items"
          />
        </div>
        <div>
          <button className="stock-navbar-filter-button">
            <p className="font-inter-margin-0">Filters</p>
            <img src={DownArrowIcon} alt="Down Arrow Icon" />
          </button>
        </div>
        <div>
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
      <div className=" stock-navbar-right-div">
        <div>
          <button className="stock-navbar-add-item-button">
            <img src={PlusCircleIcon} alt="" />
            <p className="font-inter-margin-0">Add Item</p>
          </button>
        </div>
        <div>
          <button className="stock-navbar-filter-button">
            <p className="font-inter-margin-0">Item actions</p>
            <img src={DownArrowIcon} alt="Down Arrow Icon" />
          </button>
        </div>

        <div>
          <button className="stock-navbar-column-button">
            <img src={ColumnIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StockNavbar;
