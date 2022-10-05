import Link from 'next/link';
import { pages } from '../../utilities/interfaces';
import { ReactNode, SyntheticEvent, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '../../utilities/styling';
function CustomHeaderLink(props: {
  children: ReactNode;
  to: string;
  noactive?: 0 | 1;
  active?: boolean;
  onClick: () => void;
}) {
  const router = useRouter();

  return (
    <Link href={props.to}>
      <Typography
        onClick={props.onClick}
        variant="h5"
        sx={{
          textDecoration:
            router.pathname.toLowerCase() === props.to ? 'underline' : 'none',
          color: 'inherit',
          marginX: '1em',
          '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
        }}
      >
        {props.children}
      </Typography>
    </Link>
  );
}

export default function Header() {
  const { colorMode, theme } = useTheme();
  const isButtonVisible = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '1em',
        width: '100vw',
      }}
    >
      <CustomHeaderLink key={202} noactive={0} to="/" onClick={() => null}>
        Piglet Pack
      </CustomHeaderLink>
      <Container>
        {isButtonVisible && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginX: 'auto',
              justifyContent: 'center',
            }}
          >
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
          </Box>
        )}

        {isButtonVisible && (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            sx={{ marginBottom: '1em' }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {pages.map((e: string, i: number) => (
              <MenuItem key={`${e}-${i}`}>
                <CustomHeaderLink
                  noactive={e.toLowerCase() === 'home' ? 1 : 0}
                  to={'/' + e.toLowerCase()}
                  onClick={handleClose}
                  key={`${e}-${i}`}
                >
                  {e}
                </CustomHeaderLink>
              </MenuItem>
            ))}
          </Menu>
        )}
        {!isButtonVisible && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginX: 'auto',
              justifyContent: 'center',
            }}
          >
            {pages.map((e: string, i: number) => (
              <CustomHeaderLink
                key={`${e}-${i}`}
                noactive={e.toLowerCase() === 'home' ? 1 : 0}
                to={'/' + e.toLowerCase()}
                onClick={() => null}
              >
                {e}
              </CustomHeaderLink>
            ))}
          </Box>
        )}
      </Container>
    </nav>
  );
}

export { Header };
