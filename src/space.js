import { Mesh, MeshBasicMaterial, PlaneGeometry } from "../vendors/three.module.js"

const space = (texture) => {
    const geo = new PlaneGeometry()
    const mat = new MeshBasicMaterial({
        map: texture
    })
    const mesh = new Mesh(geo, mat)
    mesh.rotation.x = -0.5
    mesh.scale.set(200, 200, 200)

    return mesh
}

export default space