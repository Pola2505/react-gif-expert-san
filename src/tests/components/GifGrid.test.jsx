import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    const category = 'OnePunch';

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render( <GifGrid category={ category }/>)
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );

     });

     test('debe de mostrar items cuando se cargan las imagenes useFetchGifs ', () => { 

        const gifs = [
            {
                id:'ABC',
                title: 'Saitama',
                url: 'https://google.com'
            },
            {
                id:'ABCD',
                title: 'Goku',
                url: 'https://google.com/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category }/>)

        expect( screen.getAllByRole('img').length).toBe(2);

      })
 })