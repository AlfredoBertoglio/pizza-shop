import { CameraControls, Html } from '@react-three/drei';
import { useRef, useEffect} from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useCallback } from 'react';

export default function CameraGsap()
{       
    const controls = useRef();
    const { camera } = useThree()
    const tl = gsap.timeline()
    const Magic = useRef();

    // Will test removing 'intro' or set to not action/only once at start.

    // Pending to confirm if this helps with camera movement back to origin.
  
    const intro = async () => {
          controls.current.dolly(-10);
          controls.current.smoothTime = 1.8;
          controls.current.dolly(10, true);
      };  
  
    const OnClickGood = useCallback(() => {
      controls.enableRotate = false
      controls.enableZoom = false
      controls.current.enabled = false
      document.getElementById("BigScreenGif").style.display = "none"
      
  
      tl.to(camera.position, {
          x: -0.1, y: -2.1, z:-4.7,
          duration: 3.5,
          ease: 'power3.inOut',
          immediateRender: false,
      })

  }, [])
  
    const OnClickBackCamera = useCallback(() => {
      controls.enableRotate = false
      controls.enableZoom = false
      document.getElementById("BigScreenGif").style.display = "Block"
  
      tl.to(camera.position, {
        x: 0.5, y: -2, z: -14,
        duration: 2.5,
        ease: 'power3.inOut',
        immediateRender: false,
        onComplete: () => {
          controls.current.enabled = true
          controls.enableDamping = true
          
        
        }
    })

// Need to review camera movement jumping 'origin' position after returning from screen.

//     tl.to(controls.target, {
//       x: 0.5, y: -3, z: -10,
//       duration: 1.5,
//       ease: 'power3.inOut',
//       immediateRender: false,
//   })
    
    // gsap.set (controls.target, {disabled:true});
    
    // tl.to(controls.target, {
    //     x: -0.5, y: -3.1, z:-6.7,
    //     duration: 2,
    //     ease: 'power3.inOut',
    // })
  }, [])
  
  useEffect(() => {
    intro();
  }, [])

    // useEffect(() => {
    //     intro();
    //     // OnClickGood();
    // }, []);

    // useEffect(OnClickGood);
    
    return(

        <>
        
        <CameraControls ref={controls}
        minDistance={10}
        maxDistance={14}
        minPolarAngle={0.5}
        maxPolarAngle={2.1}
        draggingSmoothTime={0.5}
        truckSpeed={0}
        enableTransition={true}
        enableDamping={true}
        enabled={true}
        
    />

        <Html
        ref={Magic}
           transform
           distanceFactor={ 3.3 }
           position={[0.899, 8.583, -0.05]}
           rotation-y={ - 9.46 }
           occlude="blending"
           scale={[1, 1, 1]}
           visible={true}
          >
              <button id="ButtonTest" onClick={OnClickBackCamera} >Back</button>
          
      </Html> 

        <Html
            transform
            distanceFactor={ 3.3 }
            position={[-0.073, 7.730, -0.015]}
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