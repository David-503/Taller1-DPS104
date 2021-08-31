import React from "react";
import {
    TextField,
    IconButton,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Box,
    ListItemSecondaryAction,
} from "@material-ui/core";
import { Delete, ArrowForwardIos } from "@material-ui/icons";
const Lista = ({
    id,
    name,
    price,
    classes,
    deleteProduct,
    amount,
    modifybuyProduct,
}) => {
    return (
        <ListItem divider={true} dense={true}>
            <ListItemAvatar>
                <ArrowForwardIos />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={"$" + (price * amount).toFixed(2)}
            />
            <form>
                <TextField
                    id={id + ""}
                    label="Cantidad"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={amount}
                    margin="dense"
                    size="small"
                    onChange={modifybuyProduct}
                />
            </form>
            <Box component="span" mr={4}></Box>

            <ListItemSecondaryAction>
                <IconButton
                    color="secondary"
                    aria-label="delete"
                    onClick={() => deleteProduct(id)}
                    className={classes.margin}
                >
                    <Delete fontSize="large" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};
export default Lista;
