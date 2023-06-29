import React from "react";
import { TextField, MenuItem, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DetailValue from "./detail-value";
import classes from '../../../dialogs/dialogs.module.css';

const ProductDetailItem = ({
    productDetail,
    index,
    detail,
    availableDetais,
    onChangeDetailId,
    onChangeDetailValue,
    onRemoveDetail
}) => {
    const details = detail ? [ detail, ...availableDetais ] : availableDetais;

    return (
        <div key={`product_detail_${index}`} className={classes.productDetailsContainer}>
            <TextField
                margin="dense"
                value={productDetail.detailId || ''}
                label="Detail Name"
                onChange={(e) => onChangeDetailId(index, e.target.value)}
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
                onChange={(value) => onChangeDetailValue(index, value)}
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