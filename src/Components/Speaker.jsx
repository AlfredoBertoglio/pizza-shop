import { Howl } from 'howler';
import PizzaVoiceMale from '../../public/Sounds/PizzaVoiceMale.mp3';

export default function Speaker()
{
    const grito = new Howl({
        src: [PizzaVoiceMale],
        loop: false,
        volume: 0.3
    });   
    
    return(
       grito.play()
    )

}