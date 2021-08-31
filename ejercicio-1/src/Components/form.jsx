import React, { useState } from "react";
import {
    Grid,
    Container,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    Button,
    Typography,
    List,
} from "@material-ui/core";
import useStyles from "./theme";
import Lista from "./list";
const Form = (theme) => {
    const classes = useStyles(theme);
    const [products, setProduct] = useState([
        { id: 1, name: "Manzana", price: 0.75, amount: 1 },
        { id: 2, name: "Pera", price: 0.65, amount: 1 },
        { id: 3, name: "Uvas", price: 1.25, amount: 1 },
        { id: 4, name: "Melones", price: 2, amount: 1 },
        { id: 5, name: "Mangos", price: 0.5, amount: 1 },
        { id: 6, name: "Tomates", price: 2.5, amount: 1 },
        { id: 7, name: "Chiles", price: 0.5, amount: 1 },
        { id: 8, name: "Cebollas", price: 0.35, amount: 1 },
        { id: 9, name: "Naranjas", price: 0.1, amount: 1 },
        { id: 10, name: "Mandarinas", price: 0.05, amount: 1 },
    ]);
    const [buyProducts, setBuyProducts] = useState([]);
    const [selectProduct, setSelectProduct] = useState("");
    const [total, setTotal] = useState(0);
    const handleChange = (e) => {
        setSelectProduct(e.target.value);
    };
    const modifybuyProduct = (e) => {
        if (e?.target?.value && e?.target?.id && e?.target?.value > 0) {
            let id = e.target.id || 0;
            id = parseInt(id);
            let i, Element;
            buyProducts.forEach((element, index) => {
                if (element.id === id) {
                    Element = element;
                    i = index;
                }
            });
            Element.amount = e.target.value;

            const newBuyProducts = [...buyProducts];
            newBuyProducts.splice(i, 1, Element);
            setBuyProducts(newBuyProducts);
            setTotal(getTotal);
        }
    };
    const handleClick = (e) => {
        if (selectProduct || selectProduct !== "") {
            let i;
            products.forEach((element, index) => {
                if (element.id === selectProduct) {
                    setBuyProducts([...buyProducts, element]);
                    setTotal(total + element.price * element.amount);

                    i = index;
                }
            });
            const newProducts = [...products];
            newProducts.splice(i, 1);
            setProduct(newProducts);
            setSelectProduct("");
        }
    };
    const getTotal = () => {
        if (buyProducts.length > 0) {
            let count = 0;
            buyProducts.forEach((element) => {
                count += element.amount * element.price;
            });
            return count;
        } else return 0;
    };
    const deleteProduct = (id) => {
        if (id) {
            let i;
            buyProducts.forEach((element, index) => {
                if (element.id === id) {
                    setProduct([...products, element]);
                    setTotal(total - element.price * element.amount);

                    i = index;
                }
            });
            const newBuyProducts = [...buyProducts];
            newBuyProducts.splice(i, 1);
            setBuyProducts(newBuyProducts);
        }
    };

    return (
        <Container maxWidth="lg">
            <div className={classes.root}>
                <form>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={12}></Grid>

                        <Grid item xs={12} xl={10}>
                            <Typography
                                variant="h4"
                                className={classes.title}
                                align="left"
                            >
                                Lista de compras
                            </Typography>
                        </Grid>
                        <Grid item xs={8} xl={7}>
                            <FormControl
                                className={classes.formControl}
                                fullWidth
                            >
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Producto
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={selectProduct}
                                    onChange={handleChange}
                                    label="Agregar elemento"
                                >
                                    {products.map((product) => (
                                        <MenuItem
                                            key={product.id}
                                            value={product.id}
                                        >
                                            {product.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="medium"
                                className={classes.margin}
                                fullWidth={true}
                                onClick={handleClick}
                            >
                                Agregar
                            </Button>
                        </Grid>

                        <Grid item xs={12}></Grid>
                    </Grid>
                </form>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item md={8} xs={12} xl={7}>
                        <div className={classes.root}>
                            <List dense={false}>
                                {buyProducts.map((value, index) => (
                                    <Lista
                                        id={value.id}
                                        name={value.name}
                                        key={index}
                                        deleteProduct={deleteProduct}
                                        price={value.price}
                                        classes={classes}
                                        amount={value.amount}
                                        modifybuyProduct={modifybuyProduct}
                                    />
                                ))}
                            </List>
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography
                            variant="h4"
                            className={classes.title}
                            align="right"
                            gutterBottom={true}
                        >
                            Total : ${total.toFixed(2)}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};
export default Form;
