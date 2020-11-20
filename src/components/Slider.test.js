import React from 'react';
import {shallow} from 'enzyme';
import {Slider} from './Slider';

describe('Pruebas en <Slider />', () => {
    const titulo = "Pelicula";
    const peliculas = [
        {
            id: 80178943,
            image:
                "https://occ-0-1229-116.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZkJbs3ZqZsg0PrW4wd4VqEDOJljJdlSqeFthGwNQ49mX2UqkUwQBwquT3In6z7DtSCT1z8TRwYY_uKprg5a_rcx8v947ocQj2RyjkQ_dhwCqwDaS1O9wWYmqOiv.jpg",
            imageHighRes:
                "https://occ-0-1229-116.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZkJbs3ZqZsg0PrW4wd4VqEDOJljJdlSqeFthGwNQ49mX2UqkUwQBwquT3In6z7DtSCT1z8TRwYY_uKprg5a_rcx8v947ocQj2RyjkQ_dhwCqwDaS1O9wWYmqOiv.jpg",
        },
        {
            id: 80178943,
            image:
                "https://occ-0-1229-116.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRGA5vLR9JW1REzbP5nniTuHbCNr3dr08nHGABq59Qrn3gzf3bNn0uk86pffebgVDwQr1ikfI7s7upNkiQZ4XR9VwAo.jpg",
            imageHighRes:
                "https://occ-0-1229-116.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRGA5vLR9JW1REzbP5nniTuHbCNr3dr08nHGABq59Qrn3gzf3bNn0uk86pffebgVDwQr1ikfI7s7upNkiQZ4XR9VwAo.jpg",
        }
    ];

    test ('Mostrar componente correctamente',() =>{
        const wrapper = shallow(<Slider titulo={titulo} peliculas={peliculas} />);
        expect(wrapper).toMatchSnapshot();
    }) 
})
