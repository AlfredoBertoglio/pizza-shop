import { SoftShadows , Center , Environment } from '@react-three/drei';
import PizzaShop from './Components/PizzaShop';
import Sounds from './Components/Sounds';
import React from "react";
import CameraGsap from './Components/CameraGsap';


export default function Experience ()
{ 
        return (
          <>

    <SoftShadows frustum={ 3.75 } size={ 25 } near={ 9.5 } samples={ 20 } rings={ 11 } />

    <Environment
        background
        files={'./environmentMaps/solitude_night_4k.hdr'}
        blur={0.45}
    />
    <CameraGsap />

    <directionalLight 
        castShadow
        position={ [ 1, 2.5, 2.6 ] }
        intensity={ 1.2 }
        shadow-mapSize={ [ 1024 , 1024 ] }
    />
    
    <ambientLight intensity={ 0.3} />

    <Center>
    <PizzaShop/>
    </Center>
    <Sounds />
          </>
        );
}


