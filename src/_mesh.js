import { BoxGeometry, CylinderGeometry, Mesh, MeshPhongMaterial, SphereGeometry } from '../vendors/three.module.js'

const Box = new Mesh(
    new BoxGeometry(),
    new MeshPhongMaterial()
)
Box.name = 'box'

const Sphere = new Mesh(
    new SphereGeometry(),
    new MeshPhongMaterial()
)
Sphere.name = 'sphere'

const Cylinder = new Mesh(
    new CylinderGeometry(),
    new MeshPhongMaterial()
)
Cylinder.name = 'cylinder'

export {
    Box,
    Sphere,
    Cylinder
}