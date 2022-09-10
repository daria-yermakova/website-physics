import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import '../../styles/styles.scss';
import React from "react";

export default function Aside() {
    return (
        <>
            <div className="aside">
                <div className="button-menu">
                    <Button>
                        <Link to='/main'>
                            ABOUT
                        </Link>
                    </Button>
                </div>
                <div className="button-menu">
                    <Button>
                        <Link to='/button'>
                            RESEARCH PROJECTS
                        </Link>
                    </Button>
                </div>
                <div className="button-menu">
                    <Button>
                        <Link to='/awards'>
                            PUBLICATIONS
                        </Link>
                    </Button>
                </div>
                <div className="button-menu">
                    <Button>
                        <Link to='/awards'>
                            ORGANIZERS
                        </Link>
                    </Button>
                </div>
                <div className="button-menu">
                    <Button>
                        <Link to='/awards'>
                            PHOTONICS FOR EVERYONE
                        </Link>
                    </Button>
                </div>
                <div className="button-menu">
                    <Button>
                        <Link to='/awards'>
                            COLLABORATION
                        </Link>
                    </Button>
                </div>
                <div className="button-menu">
                    <Button>
                        <Link to='/awards'>
                            USEFUL MATERIALS
                        </Link>
                    </Button>
                </div>
                <div className="button-menu">
                    <Button>
                        <Link to='/awards'>
                            CONTACTS
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    );
};