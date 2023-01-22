import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { Player } from './components/Player'
import { Vector3 } from 'three';
import { FPV } from './components/FPV';
import { Cubes } from './components/Cubes';
import { TextureSelector } from './components/TextureSelector';

function App() {
  // previous  sunPosition={[100,100, 20]}
  // <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
  return (
    <>
      <Canvas>
        <Sky sunPosition={new Vector3(100,10,100)} /> 
        <ambientLight intensity={0.3} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <TextureSelector />
    </>
  );
}

export default App;
