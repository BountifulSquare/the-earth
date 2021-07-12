import World from './src/_world.js'
import { OrbitCamera } from './src/_camera.js'
import { TextureLoader } from './vendors/three.module.js'

import { earth, atmosphere } from './src/earth.js'
import space from './src/space.js'

window.ENV = 'dev'

;(function main() {
    const canvas = document.getElementById('canvas')
    const world = new World(canvas)
    const camera = new OrbitCamera(canvas)

    const earthTexture = new TextureLoader().load('./assets/earth.jpg')
    const blueTexture = new TextureLoader().load('./assets/circle_05.png')
    const whiteTexture = new TextureLoader().load('./assets/circle_04.png')
    const spaceTexture = new TextureLoader().load('./assets/galaxy.jpg')

    const globe = earth(earthTexture)
    const blue = atmosphere(blueTexture, 0x6AA7FF, 30)
    const white = atmosphere(whiteTexture, 0xFFFFFF, 14)
    const space1 = space(spaceTexture)
    space1.position.set(100, -80, -80)
    const space2 = space(spaceTexture)
    space2.position.set(-100, -80, -80)

    world.addChildren(globe)
    world.addChildren(blue)
    world.addChildren(white)
    world.addChildren(space1)
    world.addChildren(space2)

    function run() {
        globe.rotation.y += 0.0015

        world.render(camera.Object3D)
        requestAnimationFrame(run)
    }
    run()

    window.addEventListener('resize', () => {
        camera.updateAspect(window.innerWidth/window.innerHeight)
        world.setSize(window.innerWidth, window.innerHeight)
    })
})()
  