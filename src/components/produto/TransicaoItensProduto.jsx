import React from 'react'
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
    <Box><ItensProduto /></Box>,
    <Box><ItensProduto /></Box>,
    <Box><ItensProduto /></Box>,
]

function renderItem({ item, handleRemoveItensProduto }) {
    return (
        <ListItem
            secondaryAction={
                <IconButton
                    color="secondary"
                    edge="start"
                    aria-label="delete"
                    title="Deletar"
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
                    display: "flex",
                    flexDirection: { xs: 'column', md: 'row' },
                    overflow: 'auto',
                    borderRadius: '12px',
                    boxShadow: 1,                    
                    paddingTop: '2%'                  
                }}
            >
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
        </div >
    );
}