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

// MATERIAL UI
import Box from "@mui/material/Box";

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ height: "100vh" }}>
      <div className="sidebar-main-body">
        <Box className="sidebar-header ">
          <img src={IlluminatedLogo} alt="Illuminated Logo" />
          <h3 className="sidebar-header-text">Illuminated</h3>
        </Box>
        <Box className="sidebar-search" sx={{ marginBottom: "24px" }}>
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            className="sidebar-search-text"
            placeholder="Search"
          />
        </Box>
        <button className="sidebar-dashboard-button">
          <img src={BarchartIcon} alt="Bar Chart Icon" />
          <p className="font-inter" style={{ marginBottom: "12px" }}>
            Dashboard
          </p>
        </button>
        <div>
          <AccordionGroup
            size="lg"
            sx={{ maxWidth: 400 }}
            transition={{
              initial: "0.3s ease-out",
              expanded: "0.2s ease",
            }}
          >
            <Accordion
              sx={{
                border: "none",
              }}
            >
              <AccordionSummary
                sx={{
                  padding: "0px",
                }}
              >
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
            <Accordion
              sx={{
                border: "none",
              }}
            >
              <AccordionSummary
                sx={{
                  padding: "0px",
                }}
              >
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
            <Accordion
              sx={{
                border: "none",
              }}
            >
              <AccordionSummary
                sx={{
                  padding: "0px",
                }}
              >
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
            <Accordion
              sx={{
                border: "none",
              }}
            >
              <AccordionSummary
                sx={{
                  padding: "0px",
                }}
              >
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
        <button className="sidebar-dashboard-button">
          <img src={FileIcon} alt="Bar Chart Icon" />
          <p className="font-inter">Reporting</p>
        </button>
      </div>
      <div className="sidebar-footer-body">
        <button className="sidebar-dashboard-button">
          <img src={ProfileIcon} alt="Bar Chart Icon" />
          <p className="font-inter">Profile</p>
        </button>
        <button className="sidebar-dashboard-button">
          <img src={SettingsIcon} alt="Bar Chart Icon" />
          <p className="font-inter">Settings</p>
        </button>
        <button className="sidebar-dashboard-button">
          <img src={InfoIcon} alt="Bar Chart Icon" />
          <p className="font-inter">Help</p>
        </button>
        <hr style={{ backgroundColor: "#EAECF0" }}></hr>
        <button className="sidebar-footer-bottom">
          <img src={ProfileRoundedIcon} alt="Profile Rounded Icon" />
          <div className="sidebar-footer-button-text">
            <p
              className="font-inter"
              style={{ margin: "0px", fontSize: "13px" }}
            >
              David Hockenberry
            </p>
            <small style={{ margin: "0px", opacity: "0.8" }}>
              dh@dummymail.com
            </small>
          </div>
          <img src={LogOutIcon} alt="Log Out Icon" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
