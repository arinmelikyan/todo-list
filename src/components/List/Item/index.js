import React from "react";
import { 
    FormControl, 
    InputLabel, 
    Input, 
    ButtonGroup, 
    FormGroup, 
    Checkbox,
    FormControlLabel,
    Button 
} from '@mui/material';
import "./styles.css";

function Item({
    title,
    description,
    deadline,
}) {
    return (
        <form className="item-form">
            <FormControl>
                <InputLabel>Title</InputLabel>
                <Input defaultValue={title} />
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input defaultValue={description} />
            </FormControl>
            <FormControl>
                <InputLabel>Deadline</InputLabel>
                <Input defaultValue={deadline} />
            </FormControl>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Label" />
            </FormGroup>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>Edit</Button>
                <Button>Delete</Button>
            </ButtonGroup>
        </form>
    )
}

export default Item;