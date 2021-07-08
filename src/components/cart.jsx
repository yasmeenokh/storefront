import React from 'react';
import {connect} from 'react-redux';
import { removeRemoteData } from '../store/actions';

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import BackspaceIcon from "@material-ui/icons/Backspace";
import Button from "@material-ui/core/Button";

const Cart = (props) => {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button variant="contained" color="info" {...bindTrigger(popupState)} 
            style={{width: '10%', height: '1%', marginTop: '1%'}}
            >
              My Cart
            </Button>
            <Menu {...bindMenu(popupState)}>
              {props.cart.cart.map((item, idx) => {
                {
                  return (
                    <>
                      <MenuItem>
                        {item.name} &nbsp;{" "}
                        <BackspaceIcon onClick={() => props.removeRemoteData(item)} />
                      </MenuItem>
                    </>
                  );
                }
              })}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  };

const mapStateToProps = (state)=>({
    cart : state.cartReducer,
})
const mapDispatchToProps = {removeRemoteData};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);