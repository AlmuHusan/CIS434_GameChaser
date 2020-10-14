import React,{useState} from 'react';
import {Dialog, DialogContent, DialogTitle, Grid, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    }
}))

export function MButton(props) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}>
            {text}
        </MuiButton>
    )
}

const intV = {
    Game:'',
    Name:'',
    Size:'',
    Time:'',
    Note:'',
}

const KEYS= {
    GameInput: 'GameInput'
}

export function insertData(data) {
    let gName = getData();
    gName.push(data);
    localStorage.setItem(KEYS.GameInput, JSON.stringify(gName))
}


export function getData(data) {
    if (localStorage.getItem(KEYS.GameInput) == null)
        localStorage.setItem(KEYS.GameInput, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.GameInput));
}





export default function GAME(){

    const [values, setValues] = useState(intV);
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e =>{
            e.preventDefault()
        insertData(values)
        handleClose()
    }


    const [open, setOpen] = useState(false);
    const handleOpen = () =>{
        setOpen(true);
    };
    const handleClose = () =>{
        setOpen(false);
    }

    return(
        <>
            <MButton
                text = "Create"
                size =  "large"
                onClick = {handleOpen}
            />
              <Dialog open={open} maxwidth = "md">
            <DialogTitle>
                <div> CREATE A NEW SECTION </div>
            </DialogTitle>

            <DialogContent>
                 <form onSubmit={handleSubmit}>
            <Grid container>
                <Grid>
                    <TextField
                        id ="standard-basic"
                        label = "Game"
                        name= "Game"
                        value={values.Game}
                        onChange={handleInputChange}
                    />
                    <div/>
                    <TextField
                        id ="standard-basic"
                        label = "Name"
                        name= "Name"
                        value={values.Name}
                        onChange={handleInputChange}
                    />
                    <div/>
                    <TextField
                        id ="standard-basic"
                        label = "Size"
                        name= "Size"
                        value={values.Size}
                        onChange={handleInputChange}
                    />
                    <div/>
                    <TextField
                        id ="standard-basic"
                        label = "Time"
                        name= "Time"
                        value={values.Time}
                        onChange={handleInputChange}
                    />
                    <div/>
                    <TextField
                        id ="standard-basic"
                        label = "Note"
                        name = "Note"
                        value={values.Note}
                        onChange={handleInputChange}
                    />
                    <div/>
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button onClick={handleClose}>Close</Button>
                </Grid>
            </Grid>
        </form>


            </DialogContent>

            </Dialog>

        </>
    )
}