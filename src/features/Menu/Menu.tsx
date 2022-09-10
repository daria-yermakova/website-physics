import '../../styles/styles.scss';
import React from "react";
import {Button, Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function MainMenu() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className="header-menu">
                <div className="button-menu">
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                ABOUT
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose} component={Link} to="/education">Education</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/employment">Employment</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/awards">Awards</MenuItem>
                                <MenuItem onClick={handleClose} component={Link} to="/reviewer">Reviewer</MenuItem>
                            </Menu>
                </div>
                <div className="button-menu">
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        RESEARCH PROJECTS
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose} component={Link} to="/surfaceWaves">Surface waves</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/polarization">Polarization degree of freedom</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/metasurfaces">Metasurfaces on fiber tip</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/interaction">Spin-orbit interactions on light</MenuItem>
                    </Menu>
                </div>
                <div className="button-menu">
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        component={Link}
                        to="/publication"
                    >
                            PUBLICATIONS
                    </Button>
                </div>
                <div className="button-menu">
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        TALKS
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose} component={Link} to="/conferences">Conferences</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/seminars">Seminars</MenuItem>
                    </Menu>
                </div>
                <div className="button-menu">
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        component={Link}
                        to="/publication"
                    >
                        ORGANIZERS
                    </Button>
                </div>
            </div>
            </>
    );
};