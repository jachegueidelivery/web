import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
	marginTop:10
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const data = [
  {
    src:
      'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396 k views',
    createdAt: 'a week ago',
  },
  {
    src:
      'https://i.ytimg.com/vi/ycHr1G0Gffg/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAS6ZJ5RYa2R3Ksp9d8cLzY_8DMOA',
    title: 'Top Latino Songs 2019 - Luis Fonsi, Ozuna, Nicky Jam…',
    channel: 'Dj Yanky Plus',
    views: '2.1 M views',
    createdAt: '4 months ago',
  },
  {
    src:
      'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130 M views',
    createdAt: '10 months ago',
  }, 
  {
  src:
      'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130 M views',
    createdAt: '10 months ago',
  },
  {src:
      'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130 M views',
    createdAt: '10 months ago',
  },
];

function ComplexGrid (props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item>
            <ButtonBase className={classes.image}>
			{!props.imagem ? (
			aaaa
			) : (
			<img className={classes.img} alt="complex" src={props.imagem} />
			)}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}


export default function App(){
	
	return <>
	{data.map((item, index)=>(
				<ComplexGrid key={index} imagem={item.src} />))}
	</>
}