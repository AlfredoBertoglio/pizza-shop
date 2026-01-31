import { OrbitControls, Html } from '@react-three/drei';
import { useRef, useCallback} from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function CameraGsap()
{       
    const controls = useRef();
    const { camera } = useThree()
    const tl = gsap.timeline()
    const Magic = useRef();
    const BigScreenTest = useRef();
  
    const intro = async () => {
          controls.current.dolly(-10);
          controls.current.smoothTime = 1.8;
          controls.current.dolly(10, true);
      };  
  
    const OnClickGood = useCallback(() => {
      // controls.current.enabled = false
      controls.current.enableRotate = false
      controls.current.enableZoom = false
      document.getElementById("BigScreenGif").style.display = "none"
      
  
      tl.to(camera.position, {
          x: -0.1, y: -1, z:-5,
          duration: 3.5,
          ease: 'power3.inOut',
          immediateRender: false,
      }
    )

  }, [])
  
  // pending review camera movement OnClick & performance.

    const OnClickBackCamera = useCallback(() => {
      document.getElementById("BigScreenGif").style.display = "Block"
  
      tl.to(camera.position, {
        x: 0.5, y: -1, z: -14,
        duration: 3.5,
        ease: 'power3.inOut',
        onComplete: () => {
          // controls.current.enabled = true
          controls.current.enableRotate = true
          controls.current.enableZoom = true
        },
        
    },
    );

  }, [])
  
  useEffect(() => {
    intro();
  }, [])
    
    return(

        <>
        <OrbitControls ref={controls}
        // position={[0.5,-2.1, 14]}
        minDistance={8}
        maxDistance={14}
        minPolarAngle={0.5}
        maxPolarAngle={2.1}
        dampingFactor={0.05}
        zoomSpeed={0.3}
        enablePan={false}
        truckSpeed={0}
        enableRotate={true}
        enableDamping={true}
        enabled={true}
    />

        <Html
          ref={Magic}
           transform
           distanceFactor={ 3.3 }
           position={[0.899, -1.583, -1.80]}
           rotation-y={ - 9.46 }
           occlude="blending"
           scale={[1, 1, 1]}
           visible={true}
          >
              <button id="ButtonTest" onClick={OnClickBackCamera} >Back</button>
          
         </Html> 

        <Html
            ref={BigScreenTest}
            transform
            distanceFactor={ 3.3 }
            position={[-0.073, -1.900, -1.815]}
            rotation-y={ - 9.43 }
            occlude="blending"
            scale={[1, 1, 1]}
            >
            <div onClick={OnClickGood}>
            <img id="BigScreenGif" src="./alfredo-pizza.gif" width='300px' height='150px' alt=""/>
            </div>
        </Html>
    {/* <Html>
        <div>
            <button>Click me</button>
        </div>
      </Html>  */}
      </>
    )
    
}