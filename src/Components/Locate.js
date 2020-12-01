import Button from '@material-ui/core/Button';
import React from 'react'


export default function Locate({panTo}){
    return (
        <Button className="locate" 
        variant="contained"
        color="primary" 
        onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position) =>{
                    panTo({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    })
                }, 
                () => null,
            );
        }}
        >
            Locate Me :) 
        </Button>
    )
}
