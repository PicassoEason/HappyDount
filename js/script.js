/**
 * Base
 */
const canvas=document.querySelector('canvas.webgl')
/**
 * Scene
 */
const scene=new THREE.Scene()
/**
 * Size
 */
const sizes{
    width:window.inn
}



/**
 * Camera
 */
const camera=new THREE.PerspectiveCamera(35,sizes.width/sizes.height,0.1,1000)


/**
 * Renderer
 */
const renderer=new THREE.WebGLRenderer({
    canvas:canvas,
    antialias:true,
    alpha:true
})
renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRation(Math.min(window.devicePixelRatio,2))
renderer.render(scene,camera)
