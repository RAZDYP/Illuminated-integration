// ICONS
import IlluminatedLogo from "/images/sidebar/illuminated-logo.png";
import SearchIcon from "/images/sidebar/search-icon.png";
import BarchartIcon from "/images/sidebar/bar-chart.png";
import FolderIcon from "/images/sidebar/folder-icon.png";
import UsersIcon from "/images/sidebar/users-icon.png";
import CartIcon from "/images/sidebar/cart-icon.png";
import FileIcon from "/images/sidebar/file-02-icon.png";
import ProfileIcon from "/images/sidebar/user-icon.png";
import SettingsIcon from "/images/sidebar/settings-04-icon.png";
import InfoIcon from "/images/sidebar/info-circle-icon.png";
import ProfileRoundedIcon from "/images/sidebar/user-circle-icon.png";
import LogOutIcon from "/images/sidebar/log-out-icon.png";

// ACCORDIAN
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";

// LIST
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-main-body">
        <div className="sidebar-header ">
          <img src={IlluminatedLogo} alt="Illuminated Logo" />
          <h3 className="m-0 sidebar-header-text">Illuminated</h3>
        </div>
        <div className="sidebar-search  w-100">
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            className="border-0  sidebar-search-text"
            style={{ outline: "none" }}
            placeholder="Search"
          />
        </div>
        <button className="sidebar-dashboard-button p-0">
          <img src={BarchartIcon} alt="Bar Chart Icon" />
          <p className="m-0">Dashboard</p>
        </button>
        <div>
          <AccordionGroup
            className="mb-2"
            size="lg"
            sx={{ maxWidth: 400 }}
            transition={{
              initial: "0.3s ease-out",
              expanded: "0.2s ease",
            }}
          >
            <Accordion className="sidebar-accordian border-0">
              <AccordionSummary className="p-0">
                <div className="sidebar-accordian-button">
                  <img src={FolderIcon} alt="Folder Icon" />
                  <p className="m-0 sidebar-accordian-button-text">Projects</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItem>
                    <ListItemButton>
                      <p className="sidebar-accordian-list-items-text">
                        Overview
                      </p>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <p className="sidebar-accordian-list-items-text">Items</p>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <p className="sidebar-accordian-list-items-text">
                        Locations
                      </p>
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion className="sidebar-accordian border-0">
              <AccordionSummary className="p-0">
                <div className="sidebar-accordian-button">
                  <img src={UsersIcon} alt="Folder Icon" />
                  <p className="m-0 sidebar-accordian-button-text">Stocks</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItem>
                    <ListItemButton>
                      <p className="sidebar-accordian-list-items-text">
                        Overview
                      </p>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <p className="sidebar-accordian-list-items-text">Items</p>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <p className="sidebar-accordian-list-items-text">
                        Locations
                      </p>
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion className="sidebar-accordian border-0">
              <AccordionSummary className="p-0">
                <div className="sidebar-accordian-button">
                  <img src={UsersIcon} alt="Folder Icon" />
                  <p className="m-0 sidebar-accordian-button-text">Clients</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItem>
                    <ListItemButton>
                      <p className="sidebar-accordian-list-items-text">
                        Overview
                      </p>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <p className="sidebar-accordian-list-items-text">Items</p>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <p className="sidebar-accordian-list-items-text">
                        Locations
                      </p>
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion className="sidebar-accordian border-0">
              <AccordionSummary className="p-0">
                <div className="sidebar-accordian-button">
                  <img src={CartIcon} alt="Folder Icon" />
                  <p className="m-0 sidebar-accordian-button-text">
                    Purchasing
                  </p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItem>
                    <ListItemButton>
                      <p className="sidebar-accordian-list-items-text">
                        Overview
                      </p>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <p className="sidebar-accordian-list-items-text">Items</p>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <p className="sidebar-accordian-list-items-text">
                        Locations
                      </p>
                    </ListItemButton>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>
        </div>
        <button className="sidebar-dashboard-button p-0">
          <img src={FileIcon} alt="Bar Chart Icon" />
          <p className="m-0">Reporting</p>
        </button>
      </div>
      <div className="sidebar-footer-body">
        <button className="sidebar-dashboard-button p-0">
          <img src={ProfileIcon} alt="Bar Chart Icon" />
          <p className="m-0">Profile</p>
        </button>
        <button className="sidebar-dashboard-button p-0">
          <img src={SettingsIcon} alt="Bar Chart Icon" />
          <p className="m-0">Settings</p>
        </button>
        <button className="sidebar-dashboard-button p-0">
          <img src={InfoIcon} alt="Bar Chart Icon" />
          <p className="m-0">Help</p>
        </button>
        <hr style={{ backgroundColor: "#EAECF0" }}></hr>
        <button className="sidebar-footer-bottom w-100">
          <img src={ProfileRoundedIcon} alt="Profile Rounded Icon" />
          <div className="sidebar-footer-button-text">
            <p className="m-0">David Hockenberry</p>
            <small className="opacity-75">dh@dummymail.com</small>
          </div>
          <img src={LogOutIcon} alt="Log Out Icon" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
