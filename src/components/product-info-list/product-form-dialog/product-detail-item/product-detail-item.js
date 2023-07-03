import React from "react";
import { TextField, MenuItem, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DetailValue from "./detail-value";
import classes from '../../../dialogs/dialogs.module.css';

const ProductDetailItem = ({
    productDetail,
    detail,
    availableDetails,
    onChangeDetailId,
    onChangeDetailValue,
    onRemoveDetail
}) => {
    const shouldIncludeDetail = !!detail && availableDetails.every(d => d.id !== detail.id);
    const details = shouldIncludeDetail ? [ detail, ...availableDetails ] : availableDetails;
    
    return (
        <div className={classes.productDetailsContainer}>
            <TextField
                margin="dense"
                value={productDetail.detailId || ''}
                label="Detail Name"
                onChange={(e) => onChangeDetailId(e.target.value)}
                select
                className={classes.textFieldWrapper}
            >
                {
                    details.map(detail => (
                        <MenuItem key={`product_detail_select_detail_${detail.id}`} value={detail.id}>
                            {detail.name}
                        </MenuItem>
                    ))
                }
            </TextField>
            <DetailValue
                type={detail?.type}
                value={productDetail.value || ''}
                onChange={(value) => onChangeDetailValue(value)}
            />
            <IconButton
                onClick={() => onRemoveDetail(productDetail.detailId)}
                className={classes.deleteIcon}
            >
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

export default ProductDetailItem;