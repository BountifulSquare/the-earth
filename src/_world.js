import {
    WebGLRenderer, Scene,
    DirectionalLight, AmbientLight, sRGBEncoding
} from '../vendors/three.module.js'

class World {
    constructor(canvas) {
        this._renderer = new WebGLRenderer({
            antialias: true
        })
        this._renderer.physicallyCorrectLights = true
        this._renderer.gammaFactor = 2.2
        this._renderer.gammaFactor = sRGBEncoding
        this._renderer.setSize(canvas.clientWidth, canvas.clientHeight)
        this._scene = new Scene()

        const dLight = new DirectionalLight(0xFFFFFF, 2)
        dLight.position.set(0, 10, 10)
        const aLight = new AmbientLight(0xFFFFFF, 0.5)

        this._scene.add(dLight)
        this._scene.add(aLight)

        canvas.appendChild(this._renderer.domElement)
    }

    addChildren(children) {
        if (Array.isArray(children) && children.length > 0) {

            children.forEach(c => {
                this._scene.add(c)
            })

        } else {

            this._scene.add(children)

        }
    }

    setSize(width, height) {
        this._renderer.setSize(width, height)
    }

    render(camera) {
        this._renderer.render(this._scene, camera)
    }
}

export default World