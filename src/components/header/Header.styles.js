import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  navSpacing: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  navBtns: {
    '& a': {
      color: '#fff'
    }
  }


}));
