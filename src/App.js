import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { Player } from './components/Player'
import { Vector3 } from 'three';
import { FPV } from './components/FPV';
function App() {

  // previous  sunPosition={[100,100, 20]}
  return (
    <>
      <Canvas>
        <Sky sunPosition={new Vector3(100,10,100)} /> 
        <ambientLight intensity={1} />
        <FPV />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
    </>
  );
}

export default App;
