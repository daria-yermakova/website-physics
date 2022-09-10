import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

export default function Awards() {

    function createData(
        awards: string,
        remarks: string,
        links: string,
    ) {
        return {awards, remarks, links};
    }

    const rows = [
        createData('', '2020', ''),
        createData('IEEE Photonics Society Graduate Student Scholarship', '10 Phd students around the world', 'https://www.photonicssociety.org/awards/graduate-student-scholarship'),
        createData('', '2019', ''),
        createData('Scholarships of the Russian Federation Government', '14', '14'),
        createData('Individual grant PhD Student" from the Foundation for the Advancement of Theoretical Physics and Mathematics "BASIS"', '15', '15' ),
        createData('Best Student Paper Award, SPIE Optics+Optoelectronics 2017', '15', '15' ),
        createData('SPIE Travel Scholarship', '15', '15' ),
        createData('First prize in the "Nano and Metamaterials Section", I International Young', '15', '15' ),
        createData('Scientists Forum on Applied Physics and Engineering', '15', '15' ),
        createData('The best Master thesis of ITMO University', '16', '16'),
        createData('The best presentation (2nd prize) at the young scientists’ section, International Winter School on Physics of Semiconductors', '16', '16'),
        createData('Award for students in Theoretical Physics from "Dynasty" Foundation', '16', '16'),
        createData('Scholarship of the International Research Centre for Nanophotonics and Metamaterials', '16', '16'),
        createData('Scholarship of the President of Ukraine', '16', '16'),
        createData('Scholarship of Kharkiv Mayor', '16', '16'),
        createData('Gingerbread', '16', '16'),
    ];

    return (
        <>
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Awards</TableCell>
                                <TableCell align="right">Remarks</TableCell>
                                <TableCell align="right">Links</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.awards}>
                                    <TableCell component="th" scope="row">
                                        {row.awards}
                                    </TableCell>
                                    <TableCell align="right">{row.remarks}</TableCell>
                                    <TableCell align="right">{row.links}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}