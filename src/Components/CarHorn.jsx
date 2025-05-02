import { Howl } from 'howler';
import CarHorn from '../../public/Sounds/car-horn.mp3';

export default function AutoBipBip()
{
        const bipbip = new Howl({
            src: [CarHorn],
            loop: false,
            volume: 0.5
        });   
    
    return(
       bipbip.play()
    )

}