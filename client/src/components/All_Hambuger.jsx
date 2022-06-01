import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hook';
// import { GlobalStyles } from '@mui/material';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import FocusLock from 'react-focus-lock';

function All_Hambuger() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        
      </>
    </ThemeProvider>
  );
}

export default All_Hambuger;