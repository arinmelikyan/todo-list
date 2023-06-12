import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { Button } from "@mui/material";
import "./styles.css";
import { addItem, deleteItem, editItem, getItems } from "../../store/actions";
import Popup from "./popup";

function List({
    list, 
    getItems 
}) {
    const [openPopup, setOpenPopup] = useState(false);

    useEffect(() => {
        getItems();
    }, []);

    const handleItemAction = (item, action) => {
        if (action === 'edit') {
            editItem(item)
        } else {
            addItem(item);
        }
    }

    const handleFormPopup = () => {
        setOpenPopup(true);
    }

    const handleClosePopup = () => {
        setOpenPopup(false);
    }

    return (
        <div>
            <div className="list">
                {
                    list.length !== 0 ? (
                        list.map(i => (
                            <Item 
                                key={i.id}
                                title={i.title}
                                description={i.description}
                                deadline={i.deadline}
                                
                            />
                        ))
                    ) : <p>No items in to do list</p>
                }
            </div>
            <div className="list-btn">
                <Button 
                    variant="contained"
                    onClick={handleFormPopup}
                > 
                    Add
                </Button>
            </div>
            {openPopup && (
                <Popup 
                    onClose={handleClosePopup}
                />
            )}
        </div>
    )
}

const mapStateToProps = ({ list }) => ({
    list
});

const mapDispatchToProps = (dispatch) => ({
    getItems: () => dispatch(getItems()),
    addItem: (payload) => dispatch(addItem(payload)),
    editItem: (payload) => dispatch(editItem(payload)),
    deleteItem: (id) => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);