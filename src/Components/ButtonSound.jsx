import { Howl } from 'howler';
import InterfaceSound from '../../public/Sounds/interface-click.wav';

export default function ButtonClick()
{       
        const button = new Howl({
            src: [InterfaceSound],
            loop: false,
            volume: 0.50
        });   
    
    return(
       button.play()
    )
}