import React from 'react';
import { Container } from './styles';
import Scores from "./Scores";
import{ MyTasks} from './MyTasks';

export default function Tasks() {
    return ( 
        <Container>
            <Scores/>
            <MyTasks/>
        </Container>
     );
};