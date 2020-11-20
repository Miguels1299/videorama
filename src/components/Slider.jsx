import React from 'react'
import 'netslider/dist/styles.min.css';
import SliderContainer from './SliderContainer';
import NetSlider from 'netslider';
import PropTypes from 'prop-types';

function SliderTemplate(props){
    return (
        <div className="slider-container-wrapper">
            <SliderContainer videoModel={props.videoModel} model={props.model}> </SliderContainer>
        </div>
    )
}

export const Slider = ({titulo,peliculas},props) => {
    return (
            <div className="netslider-container" style={{ overflow:'hidden', height:'300px' }} >
                <h1 style={{textAlign:'left', paddingLeft:'4%', marginTop:"40px"}}>{titulo}</h1>
                <NetSlider className="netslider_title_card" data={peliculas} slideTemplate={props => (<SliderTemplate {...props} />)}/>
            </div>
    )
}

Slider.propTypes = {
    titulo: PropTypes.string,
    peliculas: PropTypes.array,
}
