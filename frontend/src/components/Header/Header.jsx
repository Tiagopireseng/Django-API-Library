import React from "react";

import { Typography, AppBar, Toolbar, Box, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { StyledInputBase } from "./style";
import BookRounded from "@material-ui/icons/BookRounded";

import useStyles from "./style";

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Box display="flex">
                    <div style={{ paddingRight: "20px" }}>
                        <BookRounded />
                    </div>
                    <Typography variant="h5" className={classes.title}>
                        Django Library
                    </Typography>
                </Box>
                <Box display="flex">
                    {/* <Typography variant="h6" className={classes.title}>
                        Explore
                    </Typography> */}
                    {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <StyledInputBase placeholder="Search..." />
                    </div>
                    {/* </Autocomplete> */}
                    <Button>Search</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
