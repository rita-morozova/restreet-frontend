import React from 'react'
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete'
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from '@reach/combobox'
import '@reach/combobox/styles.css'
import '../styles/Maps.css'


const SearchBar = ({panTo}) =>{

  const{ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
    requestOptions:{
      location: {lat: () => 47.6228, lng: () => -122.332112},
      radius: 2000
    }
  })

  const handleInput = (e) => {
    setValue(e.target.value)
};

const handleSelect = async (address) => {
    setValue(address, false)
    clearSuggestions()
    try {
        const results = await getGeocode({ address })
        const { lat, lng } = await getLatLng(results[0])
        panTo({ lat, lng })
    } catch (error) {
        console.log('error', error)
    }
    }

  return(
    <div className='search'>
        <Combobox onSelect={handleSelect}>
          <ComboboxInput value={value} onChange={handleInput} disabled={!ready} placeholder='Enter Address' />
              <ComboboxPopover>
                <ComboboxList style={{backgroundColor: "white"}}>
                  {status === 'OK' && data.map(({id, description}) => <ComboboxOption key={id} value={description} />)}
                </ComboboxList> 
              </ComboboxPopover>
    </Combobox>
    </div>
  )
}

export default SearchBar