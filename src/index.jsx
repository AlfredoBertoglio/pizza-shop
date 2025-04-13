import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from "./Experience";
import { Suspense } from 'react';
import LoadingScreen from "./Components/LoadingScreen";
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import gsap from 'gsap';
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin)

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Suspense fallback={<LoadingScreen/>}>
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.5,
            far: 220,
            position: [ -9.5 , -3.5 , 5.5 ]
        } }
        
    >
    <EffectComposer> 
    <Bloom
        mipmapBlur
        intensity={ 0.3 }
        luminanceThreshold={ 2.5 }
    />
    </EffectComposer>
    
    <Experience />
    </Canvas>
    </Suspense>
)