import {
    WebGLRenderer, Scene, GridHelper, AxesHelper,
    DirectionalLight, AmbientLight, sRGBEncoding
} from '../vendors/three.module.js'
import Stats from '../vendors/stats.module.js'

const root = (canvas) => {
    const renderer = new WebGLRenderer({ canvas, antialias: true })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.physicallyCorrectLights = true
    renderer.gammaFactor = 2.2
    renderer.outputEncoding = sRGBEncoding

    const dLight = new DirectionalLight(0xFFFFFF, 1)
    dLight.position.set(-5, 10, 0)
    const aLight = new AmbientLight(0xFFFFFF, 0.1)

    const grid = new GridHelper()
    const axes = new AxesHelper(10)

    const scene = new Scene()
    scene.add(dLight)
    scene.add(aLight)
    scene.add(grid)
    scene.add(axes)

    const stats = new Stats()
    document.body.appendChild(stats.dom)

    return {
        renderer,
        scene,
        stats
    }
}

export default root