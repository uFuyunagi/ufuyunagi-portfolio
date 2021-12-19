import { MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export type HeaderItemState = {
  tilte: string
  onClickHnader?: () => {}
}

const HeaderItem = (state: HeaderItemState) => {
  return (
    <MenuItem key={state.tilte} onClick={state.onClickHnader}>
      <Typography textAlign="center">
        <Link to={state.tilte}>
        {state.tilte}
        </Link>
      </Typography>
    </MenuItem>
  )
}

export default HeaderItem;
