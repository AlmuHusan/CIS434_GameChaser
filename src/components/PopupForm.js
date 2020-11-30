import React, { useState } from 'react';
import { Dialog, DialogContent, TextField } from "@material-ui/core";
import { Button as MuiButton, makeStyles } from "@material-ui/core";
import { Box, Table } from "@material-ui/core";
import Button from 'react-bootstrap/Button';
const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        width: 400,
    },
    label: {
        textTransform: 'none'
    },
    input_f: {
        color: 'grey',
        fontFamily: 'ArcadeFont',
        fontSize: '10px'
    },
    div_f: {
        color: 'black',
        fontFamily: 'ArcadeFont',
        fontSize: '12px'
    },


}))

export function MButton(props) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();
    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "lg"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}>
            {text}
        </MuiButton>

    )
}

export function Input_f(props) {
    const classes = useStyles();
    const { name, label, value, error = null, onChange } = props;
    return (
        <TextField
            fullWidth = "true"
            id ="outlined"
            variant="outlined"
            inputProps={{ className: classes.input_f }}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && { error: true, helperText: error })}
        />
    )
}

export function useForm(initialFValues, validateOnChange = false, validate) {


    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm

    }
}


const intV = {
    Game: '',
    Name: '',
    Size: '',
    Time: '',
    Notes: '',
}

const { GameInput } = {
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


export default function PopupForm() {
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('Game' in fieldValues)
            temp.Game = fieldValues.Game ? "" : "*Game Name is required."
        if ('Name' in fieldValues)
            temp.Name = fieldValues.Name ? "" : "*Username is required."
        if ('Time' in fieldValues)
            temp.Time = fieldValues.Time ? "" : "*Time is required."
        if ('Size' in fieldValues)
            temp.Size = (/^[0-9\b]+$/).test(fieldValues.Size) ? "" : "*This field must be in number."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(intV, true, validate);


    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            insertData(values)
            resetForm()
            handleClose()
        }
    }

    const resetForm_f = () => {
        setValues(intV);
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        resetForm_f()
    };



    const classes = useStyles();

    return (
        <>
            <Button style={{ 'fontFamily': 'ArcadeFont' }} variant="warning" size="lg" onClick={handleOpen}>
                New Game
      </Button>
            <Dialog open={open}>

                <DialogContent>
                    <Box className={classes.root} onSubmit={handleSubmit}>

                        <div className={classes.div_f}> Game </div>
                        <Input_f
                            variant="outlined"
                            name="Game"
                            value={values.Game}
                            onChange={handleInputChange}
                            error={errors.Game}
                        />

                        <div className={classes.div_f}> Name </div>
                        <Input_f
                            variant="outlined"
                            name="Name"
                            value={values.Name}
                            onChange={handleInputChange}
                            error={errors.Name}
                        />
                        <div className={classes.div_f}> SIZE </div>
                        <Input_f className={classes.root}
                            variant="outlined"
                            name="Size"
                            value={values.Size}
                            onChange={handleInputChange}
                            error={errors.Size}
                        />
                        <div className={classes.div_f}> TIME </div>
                        <Input_f
                            variant="outlined"
                            name="Time"
                            value={values.Time}
                            onChange={handleInputChange}
                            error={errors.Time}
                        />
                        <div className={classes.div_f}> NOTES </div>
                        <Input_f
                            variant="outlined"
                            name="Notes"
                            value={values.Notes}
                            onChange={handleInputChange}
                        />

                        <div>
                            <MButton style={{ 'fontFamily': 'ArcadeFont' }} color={'default'} 
                                text="Create"
                                onClick={handleSubmit}
                            />
                            <MButton style={{ 'fontFamily': 'ArcadeFont' }} color={'secondary'} size = "sm"
                                text="Close"
                                onClick={handleClose}
                            />
                        </div>
                    </Box>


                </DialogContent>

            </Dialog>

        </>
    )
}