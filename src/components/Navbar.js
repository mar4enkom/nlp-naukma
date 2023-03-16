import React from "react";
import {AppBar, Chip, styled, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const StyledAppBar = styled(AppBar)({
    backgroundColor: "#fff",
});

const StyledTypography = styled(Typography)({
    flexGrow: 1,
    color: "#232323",
});

const StyledLink = styled(Typography)(({disabled}) => ({
    color: disabled ? "rgba(35,35,35,0.29)" : "rgba(35,35,35, 1)",
    marginRight: "70px",
    cursor: "pointer",
    pointerEvents: disabled && "none",
}))

function Navbar() {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <StyledTypography variant="h6">
                    <Link to="/">
                        NLP Homeworks
                    </Link>
                </StyledTypography>
                <Link to="/hw-1">
                    <StyledLink>HW 1</StyledLink>
                </Link>
                <StyledLink disabled>
                    HW 2 <Chip size="small" label="Coming Soon" color="primary" style={{marginLeft: "5px"}}/>
                </StyledLink>
                <StyledLink disabled>
                    HW 3 <Chip size="small" label="Coming Soon" color="primary" style={{marginLeft: "5px"}}/>
                </StyledLink>
            </Toolbar>
        </StyledAppBar>
    );
}

export default Navbar;