import { Howl } from 'howler';
import PizzaSound from '../../public/Sounds/PizzaSound.mp3';

export default function Sounds()
{       
        const cooking = new Howl({
            src: [PizzaSound],
            autoplay: true,
            loop: true,
            volume: 0.015
        });   
    
    return(
       cooking.play()
    )
}