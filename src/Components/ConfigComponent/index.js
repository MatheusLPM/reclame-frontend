import React from "react";

import { StyledConfig } from "./style";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


export default function ConfigComponent(props) {

    return (
        <StyledConfig>
            <Accordion className="accordion">
                <AccordionSummary
                    expandIcon={props.expandIcon}
                    aria-controls="panel1-content"
                    className="summary"
                >
                    <p className="summaryIcon">{props.summaryIcon}</p>
                    <p>{props.summaryTitle}</p>
                </AccordionSummary>
                <AccordionDetails className="details">
                    {props.children}
                </AccordionDetails>
            </Accordion>
        </StyledConfig>
    );
}