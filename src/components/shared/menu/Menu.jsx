import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Imagem from './Imagem';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import sessionUtil from "../../../util/sessionUtil";
import { Divider } from "@mui/material";
import BadgeEmblema from '../../contato/BadgeEmblema';


const menuAdmin = [
    { nome: 'Home', path: 'administracao/home' },
    { nome: 'Carrossel', path: 'administracao/carrossel' },
    { nome: 'Cardápio', path: 'administracao/cardapio' },
    { nome: 'Gerenciar produtos', path: 'administracao/produto/lista-produto' },
    { nome: 'Gerenciar usuários', path: 'administracao/usuarios' },
    { nome: 'Agenda', path: 'fake' },
    { nome: <BadgeEmblema />, path: 'administracao/lista-contato' }
];

const menuUsuario = [
    { nome: 'Home', path: 'home' },
    { nome: 'Cardápio', path: 'cardapio' },
    { nome: 'Encomenda', path: 'encomenda' },
    { nome: 'Contato', path: 'contato' },
    { nome: 'Instagram', path: 'instagram' },

]


const settings = ['Conta', 'Sair'];

const MenuComponente = ({ usuario }) => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const nomeUsuario = sessionUtil.getNomeUsuario();
    const paginas = sessionUtil.isAdmin() ? menuAdmin : menuUsuario;

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleGerenciarConta = () => {
        navigate("/private/gerenciar-conta/:id");
        setAnchorElUser(null);
    };

    const logout = () => {
        console.log('logout');
        sessionUtil.removerTknCookie();
        navigate('/');
    }

    const handleMudarPagina = (path) => {
        navigate(path);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 4, display: { xs: 'none', md: 'flex' } }}
                    >
                        SIGEN
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {paginas.map((page) => (
                                <MenuItem key={page.nome} onClick={() => { handleMudarPagina(page.path) }}>
                                    <Typography textAlign="center">{page.nome}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}
                    >
                        SIGEN
                    </Typography>
                    <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                        {paginas.map((page) => (
                            <Button
                                key={page.nome}
                                onClick={() => { handleMudarPagina(page.path) }}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.nome}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Imagem img={usuario.picture} nome={usuario.nome} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography style={{ height: "100%", width: "100%" }} textAlign="center">Olá, {nomeUsuario}</Typography>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleGerenciarConta}>
                                <Typography style={{ height: "100%", width: "100%" }} textAlign="center">Gerenciar conta</Typography>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={logout}>
                                <Typography textAlign="center">Sair</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default MenuComponente;
