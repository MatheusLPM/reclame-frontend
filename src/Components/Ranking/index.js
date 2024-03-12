import React, { useState, useRef } from "react";

import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

import { StyledBodyRanking } from "./style";
import { StyledInfoArticle } from "./style";

import RankingHeader from "./RankingHeader";
import BodyInfo from "./BodyInfo";
import EmptyBody from "./EmptyBody";

export default function Ranking(props) {


    const carousel = useRef();
    const isEmpty = props.bodyInfoList.length === 0;

    const handleNext = () => {

        carousel.current.scrollLeft += (carousel.current.offsetWidth + 16);

    }

    const handlePrev = () => {

        carousel.current.scrollLeft -= (carousel.current.offsetWidth + 16);
    };

    return (
        <StyledBodyRanking>

            <RankingHeader

                title={props.title}
                subtitle={props.subtitle}
                buttonNext={handleNext}
                buttonPrev={handlePrev}

            />
            <StyledInfoArticle ref={carousel} isEmpty={isEmpty}>
                {(props.bodyInfoList.length != 0) ?
                    (props.bodyInfoList.slice(0, 15).map((info, index) => (
                        <Link to={`/perfil/empresa/${info.id}`} style={{ textDecoration: 'none' }} key={index}>
                            <BodyInfo
                                key={index}
                                nome={info.nome}
                                nota={info.media}
                                status={info.status}
                                perfil={info.perfil}
                            />
                        </Link>
                    ))) : <EmptyBody category={props.category} />}
            </StyledInfoArticle>


        </StyledBodyRanking>
    );

}


Ranking.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}