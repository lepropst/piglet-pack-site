import Link from "next/link";
import { pages } from "../../utilities/interfaces";
import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useRef } from "react";

function CustomHeaderLink(props: {
  children: ReactNode;
  to: string;
  noactive?: 0 | 1;
  active?: boolean;
}) {
  const router = useRouter();

  return (
    <Link href={props.to}>
      <Typography
        variant="h5"
        sx={{
          textDecoration:
            router.pathname.toLowerCase() === props.to ? "underline" : "none",
          color: "inherit",
          marginX: "1em",

          "&:hover": { textDecoration: "underline", cursor: "pointer" },
        }}
      >
        {props.children}
      </Typography>
    </Link>
  );
}

export default function Header() {
  const re = useRef<HTMLDivElement>(null);

  return (
    <Box id="header-visibility" ref={re}>
      <Box
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CustomHeaderLink key={202} noactive={0} to="/">
          Piglet Pack
        </CustomHeaderLink>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {pages.map((e: string, i: number) => (
            <CustomHeaderLink
              key={i}
              noactive={e.toLowerCase() === "home" ? 1 : 0}
              to={"/" + e.toLowerCase()}
            >
              {e}
            </CustomHeaderLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export { Header };
