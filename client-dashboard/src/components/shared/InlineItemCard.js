import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const InlineItemCard = ({ children }) => (
    <Box sx={{
        display: {
            xs: "flex",
            sm: "inline-block"
        },
        flexDirection: {
            xs: "column",
            sm: "unset"
        },
        ".MuiChip-root, .MuiButton-root": {
            m: "5px"
        }
    }}>
        {children}
    </Box>
);

InlineItemCard.propTypes = {
    children: PropTypes.node,
};

export default InlineItemCard;
