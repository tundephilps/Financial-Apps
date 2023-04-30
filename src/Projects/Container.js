import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import profit from "../images/profit.png";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import LaunchIcon from "@mui/icons-material/Launch";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { Link } from "react-router-dom";
const Container = () => {
  const data = [
    {
      Img: require("../images/profit.png"),
      type: "Enterprise App",
      name: "Profit Margin Calculator",
      description:
        "A Profit Margin Calculator that comes with different color themes and Dark Mode.....",
      Applink: "https://profit-margin-calculator-27dc3.web.app/",
      Repo: "https://github.com/tundephilps/Profit-Margin-Calculator",
    },

    {
      Img: require("../images/invoicemaker.png"),
      type: "Software As a Service",
      name: "Invoice Maker",
      description:
        "A Software that makes invoices for transactions, add clients to a database, and allows users to add products,",
      Applink: "https://invoice-maker-iota.vercel.app/",
      Repo: "https://github.com/tundephilps/Invoice-Maker",
    },
    {
      Img: require("../images/POS.png"),
      type: "Software As a Service",
      name: "Point Of Sales System",
      description:
        "A POS System that allows Merchants print receipts after good have been solved ",
      Applink: "https://pos-zeta.vercel.app/",
      Repo: "https://github.com/tundephilps/POS-System",
    },
    {
      Img: require("../images/stock.png"),
      type: "Enterprise App",
      name: "Stock Market Traker",
      description:
        "An App that allows users get access to information about each company on the stock market",
      Applink: "https://stock-app-ecru.vercel.app/",
      Repo: "https://github.com/tundephilps/Stock-Market-App",
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" bg-[#1b1b1b] h-[120vh]">
      <div class="grid grid-cols-3 gap-4">
        {data.map((value, index) => {
          return (
            <div
              class="col-span-1  flex-col justify-center bg-none rounded-2xl shadow-xl shadow-slate-300/60 h-90"
              key={index}
            >
              <img
                class="aspect-video w-full h-45 rounded-t-2xl object-cover object-center"
                src={value.Img}
              />

              <div class="p-4">
                <small class="text-blue-400 text-xs">{value.type}</small>
                <h1 class="text-2xl font-medium text-slate-600 pb-2">
                  {value.name}
                </h1>
                <p class="text-sm tracking-tight font-light text-slate-400 leading-6">
                  {value.description}
                </p>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  sx={{ marginLeft: "90%" }}
                >
                  <MoreVertIcon className="text-white cursor-pointer" />
                </IconButton>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <Paper
                    sx={{
                      width: 320,
                      backgroundColor: "none",
                      maxWidth: "full",
                    }}
                  >
                    <MenuList>
                      <a href={value.Applink}>
                        {" "}
                        <MenuItem>
                          <ListItemIcon>
                            <LaunchIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText>Launch App</ListItemText>
                        </MenuItem>
                      </a>
                      <a href={value.Repo}>
                        <MenuItem>
                          <ListItemIcon>
                            <GitHubIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText>Visit Github Repo</ListItemText>
                        </MenuItem>
                      </a>
                      <Divider />
                      <MenuItem>
                        <ListItemIcon>
                          <LoyaltyIcon fontSize="small" />
                        </ListItemIcon>
                        <Link to="/Pricing">
                          {" "}
                          <ListItemText>Subscribe Full Version</ListItemText>
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </Menu>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
