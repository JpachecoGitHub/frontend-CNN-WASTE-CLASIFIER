import { upload } from '@testing-library/user-event/dist/upload';
import React, {useState} from 'react';
import { container, FormGroup, Input } from 'reactstrap';


const SubiendoImagenes = (props) => {

  const [image] = useState('');
  const [loading] = useState(false);
  
    return ( <div>
        <container style={{textAlign:'center'}}>
            <h1>
              Sube tu imagen 
            </h1>
            <FormGroup>
              <Input
                  type="file"
                  name="file"
                  placeholder="Sube tu Imagen Aqui!"
                  />
                  {loading ? (<h5>Cargando Imagen...</h5> ) : (<img src={image} style={{width: '300px'}}/>)}
            </FormGroup>
          </container>
    </div> );
}
 
export default SubiendoImagenes;