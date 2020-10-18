import React,{useState} from 'react';
import {Dialog, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Button as MuiButton, makeStyles } from "@material-ui/core";
import {Box, Table} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        width:200
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
            size={size || "md"}
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
    Notes:'',
}

const {GameInput} = {
    GameInput: 'GameInput'
}

export function insertData(data) {
    let gName = getData();
    gName.push(data);
    localStorage.setItem(GameInput, JSON.stringify(gName))
}

export function Index() {
    if (localStorage.getItem(GameInput.Index) == null)
        localStorage.setItem(GameInput.Index, '0')
    var id = parseInt(localStorage.getItem(GameInput.Index))
    localStorage.setItem(GameInput.Index, (++id).toString())
    return id;
}


export function getData() {
    if (localStorage.getItem(GameInput) == null)
        localStorage.setItem(GameInput, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(GameInput));
}


export default function PopupForm(){

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
        resetForm()
        handleClose()
    }

    const resetForm =()=>{
        setValues(intV);
    }


    const [open, setOpen] = useState(false);
    const handleOpen = () =>{
        setOpen(true);
    };
    const handleClose = () =>{
        setOpen(false);
        resetForm()
    };
    const [item, setRecords]= useState(getData());
    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const classes = useStyles();
    return(
        <>
             <Button variant="outlined" onClick={handleOpen}>
       New Section
      </Button>
              <Dialog open={open} aria-labelledby="form-dialog-title">
                  <DialogTitle>CREATE A NEW SECTION</DialogTitle>

            <DialogContent>
                <Box className={classes.root} onSubmit={handleSubmit}>
                <Box item xs={12}>
                    <TextField
                        id ="standard-size-normal"
                        label = "Game"
                        name= "Game"
                        value={values.Game}
                        onChange={handleInputChange}
                    />
                    <div/>
                    <TextField
                        id ="standard-size-small"
                        size = "small"
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
                        label = "Notes"
                        name = "Notes"
                        value={values.Notes}
                        onChange={handleInputChange}
                    />
                    <div/>
                    <div>
                    <MButton
                text = "Create"
                onClick = {handleSubmit}
            />
                    <MButton
                text = "Close"
                onClick = {handleClose}
            />
                    </div>
                </Box>

        </Box>


            </DialogContent>

            </Dialog>

        </>
    )
}