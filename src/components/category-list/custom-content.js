import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useTreeItem } from '@mui/lab';

const ROOT_NODE_KEY = 'root';

const CustomContent = React.forwardRef(function CustomContent(props, ref) {
    const {
        classes,
        className,
        label,
        nodeId,
        expansionIcon
    } = props;

    const {
        expanded,
        handleExpansion,
        preventSelection,
    } = useTreeItem(nodeId);

    const titleComponent = nodeId === ROOT_NODE_KEY 
        ? label
        : (
            <Link to={`/products/category/${nodeId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {label}
            </Link>
        );

    return (
        <div
            className={clsx(className, classes.root, {
                [classes.expanded]: expanded
            })}
            onMouseDown={preventSelection}
            ref={ref}
        >
            <div onClick={handleExpansion} className={classes.iconContainer}>
                {expansionIcon}
            </div>
            {titleComponent}
        </div>
    );
});

export default CustomContent;