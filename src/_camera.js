import { PerspectiveCamera } from "../vendors/three.module.js";
import { OrbitControls } from '../vendors/OrbitControls.js'

class Camera {
    constructor(canvas) {
        this._camera = new PerspectiveCamera(
            45,
            canvas.clientWidth / canvas.clientHeight,
            0.5,
            5000
        )
    }

    get Object3D() {
        return this._camera
    }

    updateAspect(aspect) {
        this._camera.aspect = aspect
        this._camera.updateProjectionMatrix()
    }
}

class OrbitCamera extends Camera {
    constructor(canvas) {
        super(canvas)
        this._camera.position.set(0, 15, 15)
        this._orbit = new OrbitControls(this._camera, canvas)
        this._orbit.update()
    }
}

export { OrbitCamera }