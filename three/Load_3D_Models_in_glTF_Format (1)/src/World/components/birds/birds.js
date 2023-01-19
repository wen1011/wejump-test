import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.135.0/examples/jsm/loaders/GLTFLoader.js'

import { setupModel } from './setupModel.js'

async function loadBirds() {
    const loader = new GLTFLoader()

    const [parrotData] = await Promise.all([
        loader.loadAsync('./assets/models/office_computer.glb'),
        // loader.loadAsync('./assets/models/Flamingo.glb'),
        // loader.loadAsync('./assets/models/Stork.glb'),
    ])

    console.log('Squaaawk!', parrotData)

    const parrot = setupModel(parrotData)
    parrot.position.set(0, 0, 0)
    parrot.rotation.set(-45.5, 0, -0.5)
    parrot.scale.set(1, 1, 1)

    // const flamingo = setupModel(flamingoData)
    // flamingo.position.set(7.5, 0, -10)

    // const stork = setupModel(storkData)
    // stork.position.set(0, -2.5, -10)

    return {
        parrot,
        // flamingo,
        // stork,
    }
}

export { loadBirds }
