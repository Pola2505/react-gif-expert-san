import { render, screen } from "@testing-library/react"
import { GifItem } from "../../components/GifItem"

describe('Pruebas en <GifItem />', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitana.jpg'

    test('debe de hacer match con el snapshot', () => { 

        const { container } = render(<GifItem title = { title } url = { url }/>)

        expect( container ).toMatchSnapshot();
     })

     test('debe de mostrar la imagen con el url y alt indicado', () => { 

        render(<GifItem title = { title } url = { url }/>)
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = ( screen.getByRole('img') )
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
 
      })

      test('debe de mostrar el titulo en el componente', () => { 

        render(<GifItem title = { title } url = { url }/>)
        expect( screen.getByText( title )).toBeTruthy();
       })
 })