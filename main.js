import World from './src/_world.js'
import sky from './src/_sky.js'
import { CameraSwitch_dev, FirstPersonCamera, OrbitCamera } from './src/_camera.js'
import Transform_dev from './src/_transform.js'
import { Box, Sphere } from './src/_primitives.js'
import { Mesh, MeshStandardMaterial, SphereGeometry, TextureLoader } from './vendors/three.module.js'

window.ENV = 'dev'

;(function main() {
    const canvas = document.getElementById('canvas')
    const world = new World(canvas)
    const camera = new CameraSwitch_dev(canvas)

    const geo = new SphereGeometry(5, 30, 30)
    const mat = new MeshStandardMaterial({
        map: new TextureLoader().load('./assets/earth2.jpg')
    })
    const earth = new Mesh(geo, mat)
    world.addChildren(earth)

    function run() {
        world.render(camera.Object3D)
        requestAnimationFrame(run)
    }
    run()

    window.addEventListener('resize', () => {
        camera.updateAspect(window.innerWidth/window.innerHeight)
        world.setSize(window.innerWidth, window.innerHeight)
    })
})()