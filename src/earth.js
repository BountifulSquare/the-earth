import {
    AdditiveBlending,
    Mesh, MeshBasicMaterial, MeshStandardMaterial,
    SphereGeometry, Sprite, SpriteMaterial
} from "../vendors/three.module.js"

const earth = (texture) => {
    const geo = new SphereGeometry(1, 30, 30)
    const mat = new MeshBasicMaterial({
        map: texture
    })
    const mesh = new Mesh(geo, mat)
    mesh.rotation.x = -0.5
    mesh.scale.set(5, 5, 5)

    return mesh
}

const atmosphere = (texture, color, scale) => {
    const sprite = new Sprite(new SpriteMaterial({
        map: texture,
        blending: AdditiveBlending,
        transparent: true,
        color
    }))
    sprite.scale.set(scale, scale, scale)

    return sprite
}

export { earth, atmosphere }