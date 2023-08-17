import React from 'react';
import { Button, Plus} from './styles'

import plus from "../../../Assets/Button/plus.svg"

export default function ButtonAddTask() {
    return ( 
        <Button>
            <Plus src={plus}/>
            <span>Adicionar Tarefa</span>
        </Button>
     );
}

