import React from 'react';
import {useSelector} from "react-redux";
import {Backdrop, CircularProgress} from "@mui/material";

export default function Loading() {
    const { requicoesPendentes } = useSelector(state => state.loading);

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={requicoesPendentes > 0}
            onClick={requicoesPendentes === 0}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
