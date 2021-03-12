import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types'
import Rate from './Rate'
import {useHistory} from 'react-router-dom'

const MovieCard = ({movie : {title,posterUrl,description, rate}}) => {
  const history = useHistory()
  const goToTrailer = () =>{
    history.push("/trailer")
  }
  return (
    <div   >
      <Card style ={{width :"300px",height:"700px",marginTop:"10px", marginRight:"30px", cursor:"pointer" }}
      onClick={goToTrailer} >
        <CardTitle tag="h5"> {title} </CardTitle>
        <CardImg top   src={posterUrl} alt="Card image cap" />
        <CardBody>
          <CardText> {description} </CardText>
          <div className ="row">
              <Rate rating ={rate}>

              </Rate>       
          </div>
        </CardBody>
      </Card>


    </div>
  );
};
MovieCard.propTypes ={
    movie : PropTypes.object.isRequired
}

export default MovieCard ;