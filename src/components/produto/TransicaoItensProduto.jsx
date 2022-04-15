import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import ItensProduto from './ItensProduto';
import { Button } from '@mui/material';

const itemProduto = [
    <div><ItensProduto /></div>,     
    <div><ItensProduto /></div>,     
    <div><ItensProduto /></div>,     
]

function renderItem({ item, handleRemoveItensProduto }) {
    return (
        <ListItem
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="delete"
                    title="Delete"
                    onClick={() => handleRemoveItensProduto(item)}
                >
                    <DeleteIcon />
                </IconButton>
            }
        >
            <ListItemText primary={item} />
        </ListItem>
    );
}

export default function TransicaoItensProduto() {
    const [adicionaItensProduto, setAdicionaItensProduto] = React.useState(itemProduto.slice(0, 3));

    const handleAddItensProduto = () => {
        const nextHiddenItem = itemProduto.find((i) => !adicionaItensProduto.includes(i));
        if (nextHiddenItem) {
            setAdicionaItensProduto((prev) => [nextHiddenItem, ...prev]);
        }
    };

    const handleRemoveItensProduto = (item) => {
        setAdicionaItensProduto((prev) => [...prev.filter((i) => i !== item)]);
    };

    const addItensProduto = (
        <Button                
            variant="contained"
            disabled={adicionaItensProduto.length >= itemProduto.length}
            onClick={handleAddItensProduto}
        >
            Acrescentar mais itens produto
        </Button>
    );

    return (
        <div>
            {addItensProduto}
            <Box 
            sx={{
                 mt: 1,                 
                  }}>
                <List>
                    <TransitionGroup>
                        {adicionaItensProduto.map((item) => (
                            <Collapse key={item}>
                                {renderItem({ item, handleRemoveItensProduto })}
                            </Collapse>
                        ))}
                    </TransitionGroup>
                </List>
            </Box>
        </div>
    );
}