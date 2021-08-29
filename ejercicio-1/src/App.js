import React from "react";
import {
    Paper,
    Grid,
    CssBaseline,
    Container,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    Button,
    Typography,
} from "@material-ui/core";
import "./App.css";
import { makeStyles, createTheme } from "@material-ui/core/styles";
const theme = createTheme({
    palette: {
        primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
});
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "left",
        color: theme.palette.text.primary,
    },
}));

function CenteredGrid() {
    const classes = useStyles(theme);
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <div className={classes.root}>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={12}></Grid>

                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                className={classes.title}
                                align="left"
                            >
                                Lista de compras
                            </Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                                fullWidth
                            >
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Agregar elemento
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={age}
                                    onChange={handleChange}
                                    label="Agregar elemento"
                                    defaultValue={10}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10} selected>
                                        Ten
                                    </MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={5}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                className={classes.margin}
                                fullWidth={true}
                            >
                                Agregar
                            </Button>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
}

function App() {
    return (
        <div className="App">
            <CenteredGrid />
        </div>
    );
}

export default App;
