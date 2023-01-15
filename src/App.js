import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { Player } from './components/Player'
import { Vector3 } from 'three';
function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={new Vector3(100,10,100)} />// [100,100, 20] 
        <ambientLight intensity={0.5} />
        <Physics>
          <Ground />
          <Player />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
    </>
  );
}

export default App;
