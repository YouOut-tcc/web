import {forwardRef} from 'react';
import CardMedia from "@mui/material/CardMedia";


const Image = forwardRef(({url, index, faded, style, ...props}, ref) => {
  const inlineStyles = {
    opacity: faded ? '0.2' : '1',
    transformOrigin: '0 0',
    // height: 200,
    // gridRowStart: 'span 2',
    // gridColumnStart: 'span 2',
    ...style,
  };

  return(
    <CardMedia
    ref={ref}
    style={inlineStyles}
    component="img"
    image={url}
    // alt={props.value}
    sx={{
      width: "26.5vw",
      height: "14.9vw",
      borderRadius: "20px",
      marginLeft: "0vw",
    }} // ~16:9
    {...props}
  />
  )
});

export default Image;