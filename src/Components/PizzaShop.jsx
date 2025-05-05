import React, { useRef } from "react";
import { Sparkles, Html, Float, useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import Speaker from "./Speaker";
import AutoBipBip from "./CarHorn";
import BigScreen from "./BigScreen";



export default function PizzaShop(name, ...props) {
  const { nodes, materials } = useGLTF("/PizzaMaterialsUpdated.glb");

  const satellite = useRef()

  useFrame ((state, delta) =>
  {
    satellite.current.rotation.y += delta * 0.2
  })

  const fan1 = useRef()

  useFrame((state, delta) =>
  {
    fan1.current.rotation.x += delta * 3
  })

  const fan2 = useRef()

  useFrame((state, delta) =>
  {
    fan2.current.rotation.x += delta * 3
  })

  const grandeDisplay = useRef()
  
  return (
    <group {...props} dispose={null}>
      <Float
        floatIntensity={0.5}
        floatingRange={[0, 0.01]}
        rotationIntensity={0.2}
        speed={1.5}
      >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert017.geometry}
        material={materials.Tubes}
        position={[2.417, 8.607, 1.2]}
        scale={[1, 0.933, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert019.geometry}
        material={materials["Sign Light"]}
        position={[-2.233, 10.755, 1.115]}
        rotation={[0, 0, 0.023]}
      >
        <meshBasicMaterial color={[ 251 / 55 , 255 / 55 , 255 / 55 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane327.geometry}
        material={materials["Mid Dark Metal"]}
        position={[2.335, 7.39, 2.463]}
        rotation={[0, 0, 1.577]}
        scale={[0.26, 0.261, 0.231]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert021.geometry}
        material={materials.Tubes}
        position={[2.376, 7.159, 2.507]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert022.geometry}
        material={materials.Tubes}
        position={[2.376, 7.159, 2.435]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert023.geometry}
        material={materials.Cables}
        position={[1, 11.584, 1.685]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert024.geometry}
        material={materials.Cables}
        position={[-1.602, 9.81, 1.866]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert025.geometry}
        material={materials.Cables}
        position={[0.967, 11.584, 1.681]}
      />
      <mesh
        onPointerEnter={() => {document.body.style.cursor = 'pointer'}}
        onPointerLeave={() => {document.body.style.cursor = 'default'}}
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        onClick={AutoBipBip}
        material={materials.AutoRojo}
        position={[-2.337, 7.564, 1.748]}
        rotation={[0, 0, 1.57]}
        scale={0.786}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["window glass"]}
        position={[-2.373, 7.564, 1.748]}
        rotation={[0, 0, 1.57]}
        scale={[0.786, 0.74, 0.786]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["window glass"]}
        position={[-2.373, 7.564, 1.748]}
        rotation={[0, 0, 1.57]}
        scale={[0.786, 0.74, 0.786]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["window glass"]}
        position={[-2.337, 7.564, 1.748]}
        rotation={[0, 0, 1.57]}
        scale={0.786}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.AutoRojo}
        position={[-3.376, 7.18, 2.247]}
        rotation={[1.267, 0.031, -1.661]}
        scale={0.092}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials.AutoRojo}
        position={[-3.376, 7.18, 1.219]}
        rotation={[1.267, 0.031, -1.661]}
        scale={0.092}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Cables}
        position={[-3.355, 6.775, 1.748]}
        rotation={[-1.577, 0, 0]}
        scale={[0.177, 0.252, 0.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.Cables}
        position={[-3.373, 6.698, 1.808]}
        rotation={[0, 0, 1.577]}
        scale={[0.048, 0.1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials.Cables}
        position={[-3.373, 6.698, 1.627]}
        rotation={[-3.142, 0.021, 1.577]}
        scale={[0.048, 0.1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane340.geometry}
        material={materials.AutoRojo}
        position={[-2.337, 7.564, 1.748]}
        rotation={[0, 0, 1.57]}
        scale={0.786}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane341.geometry}
        material={materials.AutoRojo}
        position={[-2.337, 7.564, 1.748]}
        rotation={[0, 0, 1.57]}
        scale={0.786}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials.MaderaTecho}
        position={[0, 9.201, 1.748]}
      />
      <group
        position={[-1.277, 9.315, 3.004]}
        rotation={[0.665, 0.028, -0.002]}
        scale={0.116}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials["New Tiles"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020_1.geometry}
          material={materials["Mid Tiles"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020_2.geometry}
          material={materials["Old TIles"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane281.geometry}
        material={materials["Wood Table shop"]}
        position={[-2.338, 7.975, 2.74]}
        rotation={[0.749, 0, -1.571]}
        scale={0.09}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane283.geometry}
        material={materials["Wood Table shop"]}
        position={[-0.073, 8.987, 3.261]}
        rotation={[0.174, 0, 0]}
        scale={[1.025, 0.948, 0.647]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane284.geometry}
        material={materials["Wood Table shop"]}
        position={[-0.073, 8.987, 3.261]}
        rotation={[0.174, 0, 0]}
        scale={[1.025, 0.948, 0.647]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane285.geometry}
        material={materials["Material.004"]}
        position={[-0.073, 8.987, 3.224]}
        rotation={[0.174, 0, 0]}
        scale={[1.025, 0.948, 0.647]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane282.geometry}
        material={materials["Wood Table shop"]}
        position={[2.437, 7.975, 2.74]}
        rotation={[0.749, 0, -1.571]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.MetalShop}
        position={[-0.004, 6.523, 1.748]}
        scale={[2.336, 1.169, 1.262]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane286.geometry}
        material={materials["Wood Table shop"]}
        position={[-0.006, 7.373, 2.803]}
        scale={[1.308, 1, 0.36]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane342.geometry}
        material={materials.pipesubstance001}
        position={[-0.004, 6.554, 1.748]}
        scale={[2.179, 1.19, 1.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane343.geometry}
        material={materials["Wood Table shop"]}
        position={[-0.004, 6.533, -2.921]}
        scale={[2.336, 1.169, 1.258]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials["Metal Yellow Paint"]}
        position={[-2.336, 8.974, 1.34]}
        rotation={[0, 0, -1.575]}
        scale={[0.259, 0.212, 0.413]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane308.geometry}
        material={materials["Mid Dark Metal"]}
        position={[1.934, 7.823, 0.437]}
        rotation={[-1.578, 0.01, 0.264]}
        scale={[-0.238, -0.126, -0.343]}
      />
      <mesh
        castShadow
        receiveShadow
        // geometry={nodes.Small_Display.geometry}
        // material={materials["window glass"]}
        // position={[1.934, 7.823, 0.437]}
        rotation={[-1.578, 0.01, 0.264]}
        scale={[-0.238, -0.126, -0.343]}
      />

      <Html
            transform
            distanceFactor={ 3.3 }
            position={[1.999, 7.783, 0.280]}
            rotation-y={ - 9.16 }
            occlude="blending"
            scale={[1, 1, 1]}
        >
            <div>
            <a href='https://www.linkedin.com/in/alfredo-bertoglio/' target='blank'>
            <img src="./small-display-social.gif" width='52px' height='92px'/></a>
            </div>
      </Html>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Dark Metal"]}
        position={[-0.781, 6.841, 3.59]}
        rotation={[-1.571, -0.009, 1.572]}
        scale={[0.157, 0.065, 0.157]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-0.784, 6.826, 3.605]}
        rotation={[0.39, 0, 0]}
        scale={[-0.035, -0.032, -0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Dark Metal"]}
        position={[-0.793, 6.489, 3.359]}
        rotation={[-1.571, -0.009, 1.572]}
        scale={[0.157, 0.065, 0.157]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-0.798, 6.491, 3.347]}
        rotation={[1.817, 0, 0]}
        scale={[-0.035, -0.014, -0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials.Leather}
        position={[0.052, 6.95, 3.588]}
        scale={[0.291, 0.416, 0.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Dark Metal"]}
        position={[0.06, 6.841, 3.59]}
        rotation={[-1.571, -0.009, 1.572]}
        scale={[0.157, 0.065, 0.157]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Mid Dark Metal"]}
        position={[0.057, 6.826, 3.605]}
        rotation={[0.39, 0, 0]}
        scale={[-0.035, -0.032, -0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Dark Metal"]}
        position={[0.049, 6.489, 3.359]}
        rotation={[-1.571, -0.009, 1.572]}
        scale={[0.157, 0.065, 0.157]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Mid Dark Metal"]}
        position={[0.043, 6.491, 3.347]}
        rotation={[1.817, 0, 0]}
        scale={[-0.035, -0.014, -0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials.Leather}
        position={[0.824, 6.95, 3.588]}
        scale={[0.29, 0.414, 0.29]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Dark Metal"]}
        position={[0.832, 6.841, 3.59]}
        rotation={[-1.571, -0.009, 1.572]}
        scale={[0.157, 0.065, 0.157]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Mid Dark Metal"]}
        position={[0.829, 6.826, 3.605]}
        rotation={[0.39, 0, 0]}
        scale={[-0.035, -0.032, -0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["Dark Metal"]}
        position={[0.82, 6.489, 3.359]}
        rotation={[-1.571, -0.009, 1.572]}
        scale={[0.157, 0.065, 0.157]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Mid Dark Metal"]}
        position={[0.815, 6.491, 3.347]}
        rotation={[1.817, 0, 0]}
        scale={[-0.035, -0.014, -0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials.Leather}
        position={[-0.784, 6.95, 3.588]}
        scale={[0.289, 0.412, 0.289]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle016.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-0.784, 6.865, 3.587]}
        scale={0.293}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle017.geometry}
        material={materials["Mid Dark Metal"]}
        position={[0.055, 6.865, 3.587]}
        scale={0.293}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle018.geometry}
        material={materials["Mid Dark Metal"]}
        position={[0.821, 6.865, 3.587]}
        scale={0.293}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle019.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-2.464, 8.568, 3.431]}
        rotation={[0, 0, -1.556]}
        scale={-0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle020.geometry}
        material={materials["Mid Dark Metal"]}
        position={[2.182, 8.568, 3.431]}
        rotation={[0, 0, -1.556]}
        scale={-0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-2.336, 6.569, 1.84]}
        scale={1.206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["Mid Dark Metal"]}
        position={[0.86, 6.569, 1.84]}
        scale={1.206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane293.geometry}
        material={materials["Dark Metal"]}
        position={[-1.531, 6.565, 2.574]}
        scale={[0.191, 0.355, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane294.geometry}
        material={materials["Mid Dark Metal"]}
        position={[1.015, 6.354, 2.334]}
        rotation={[-1.586, 0, 0]}
        scale={[0.467, 0.172, 0.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle014.geometry}
        material={materials.Tubes}
        position={[-1.423, 9.742, 1.562]}
        rotation={[0, 0, 3.13]}
        scale={[0.119, 0.167, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane347.geometry}
        material={materials["Dark Metal"]}
        position={[-1.531, 6.565, 2.574]}
        scale={[0.191, 0.355, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane292.geometry}
        material={materials["Dark Metal"]}
        position={[-2.392, 6.565, 2.201]}
        scale={[0.14, 0.355, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane348.geometry}
        material={materials["Dark Metal"]}
        position={[-2.392, 6.565, 2.201]}
        scale={[0.14, 0.355, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane299.geometry}
        material={materials["Dark Metal"]}
        position={[-0.687, 6.565, 0.971]}
        rotation={[-Math.PI, 0.009, -Math.PI]}
        scale={[0.191, 0.355, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane349.geometry}
        material={materials["Dark Metal"]}
        position={[-0.687, 6.565, 0.971]}
        rotation={[-Math.PI, 0.009, -Math.PI]}
        scale={[0.191, 0.355, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane298.geometry}
        material={materials["Dark Metal"]}
        position={[-1.671, 10.167, 1.959]}
        scale={[0.191, 0.355, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane350.geometry}
        material={materials["Dark Metal"]}
        position={[-1.671, 10.167, 1.959]}
        scale={[0.191, 0.355, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane357.geometry}
        material={materials["Mid Dark Metal"]}
        position={[1.015, 6.354, 2.334]}
        rotation={[-1.586, 0, 0]}
        scale={[0.467, 0.172, 0.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane300.geometry}
        material={materials["Mid Dark Metal"]}
        position={[1.015, 6.354, 1.092]}
        rotation={[-1.555, 0, 3.123]}
        scale={[0.467, 0.172, 0.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane359.geometry}
        material={materials["Mid Dark Metal"]}
        position={[1.015, 6.354, 1.092]}
        rotation={[-1.555, 0, 3.123]}
        scale={[0.467, 0.172, 0.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials.Tubes}
        position={[0.094, 6.694, 1.748]}
        scale={[0.279, 0.392, 0.279]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle112.geometry}
        position={[-1.423, 9.742, 1.562]}
        rotation={[0, 0, 3.13]}
        scale={[0.119, 0.167, 0.119]}
      >
        <meshBasicMaterial color={[ 50 / 28 , 205 / 28 , 50 / 28  ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle113.geometry}
        material={materials["Green Neon"]}
        position={[-1.423, 9.742, 1.562]}
        rotation={[0, 0, 3.13]}
        scale={[0.119, 0.167, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials.Tubes}
        position={[-0.797, 6.694, 1.748]}
        scale={[0.279, 0.392, 0.279]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert.geometry}
        material={materials.Tubes}
        position={[-2.224, 6.747, 2.942]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-1.881, 7.881, 3.046]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle009.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-2.296, 7.2, 3.087]}
        rotation={[0, 0, -1.598]}
        scale={0.202}
      />
      <mesh
        ref={satellite}
        castShadow
        receiveShadow
        geometry={nodes.Satellite.geometry}
        material={materials.Tubes}
        position={[-1.054, 9.743, 1.659]}
        scale={[0.229, 0.202, 0.229]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Wood Table shop"]}
        position={[-0.075, 9.103, 3.424]}
        rotation={[-0.881, 0, 0]}
        scale={[1.191, 0.058, 0.058]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials["Wood Table shop"]}
        position={[0.496, 9.338, 0.313]}
        rotation={[-0.881, 0, 0]}
        scale={[0.602, 0.058, 0.058]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane291.geometry}
        material={materials.Furniture}
        position={[1.238, 7.368, 2.609]}
        scale={[0.193, 0.154, 0.154]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane301.geometry}
        material={materials.Furniture}
        position={[1.182, 7.924, 2.5]}
        rotation={[-1.288, 0, 0]}
        scale={0.087}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane319.geometry}
        material={materials.Furniture}
        position={[1.238, 6.711, 0.722]}
        rotation={[0, 1.548, 0]}
        scale={[0.193, 0.328, 0.206]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane295.geometry}
        material={materials["Signs Wood"]}
        position={[-2.128, 9.871, 1.554]}
        scale={[0.06, 0.05, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane296.geometry}
        material={materials["Signs Wood"]}
        position={[-2.128, 9.871, 1.932]}
        scale={0.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane297.geometry}
        material={materials["Signs Wood"]}
        position={[-2.187, 9.946, 1.748]}
        rotation={[0, 0, -0.045]}
        scale={[0.867, 0.792, 0.867]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle015.geometry}
        material={materials.PizzaCone}
        position={[1.051, 11.487, 1.897]}
        rotation={[1.501, 0.426, 0.176]}
        scale={[2.14, 1.482, 1.541]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle007.geometry}
        material={materials["Steel tuercas"]}
        position={[0.733, 11.489, 1.568]}
        rotation={[-1.565, -0.001, -0.222]}
        scale={-0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle056.geometry}
        material={materials["Steel tuercas"]}
        position={[1.203, 11.242, 1.665]}
        rotation={[-1.565, -0.001, -0.222]}
        scale={-0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle057.geometry}
        material={materials["Steel tuercas"]}
        position={[0.733, 11.241, 1.568]}
        rotation={[-1.565, -0.001, -0.222]}
        scale={-0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle087.geometry}
        material={materials["Steel tuercas"]}
        position={[1.203, 11.489, 1.665]}
        rotation={[-1.565, -0.001, -0.222]}
        scale={-0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane328.geometry}
        material={materials.Tubes}
        position={[0.938, 11.584, 1.688]}
        rotation={[0, -0.205, 0]}
        scale={[0.117, 0.084, 0.056]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane329.geometry}
        material={materials.Tubes}
        position={[1.014, 11.657, 1.647]}
        rotation={[-1.551, -0.004, -0.178]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane330.geometry}
        material={materials.Tubes}
        position={[0.982, 11.657, 1.641]}
        rotation={[-1.551, -0.004, -0.178]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane331.geometry}
        material={materials.Tubes}
        position={[0.949, 11.657, 1.634]}
        rotation={[-1.551, -0.004, -0.178]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane332.geometry}
        material={materials.Tubes}
        position={[0.918, 11.657, 1.628]}
        rotation={[-1.551, -0.004, -0.178]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane333.geometry}
        material={materials.Tubes}
        position={[-2.117, 10.277, 1.75]}
        rotation={[-1.57, -0.02, -1.546]}
        scale={[0.004, 0.004, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane335.geometry}
        material={materials.Tubes}
        position={[-2.114, 10.277, 1.75]}
        rotation={[-1.571, -0.02, -1.59]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane336.geometry}
        material={materials.Tubes}
        position={[-2.114, 10.277, 1.777]}
        rotation={[-1.571, -0.02, -1.59]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane302.geometry}
        material={materials["Mid Dark Metal"]}
        position={[1.739, 7.722, 3.01]}
        rotation={[1.56, 0, 0]}
        scale={0.073}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.MetalShop}
        position={[1.462, 7.747, 3.476]}
        rotation={[-Math.PI, 0.754, -Math.PI]}
        scale={[0.175, 0.174, 0.192]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane303.geometry}
        material={materials["Mid Dark Metal"]}
        position={[1.739, 7.722, 2.971]}
        rotation={[1.56, -0.001, 0.082]}
        scale={0.073}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert001.geometry}
        material={materials.Cables}
        position={[1.603, 7.615, 3.376]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TV_Display.geometry}
        material={materials["window glass"]}
        position={[1.462, 7.747, 3.476]}
        rotation={[-Math.PI, 0.754, -Math.PI]}
        scale={[0.175, 0.174, 0.192]}
      > 
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle011.geometry}
        material={materials.Plates}
        position={[0.783, 7.484, 2.892]}
        scale={0.114}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle012.geometry}
        material={materials.Plates}
        position={[0.024, 7.483, 2.892]}
        scale={0.114}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle049.geometry}
        material={materials.Plates}
        position={[-0.85, 7.708, 2.519]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle050.geometry}
        material={materials.Plates}
        position={[1.213, 7.789, 2.048]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle064.geometry}
        material={materials.Plates}
        position={[1.213, 7.793, 2.048]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle065.geometry}
        material={materials.Plates}
        position={[1.213, 7.798, 2.048]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle066.geometry}
        material={materials.Plates}
        position={[1.213, 7.806, 2.048]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle067.geometry}
        material={materials.Plates}
        position={[1.213, 7.812, 2.048]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle108.geometry}
        material={materials.Black}
        position={[-3.442, 7.176, 2.247]}
        rotation={[0, 0, 1.857]}
        scale={0.081}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle109.geometry}
        material={materials.Black}
        position={[-3.433, 7.176, 1.213]}
        rotation={[0, 0, 1.857]}
        scale={0.074}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle043.geometry}
        material={materials.Bowls}
        position={[-0.543, 7.717, 2.548]}
        scale={-0.059}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle044.geometry}
        material={materials["Water Glass"]}
        position={[0.307, 7.483, 2.695]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle045.geometry}
        material={materials["Water Glass"]}
        position={[0.481, 7.483, 2.752]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle046.geometry}
        material={materials.Straws}
        position={[0.649, 7.453, 2.404]}
        rotation={[-0.033, -0.048, -0.163]}
        scale={[-0.047, -0.039, -0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle047.geometry}
        material={materials["Water Glass"]}
        position={[-0.849, 7.711, 2.516]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle048.geometry}
        material={materials.Straws}
        position={[-0.682, 7.682, 2.167]}
        rotation={[-0.033, -0.048, -0.163]}
        scale={[-0.047, -0.039, -0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle052.geometry}
        material={materials.Bowls}
        position={[1.224, 7.55, 2.247]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle053.geometry}
        material={materials.Bowls}
        position={[1.224, 7.575, 2.247]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle054.geometry}
        material={materials.Bowls}
        position={[1.224, 7.601, 2.247]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle055.geometry}
        material={materials.Bowls}
        position={[1.224, 7.624, 2.247]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle051.geometry}
        material={materials["Water Glass"]}
        position={[1.225, 7.546, 2.051]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle058.geometry}
        material={materials.Straws}
        position={[-0.698, 7.584, 2.184]}
        rotation={[-0.318, -0.048, -0.163]}
        scale={[-0.047, -0.039, -0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle059.geometry}
        material={materials.Straws}
        position={[-0.702, 7.682, 2.194]}
        rotation={[-0.033, -0.048, -0.163]}
        scale={[-0.047, -0.039, -0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle060.geometry}
        material={materials.Straws}
        position={[-0.727, 7.725, 2.129]}
        rotation={[-0.019, -0.055, 0.109]}
        scale={[-0.047, -0.039, -0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle061.geometry}
        material={materials.Straws}
        position={[-0.727, 7.611, 2.156]}
        rotation={[-0.297, -0.001, 0.027]}
        scale={[-0.047, -0.039, -0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle062.geometry}
        material={materials.Straws}
        position={[-0.727, 7.729, 2.152]}
        rotation={[-0.017, -0.056, 0.148]}
        scale={[-0.047, -0.039, -0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle063.geometry}
        material={materials.Straws}
        position={[-0.68, 7.633, 2.167]}
        rotation={[-0.187, -0.048, -0.163]}
        scale={[-0.047, -0.039, -0.046]}
      />
      <group
        position={[1.125, 8.044, 1.996]}
        rotation={[0, 0, 1.548]}
        scale={[-0.03, -0.036, -0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle079.geometry}
          material={materials["Bottle lid"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle079_1.geometry}
          material={materials.Bottles}
        />
      </group>
      <group position={[0.409, 7.861, 0.714]} scale={[-0.03, -0.036, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle031_1.geometry}
          material={materials["Bottle lid"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle031_2.geometry}
          material={materials.Bottles}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle082.geometry}
        material={materials.Bowls}
        position={[0.481, 8.038, 0.718]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle083.geometry}
        material={materials.Bowls}
        position={[0.481, 8.063, 0.718]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle084.geometry}
        material={materials.Bowls}
        position={[0.481, 8.092, 0.718]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle085.geometry}
        material={materials.Bowls}
        position={[0.481, 8.121, 0.718]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle086.geometry}
        material={materials.Bowls}
        position={[0.481, 8.15, 0.718]}
        scale={-0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials.Arancini}
        position={[-0.559, 7.757, 2.496]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={materials.Arancini}
        position={[-0.559, 7.757, 2.577]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={materials.Arancini}
        position={[-0.501, 7.757, 2.534]}
        scale={0.04}
      />
      <group position={[-0.286, 7.74, 2.69]} scale={[-0.03, -0.036, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle060_1.geometry}
          material={materials.Bottles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle060_2.geometry}
          material={materials["Bottle lid"]}
        />
      </group>
      <group
        position={[1.125, 8.044, 2.108]}
        rotation={[0, 0, 1.548]}
        scale={[-0.03, -0.036, -0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle066_1.geometry}
          material={materials.Bottles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle066_2.geometry}
          material={materials["Bottle lid"]}
        />
      </group>
      <group position={[0.53, 7.861, 0.714]} scale={[-0.03, -0.036, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle077_1.geometry}
          material={materials.Bottles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle077_2.geometry}
          material={materials["Bottle lid"]}
        />
      </group>
      <group position={[0.658, 7.861, 0.714]} scale={[-0.03, -0.036, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle081.geometry}
          material={materials.Bottles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle081_1.geometry}
          material={materials["Bottle lid"]}
        />
      </group>
      <group position={[0.778, 7.861, 0.714]} scale={[-0.03, -0.036, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle082_1.geometry}
          material={materials.Bottles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle082_2.geometry}
          material={materials["Bottle lid"]}
        />
      </group>
      <group position={[0.905, 7.861, 0.714]} scale={[-0.03, -0.036, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle083_1.geometry}
          material={materials.Bottles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle083_2.geometry}
          material={materials["Bottle lid"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle071.geometry}
        material={materials["Mid Dark Metal"]}
        position={[1.885, 8.264, 0.341]}
        rotation={[-3.116, -0.184, -Math.PI]}
        scale={[0.023, 0.014, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle072.geometry}
        material={materials["Mid Dark Metal"]}
        position={[2.165, 8.259, 0.299]}
        rotation={[-3.133, -0.184, 3.138]}
        scale={[0.023, 0.014, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane288.geometry}
        // old Green Neon
        position={[0.729, 9.183, 3.557]}
        rotation={[1.574, -0.064, 0]}
        scale={0.266}
      >
        <meshBasicMaterial color={[ 50 / 28 , 205 / 28 , 50 / 28 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane290.geometry}
        // material={materials["Light Blue Neon"]}
        position={[0.023, 9.195, 3.557]}
        rotation={[1.574, 0.008, 0]}
        scale={0.266}
      >
         <meshBasicMaterial color={[ 0 , 149 / 28 , 249 / 28  ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane310.geometry}
        // material={materials["Cheese Light"]}
        position={[-0.689, 9.191, 3.557]}
        rotation={[1.574, 0.123, -0.001]}
        scale={0.266}
      >
        <meshBasicMaterial color={[ 255 / 28 , 233 / 28 , 0 / 28  ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert003.geometry}
        material={materials.Tubes}
        position={[2.468, 6.905, 1.977]}
      />
      <mesh
        onPointerEnter={() => {document.body.style.cursor = 'pointer'}}
        onPointerLeave={() => {document.body.style.cursor = 'default'}}
        castShadow
        receiveShadow
        geometry={nodes.Circle073.geometry}
        onClick={Speaker}
        material={materials["Mid Dark Metal"]}
        position={[-2.088, 8.525, 0.121]}
        rotation={[-0.503, -0.088, 1.671]}
        scale={[0.068, 0.047, 0.068]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube.geometry}
          material={materials["Metal Neon"]}
          position={[-0.014, 4.274, 0]}
          rotation={[0, 0, -1.587]}
          scale={[1.344, 0.938, 0.938]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roundcube001.geometry}
          material={materials["Metal Neon"]}
          position={[-0.618, -4.339, -0.531]}
          rotation={[0, 0, -1.587]}
          scale={[1.344, 0.938, 0.938]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle074.geometry}
            material={materials["Mid Dark Metal"]}
            position={[-2.945, 0.584, 0.54]}
            rotation={[-2.139, 0.051, -1.318]}
            scale={[1.066, 0.744, 1.066]}
          />
        </mesh>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert005.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-2.081, 8.196, 0.498]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle075.geometry}
        material={materials.Tubes}
        position={[0.56, 6.645, 2.175]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle076.geometry}
        material={materials.Tubes}
        position={[-1.345, 6.645, 2.175]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane311.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-2.08, 8.528, 0.096]}
        scale={[-0.023, -0.09, -0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane312.geometry}
        material={materials.Furniture}
        position={[-0.896, 7.143, 0.491]}
        rotation={[1.566, 0, 0]}
        scale={[0.724, 0.724, 0.437]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube003.geometry}
        material={materials["Oven Chimney mid"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane313.geometry}
        material={materials["Oven Chimney"]}
        position={[-1.126, 7.707, 0.59]}
        scale={[-0.13, -0.099, -0.099]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane314.geometry}
        material={materials["Wood Table shop"]}
        position={[-1.347, 7.09, 1.19]}
        rotation={[1.572, 0, 0]}
        scale={[0.207, 0.207, 0.306]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane315.geometry}
        material={materials["Wood Table shop"]}
        position={[-0.898, 7.09, 1.19]}
        rotation={[1.572, 0, 0]}
        scale={[0.207, 0.207, 0.306]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane316.geometry}
        material={materials["Wood Table shop"]}
        position={[-0.413, 7.09, 1.19]}
        rotation={[1.572, 0, -Math.PI]}
        scale={[-0.207, -0.207, -0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane317.geometry}
        material={materials["Wood Table shop"]}
        position={[-0.413, 7.267, 1.19]}
        rotation={[1.572, 0, -Math.PI]}
        scale={[-0.207, -0.207, -0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane318.geometry}
        material={materials["Wood Table shop"]}
        position={[-0.413, 6.908, 1.19]}
        rotation={[1.572, 0, -Math.PI]}
        scale={[-0.207, -0.207, -0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane320.geometry}
        position={[-1.12, 7.631, 0.922]}
        rotation={[1.581, 0, 0]}
        scale={[0.294, 0.162, 0.158]}
      >
        <meshBasicMaterial color={[ 251 / 45, 139 / 45, 35 / 45 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane321.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-0.073, 7.758, 0.291]}
        rotation={[-1.564, 0, 0]}
        scale={[1.287, 0.702, 0.693]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane322.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-1.177, 6.929, 0.382]}
        scale={[-0.098, -0.127, -0.098]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Futbol_Neon.geometry}
        // material={materials["Light Blue Neon"]}
        position={[0.016, 9.204, 3.567]}
        scale={0.125}
      >
       <meshBasicMaterial color={[ 0 , 149 / 28 , 249 / 28  ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cafe_Neon.geometry}
        // material={materials["Cheese Light"]}
        position={[-0.715, 9.251, 3.569]}
        rotation={[0, 0, 0.128]}
        scale={0.142}
      >
        <meshBasicMaterial color={[ 255 / 25 , 233 / 25 , 0   ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert004.geometry}
        // material={materials["Pizza Light"]}
        position={[0.851, 12.025, 1.925]}
        rotation={[-0.003, -0.192, -0.695]}
        scale={0.725}
      >
        <meshBasicMaterial color={[ 255 / 25  , 165 / 25 , 1    ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert007.geometry}
        // material={materials["Pepperoni Light"]}
        position={[0.851, 12.025, 1.925]}
        rotation={[-0.003, -0.192, -0.695]}
        scale={0.725}
      >
        <meshBasicMaterial color={[ 255 / 4, 1 / 4, 1 / 4 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert008.geometry}
        // material={materials["Pepperoni Light"]}
        position={[0.851, 12.025, 1.925]}
        rotation={[-0.003, -0.192, -0.695]}
        scale={0.725}
      >
        <meshBasicMaterial color={[ 255 / 4, 1 / 4, 1 / 4 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert009.geometry}
        // material={materials["Cheese Light"]}
        position={[0.851, 12.025, 1.925]}
        rotation={[-0.003, -0.192, -0.695]}
        scale={0.725}
      >
        <meshBasicMaterial color={[ 255/50, 255/50 ,0 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert010.geometry}
        // material={materials["Cheese Light"]}
        position={[0.851, 12.025, 1.925]}
        rotation={[-0.003, -0.192, -0.695]}
        scale={0.725}
      >
        <meshBasicMaterial color={[ 255/50, 255/50 ,0 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert011.geometry}
        // material={materials["Cheese Light"]}
        position={[0.851, 12.025, 1.925]}
        rotation={[-0.003, -0.192, -0.695]}
        scale={0.725}
      >
        <meshBasicMaterial color={[ 255/50, 255/50 ,0 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert027.geometry}
        // material={materials["Sign Light"]}
        position={[-2.231, 10.702, 1.505]}
        rotation={[3.007, -1.57, -3.012]}
        scale={0.081}
      >
        <meshBasicMaterial color={[ 251 / 25  , 255 / 25 , 255 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert033.geometry}
        // material={materials["Red Neon"]}
        position={[-2.219, 10.606, 1.855]}
        rotation={[1.298, -1.57, 2.964]}
        scale={[0.066, 0.116, 0.075]}
      >
        <meshBasicMaterial color={[ 255 / 15  , 5 / 15 , 5 / 15 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert012.geometry}
        material={materials["Cheese Light"]}
        position={[-2.229, 10.702, 1.505]}
        rotation={[-3.142, -1.57, -3.011]}
        scale={0.081}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        // material={materials["Pizza Light"]}
        position={[-2.587, 8.991, 0.922]}
        rotation={[1.572, 0.022, 1.571]}
        scale={0.429}
      >
        <meshBasicMaterial color={[ 18 / 4  , 10 / 4 , 5 / 4   ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane324.geometry}
        material={materials.Aircon}
        position={[2.344, 8.804, 1.093]}
        rotation={[0, 0, 1.57]}
        scale={[0.208, 0.249, 0.297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane326.geometry}
        material={materials["Signs Wood"]}
        position={[0.714, 9.742, 1.614]}
        rotation={[0, -0.203, 0]}
        scale={[0.104, 0.104, 0.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert013.geometry}
        // material={materials["Cheese Light"]}
        position={[-2.231, 10.702, 1.505]}
        rotation={[3.007, -1.57, -3.012]}
        scale={0.081}
      >
        <meshBasicMaterial color={[ 255 / 25 , 233 / 25 , 0   ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert020.geometry}
        // material={materials["Blue Neon"]}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      >
        <meshBasicMaterial color={[ 5 / 25  , 5 / 25 , 255 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane337.geometry}
        material={materials.Aircon}
        position={[2.344, 8.263, 1.093]}
        rotation={[0, 0, 1.57]}
        scale={[0.208, 0.249, 0.297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle100.geometry}
        material={materials.Tubes}
        position={[0.56, 6.645, 1.315]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle101.geometry}
        material={materials.Tubes}
        position={[-1.345, 6.645, 1.315]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube004.geometry}
        material={materials["Oven Chimney"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube005.geometry}
        material={materials["Oven Chimney mid"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube006.geometry}
        material={materials["Oven Chimney"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube007.geometry}
        material={materials["Oven Chimney mid"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube008.geometry}
        material={materials["Oven Chimney"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube009.geometry}
        material={materials["Oven Chimney mid"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube010.geometry}
        material={materials["Oven Chimney"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube011.geometry}
        material={materials["Oven Chimney mid"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube012.geometry}
        material={materials["Oven Chimney"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube013.geometry}
        material={materials["Oven Chimney mid"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube014.geometry}
        material={materials["Oven Chimney"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube015.geometry}
        material={materials["Oven Chimney mid"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube016.geometry}
        material={materials["Oven Chimney"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube017.geometry}
        material={materials["Oven Chimney"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube018.geometry}
        material={materials["Oven Chimney mid"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube019.geometry}
        material={materials["Oven Chimney"]}
        position={[-1.123, 7.484, 0.742]}
        scale={0.379}
      />
      <mesh
        castShadow
        receiveShadow
        // geometry={nodes.Big_Display.geometry}
        // material={materials["window glass"]}
        // position={[-0.073, 7.758, 0.291]}
        rotation={[-1.564, 0, 0]}
        scale={[1.287, 0.702, 0.693]}
      />
      <Html
            transform
            distanceFactor={ 3.3 }
            position={[-0.073, 7.730, -0.01]}
            rotation-y={ - 9.43 }
            occlude="blending"
            scale={[1, 1, 1]}
        >
          <BigScreen ref={grandeDisplay} />
            
      </Html>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane345.geometry}
        material={materials["Wood Table shop"]}
        position={[-0.896, 7.143, 0.491]}
        rotation={[1.566, 0, 0]}
        scale={[0.724, 0.724, 0.437]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert030.geometry}
        material={materials["Red Neon"]}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert031.geometry}
        material={materials["Red Neon"]}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert032.geometry}
        material={materials["Red Neon"]}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert034.geometry}
        material={materials["Red Neon"]}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert035.geometry}
        material={materials["Red Neon"]}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert036.geometry}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      >
        <meshBasicMaterial color={[ 251 / 25  , 255 / 25 , 255 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert037.geometry}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      >
        <meshBasicMaterial color={[ 251 / 25  , 255 / 25 , 255 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert038.geometry}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      >
        <meshBasicMaterial color={[ 251 / 25  , 255 / 25 , 255 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert039.geometry}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      >
        <meshBasicMaterial color={[ 251 / 25  , 255 / 25 , 255 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert040.geometry}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      >
        <meshBasicMaterial color={[ 251 / 25  , 255 / 25 , 255 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert041.geometry}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      >
        <meshBasicMaterial color={[ 251 / 25  , 255 / 25 , 255 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert042.geometry}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      >
        <meshBasicMaterial color={[ 251 / 25  , 255 / 25 , 255 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert043.geometry}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      >
        <meshBasicMaterial color={[ 251 / 25  , 255 / 25 , 255 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert044.geometry}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      >
        <meshBasicMaterial color={[ 251 / 25  , 255 / 25 , 255 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert045.geometry}
        position={[-2.22, 10.53, 1.715]}
        rotation={[0.875, -1.563, 0.875]}
        scale={0.085}
      >
        <meshBasicMaterial color={[ 251 / 25  , 255 / 25 , 255 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert046.geometry}
        material={materials["Light Blue Neon"]}
        position={[-2.231, 10.702, 1.505]}
        rotation={[3.007, -1.57, -3.012]}
        scale={0.081}
      >
        <meshBasicMaterial color={[ 0 , 149 / 25 , 249 / 25  ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert047.geometry}
        material={materials["Light Blue Neon"]}
        position={[-2.231, 10.702, 1.505]}
        rotation={[3.007, -1.57, -3.012]}
        scale={0.081}
      >
        <meshBasicMaterial color={[ 0 , 149 / 25 , 249 / 25  ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert048.geometry}
        position={[-2.219, 10.606, 1.855]}
        rotation={[1.298, -1.57, 2.964]}
        scale={[0.066, 0.116, 0.075]}
      >
        <meshBasicMaterial color={[ 5 / 25  , 255 / 25 , 5 / 25 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert049.geometry}
        position={[-2.219, 10.606, 1.855]}
        rotation={[1.298, -1.57, 2.964]}
        scale={[0.066, 0.116, 0.075]}
      >
        <meshBasicMaterial color={[ 251 / 25  , 255 / 25 , 255 / 25    ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane323.geometry}
        material={materials["Mid Dark Metal"]}
        position={[0.983, 6.929, 0.382]}
        scale={[-0.098, -0.127, -0.098]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane304.geometry}
        material={materials["Pizza Crust"]}
        position={[0.021, 7.508, 2.876]}
        rotation={[0.027, 0.48, -0.008]}
        scale={[0.128, 0.142, 0.144]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["Pizza Crust"]}
        position={[-0.086, 7.534, 2.796]}
        rotation={[0.01, 0.422, 1.565]}
        scale={0.009}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials["Pizza Crust"]}
        position={[-0.201, 7.535, 2.853]}
        rotation={[0.01, 0.422, 1.565]}
        scale={0.009}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane305.geometry}
        material={materials["Pizza Cheese"]}
        position={[0.017, 7.519, 2.869]}
        rotation={[0.008, 0.502, 0.009]}
        scale={[0.123, 0.125, 0.123]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle013.geometry}
        material={materials["Pepperoni Slice"]}
        position={[0.013, 7.521, 2.892]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle025.geometry}
        material={materials["Pepperoni Slice"]}
        position={[0.013, 7.523, 2.892]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle026.geometry}
        material={materials["Pepperoni Slice"]}
        position={[0.013, 7.523, 2.892]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle027.geometry}
        material={materials["Pepperoni Slice"]}
        position={[0.013, 7.523, 2.892]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle028.geometry}
        material={materials["Mushroom Slice"]}
        position={[0.013, 7.523, 2.892]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle029.geometry}
        material={materials["Mushroom Slice"]}
        position={[0.013, 7.523, 2.892]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle030.geometry}
        material={materials["Mushroom Slice"]}
        position={[0.013, 7.523, 2.892]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle031.geometry}
        material={materials["Spring Onion"]}
        position={[0.01, 7.521, 2.896]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle032.geometry}
        material={materials["Spring Onion"]}
        position={[0.041, 7.517, 3.015]}
        scale={0.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane306.geometry}
        material={materials["Pizza Cheese"]}
        position={[0.869, 7.52, 2.853]}
        rotation={[0.008, -0.364, 0.016]}
        scale={[0.123, 0.125, 0.123]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane307.geometry}
        material={materials["Pizza Crust"]}
        position={[0.861, 7.509, 2.861]}
        rotation={[0.026, -0.354, 0.013]}
        scale={[0.128, 0.142, 0.144]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials["Pizza Crust"]}
        position={[0.722, 7.535, 2.683]}
        rotation={[0.01, -0.407, 1.573]}
        scale={0.009}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle033.geometry}
        material={materials["Pepperoni Slice"]}
        position={[0.851, 7.521, 2.874]}
        rotation={[0, -0.739, 0]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle034.geometry}
        material={materials["Pepperoni Slice"]}
        position={[0.851, 7.524, 2.874]}
        rotation={[0, -0.739, 0]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle035.geometry}
        material={materials["Pepperoni Slice"]}
        position={[0.851, 7.524, 2.874]}
        rotation={[0, -0.739, 0]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle036.geometry}
        material={materials["Pepperoni Slice"]}
        position={[0.851, 7.523, 2.874]}
        rotation={[0, -0.739, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle037.geometry}
        material={materials["Pepperoni Slice"]}
        position={[0.894, 7.526, 2.821]}
        rotation={[0, -0.739, 0]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle038.geometry}
        material={materials["Spring Onion"]}
        position={[0.879, 7.521, 2.929]}
        scale={0.035}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials["Pizza Crust"]}
        position={[0.852, 7.534, 2.733]}
        rotation={[0.01, -0.399, 1.573]}
        scale={0.009}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle039.geometry}
        material={materials["Pepperoni Slice"]}
        position={[0.963, 7.526, 2.83]}
        rotation={[0, -0.739, 0]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle040.geometry}
        material={materials["Spring Onion"]}
        position={[0.811, 7.519, 2.902]}
        scale={0.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle041.geometry}
        material={materials["Spring Onion"]}
        position={[0.01, 7.525, 2.805]}
        rotation={[0, -0.288, 0]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle042.geometry}
        material={materials["Spring Onion"]}
        position={[-0.059, 7.521, 2.932]}
        rotation={[0, 0.122, 0]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle021.geometry}
        material={materials["Metal Neon"]}
        position={[-2.226, 8.98, 3.149]}
        rotation={[0, 0, 1.576]}
        scale={0.039}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle022.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-2.897, 8.658, 3.148]}
        scale={0.259}
      >
        <Sparkles
                count={20}  
                size={ 3 }
                position={[-0.3, -1.1, -0.2]}
                speed={0.3}
                noise={0.5}
                opacity={1}
            />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle023.geometry}
        position={[-2.897, 8.673, 3.148]}
        scale={0.175}
        >
          <meshBasicMaterial color={[ 14, 10, 5 ]} toneMapped={ false }/>
          
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle024.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-2.94, 8.979, 3.149]}
        rotation={[0, 0, 1.542]}
        scale={-0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle091.geometry}
        material={materials["Dark Metal"]}
        position={[1.695, 8.726, 0.545]}
        rotation={[1.464, -0.989, 3.024]}
        scale={[-0.018, -0.051, -0.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle102.geometry}
        material={materials["Metal Neon"]}
        position={[0.064, 8.913, 2.836]}
        rotation={[0, 0, 1.576]}
        scale={0.039}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle103.geometry}
        material={materials["Mid Dark Metal"]}
        position={[-0.608, 8.591, 2.835]}
        scale={0.259}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle104.geometry}
        // material={materials.lamp}
        position={[-0.608, 8.606, 2.835]}
        scale={0.175}
      >
        <meshBasicMaterial color={[ 18 / 4 , 10 / 4 , 5 / 4  ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle105.geometry}
        material={materials["Metal Neon"]}
        position={[1.069, 8.913, 2.836]}
        rotation={[0, 0, 1.576]}
        scale={0.039}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle106.geometry}
        material={materials["Mid Dark Metal"]}
        position={[0.397, 8.591, 2.835]}
        scale={0.259}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle107.geometry}
        // material={materials.lamp}
        position={[0.397, 8.606, 2.835]}
        scale={0.175}
      >
        <meshBasicMaterial color={[ 18 / 4 , 10 / 4 , 5 / 4  ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        position={[-3.447, 7.177, 2.244]}
        rotation={[0, 0, 0.489]}
        scale={[0.044, 0.083, 0.084]}
      >
        <meshBasicMaterial color={[ 100 / 7, 10 / 7, 5 / 7 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        position={[-3.448, 7.177, 1.217]}
        rotation={[0, 0, 0.489]}
        scale={[0.044, 0.083, 0.084]}
      >
        <meshBasicMaterial color={[ 100 / 7, 10 / 7, 5 / 7 ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gesture_Neon.geometry}
        position={[0.665, 9.267, 3.573]}
        rotation={[0.016, -0.009, -0.067]}
        scale={0.223}
      >
        <meshBasicMaterial color={[ 50 / 28 , 205 / 28 , 50 / 28  ]} toneMapped={ false }/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane309.geometry}
        material={materials["Metal Neon"]}
        position={[0.724, 9.198, 3.556]}
        rotation={[1.588, -0.067, 0.009]}
        scale={0.307}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane287.geometry}
        material={materials["Metal Neon"]}
        position={[0.024, 9.205, 3.556]}
        rotation={[1.588, 0.003, 0.008]}
        scale={0.307}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane289.geometry}
        material={materials["Metal Neon"]}
        position={[-0.69, 9.205, 3.556]}
        rotation={[1.588, 0.115, 0.006]}
        scale={0.307}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert018.geometry}
        material={materials.Tubes}
        position={[2.478, 8.804, 0.82]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials.Aircon}
        position={[2.351, 8.797, 1.174]}
        rotation={[0, 0, -1.574]}
        scale={0.136}
      />
      <mesh
        ref={fan1}
        castShadow
        receiveShadow
        geometry={nodes.Fan_Upper.geometry}
        material={materials.Tubes}
        position={[2.545, 8.795, 1.173]}
        rotation={[0, 0, -1.569]}
        scale={[-0.1, -0.054, -0.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={materials.Aircon}
        position={[2.351, 8.256, 1.174]}
        rotation={[0, 0, -1.574]}
        scale={0.136}
      />
      <mesh
        ref={fan2}
        castShadow
        receiveShadow
        geometry={nodes.Fan_Lower.geometry}
        material={materials.Tubes}
        position={[2.545, 8.254, 1.173]}
        rotation={[0, 0, -1.569]}
        scale={[-0.1, -0.054, -0.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane338.geometry}
        material={materials.Aircon}
        position={[2.471, 8.854, 0.794]}
        rotation={[-Math.PI, 1.568, 1.577]}
        scale={[0.099, 0.082, 0.082]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane339.geometry}
        material={materials.Aircon}
        position={[2.471, 8.203, 0.794]}
        rotation={[-Math.PI, 1.568, 1.577]}
        scale={[0.099, 0.082, 0.082]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Mid Dark Metal"]}
        position={[0.002, 9.826, 0.865]}
        rotation={[-0.297, 0, 0]}
        scale={0.328}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Mid Dark Metal"]}
        position={[0.001, 9.682, 0.78]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.PanelAzul}
        position={[0.001, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials.PanelAzul}
        position={[0.001, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials.PanelAzul}
        position={[0.001, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials.PanelAzul}
        position={[0.001, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials.PanelAzul}
        position={[0.001, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials.PanelAzul}
        position={[0.001, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials.PanelAzul}
        position={[0.001, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials.PanelAzul}
        position={[0.001, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials["Mid Dark Metal"]}
        position={[1.003, 9.827, 0.865]}
        rotation={[-0.297, 0, 0]}
        scale={0.328}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials["Mid Dark Metal"]}
        position={[1.003, 9.682, 0.78]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials.PanelAzul}
        position={[1.003, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials.PanelAzul}
        position={[1.003, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials.PanelAzul}
        position={[1.003, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials.PanelAzul}
        position={[1.003, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials.PanelAzul}
        position={[1.003, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials.PanelAzul}
        position={[1.003, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials.PanelAzul}
        position={[1.003, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials.PanelAzul}
        position={[1.003, 9.444, 0.854]}
        rotation={[-0.302, 0, 0]}
        scale={0.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials.Tubes}
        position={[0.004, 10.126, 1.032]}
        rotation={[0.729, 0, 0]}
        scale={[0.052, 0.029, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials.Tubes}
        position={[0.965, 10.126, 1.032]}
        rotation={[0.729, 0, 0]}
        scale={[0.052, 0.029, 0.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert026.geometry}
        material={materials.Cables}
        position={[0.01, 10.099, 1.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert028.geometry}
        material={materials.Cables}
        position={[0.977, 10.099, 1.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert050.geometry}
        material={materials.Cables}
        position={[0.977, 10.099, 1.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert051.geometry}
        material={materials.Cables}
        position={[0.01, 10.099, 1.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary.geometry}
        material={materials.Cables}
        position={[-0.394, 6.271, 2.172]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary001.geometry}
        material={materials.Cables}
        position={[-0.404, 6.406, 2.172]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary002.geometry}
        material={materials.Cables}
        position={[-0.394, 6.271, 1.312]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert029.geometry}
        material={materials.Curtains}
        position={[1.679, 8.73, 0.584]}
        rotation={[0, 0.046, 0]}
      />
      </Float>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube055.geometry}
        material={materials["Marmol Ruins"]}
        position={[2.176, 0.167, -14.203]}
        rotation={[0, 1.05, 0]}
        scale={0.11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials["Marmol Ruins"]}
        position={[-15.693, 1.144, 13.362]}
        rotation={[Math.PI, -1.082, Math.PI]}
        scale={1.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials["Marmol Ruins"]}
        position={[-15.395, 0.167, 5.927]}
        rotation={[Math.PI, -0.021, Math.PI]}
        scale={0.112}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={materials["Marmol Ruins"]}
        position={[2.895, 0.264, 15.754]}
        scale={0.192}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube054.geometry}
        material={materials["Marmol Ruins"]}
        position={[-9.196, 0.167, 16.224]}
        rotation={[0, -1.303, 0]}
        scale={0.112}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube059.geometry}
        material={materials["Marmol Ruins"]}
        position={[-15.876, 0.214, 11.406]}
        rotation={[Math.PI, -1.109, Math.PI]}
        scale={0.136}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube061.geometry}
        material={materials["Marmol Ruins"]}
        position={[-16.083, 0.32, -4.115]}
        rotation={[Math.PI, -1.088, Math.PI]}
        scale={0.279}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube066.geometry}
        material={materials["Marmol Ruins"]}
        position={[13.449, 0.214, 9.532]}
        rotation={[Math.PI, -1.112, Math.PI]}
        scale={0.136}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle114.geometry}
        material={materials["Marmol Ruins"]}
        position={[-12.513, 16.332, -12.549]}
        rotation={[0, 0.582, 0]}
        scale={[7.064, 6.869, 6.892]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials["Marmol Ruins"]}
        position={[-12.462, 16.94, -12.556]}
        rotation={[0, 0.585, 0]}
        scale={[0.356, 0.06, 0.407]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials["Marmol Ruins"]}
        position={[-12.496, 2.216, -12.633]}
        rotation={[0, 0.589, 0]}
        scale={[1.149, 1, 0.695]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials["Marmol Ruins"]}
        position={[-12.461, 5.041, -12.524]}
        rotation={[0, 0.583, 0]}
        scale={0.876}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials["Marmol Ruins"]}
        position={[-12.461, 5.041, -12.524]}
        rotation={[0, 0.583, 0]}
        scale={0.876}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={materials["Marmol Ruins"]}
        position={[7.605, -4.354, 13.726]}
        rotation={[0.008, 0.744, -1.568]}
        scale={0.876}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={materials["Marmol Ruins"]}
        position={[7.179, -3.886, 14.093]}
        rotation={[0.008, 0.744, -1.671]}
        scale={0.876}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={materials["Marmol Ruins"]}
        position={[7.605, -4.354, 13.726]}
        rotation={[0.008, 0.744, -1.568]}
        scale={0.876}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={materials["Marmol Ruins"]}
        position={[7.605, -4.354, 13.726]}
        rotation={[0.008, 0.744, -1.568]}
        scale={0.876}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={materials["Marmol Ruins"]}
        position={[7.605, -4.354, 13.726]}
        rotation={[0.008, 0.744, -1.568]}
        scale={0.876}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane325.geometry}
        material={nodes.Plane325.material}
        position={[-17.561, 0.18, -9.972]}
        rotation={[0, 0.599, 0]}
        scale={[1, 1.439, 2.689]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane364.geometry}
        material={nodes.Plane364.material}
        position={[-7.698, 0.18, -15.743]}
        rotation={[0, 0.599, 0]}
        scale={[1, 1.439, 3.194]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane362.geometry}
        material={nodes.Plane362.material}
        position={[-17.338, 11.846, -9.318]}
        rotation={[0, 0.599, 0]}
        scale={[1, 1, 2.918]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane363.geometry}
        material={nodes.Plane363.material}
        position={[-7.668, 11.744, -15.764]}
        rotation={[0, 0.599, 0]}
        scale={[1, 1.171, 2.918]}
      />
      <mesh
        receiveShadow
        geometry={nodes.Plane361.geometry}
        material={materials.PisoMetal}
        position={[-0.123, 0.064, 1.649]}
        scale={21.388}
      />
    </group>
  );
}

