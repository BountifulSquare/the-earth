import root from './src/_root.js'
import { CameraSwitch_dev } from './src/_camera.js'
import Transform_dev from './src/_transform.js'
import { Box, Sphere } from './src/_primitives.js'

(function main() {
    const canvas = document.getElementById('canvas')
    const { renderer, scene, stats } = root(canvas)
    const camera = new CameraSwitch_dev(canvas)
    const transform = new Transform_dev(camera, canvas)

    scene.add(transform.Object3D)

    function run() {
        renderer.render(scene, camera.Object3D)

        stats.update()
        requestAnimationFrame(run)
    }
    run()

    window.addEventListener('resize', () => {
        camera.updateAspect(window.innerWidth/window.innerHeight)
        renderer.setSize(window.innerWidth, window.innerHeight)
    })
})()