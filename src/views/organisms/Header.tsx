import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import HeaderItem from "./HeaderItem";

const pages = ["Portfollio", "Profile", ];
const handleCloseNavMenu = () => { }

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            Logo
          </Typography>
          {pages.map((page) => (
            <HeaderItem tilte={page} />
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;
