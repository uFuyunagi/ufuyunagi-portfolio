import { makeStyles } from "@mui/styles";

type footerState ={
  footerText: string
}

const useStyles= makeStyles({
  footer: {
    color: "#ebf6f7",
    backgroundColor: "#0f2350",
    width: "100%",
    position: "absolute",
    bottom: 0,
  }
  
});

const Footer = (state: footerState) => {
  const classes = useStyles();
  return(
    <div className={classes.footer}>{state.footerText}</div>
  );
};

export default Footer;
