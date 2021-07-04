import { BoxGeometry, CylinderGeometry, Mesh, MeshStandardMaterial, SphereGeometry } from '../vendors/three.module.js'

const box = new BoxGeometry()
const sphere = new SphereGeometry()
const cylinder = new CylinderGeometry()
const material = new MeshStandardMaterial()

const Box = (color) => {
    const mat = color ? new MeshStandardMaterial({color}) : material
    return new Mesh(box, mat)
}

const Sphere = (color) => {
    const mat = color ? new MeshStandardMaterial({color}) : material
    return new Mesh(sphere, mat)
}

const Cylinder = (color) => {
    const mat = color ? new MeshStandardMaterial({color}) : material
    return new Mesh(cylinder, mat)
}

export {
    Box,
    Sphere,
    Cylinder
}