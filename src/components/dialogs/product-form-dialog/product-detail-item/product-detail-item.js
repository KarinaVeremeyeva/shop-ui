import React from "react";
import { Checkbox, TextField, MenuItem, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { detailTypes } from "./detailTypes";
import classes from '../../dialogs.module.css';

const DetailValue = ({ type, value, onChange }) => {
    switch(type) {
        case detailTypes.STRING:
            return (
                <TextField
                    margin="dense"
                    type="text"
                    value={value}
                    onChange={(e) => onChange(`${e.target.value}`)}
                />
            );
        case detailTypes.NUMBER:
            return (
                <TextField
                    margin="dense"
                    type="number"
                    value={value}
                    onChange={(e) => onChange(`${e.target.value}`)}
                />
            );
        case detailTypes.BOOLEAN:
            const booleanValue = value.toLowerCase() === 'true';
            return (
                <Checkbox
                    checked={booleanValue}
                    onChange={(e) => onChange(`${e.target.checked}`)}
                />
            );
        default:
            return null;
    };
};

const ProductDetailItem = ({
    productDetail,
    index,
    detail,
    availableDetais,
    onChangeDetailId,
    onChangeDetailValue,
    onRemoveDetail }) => {
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
                {productDetail.detailId && (
                    <MenuItem
                        key={`product_detail_select_detail_${productDetail.detailId}`}
                        value={productDetail.detailId}
                    >
                        {detail?.name}
                    </MenuItem>
                )}
                {
                    availableDetais.map(detail => (
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