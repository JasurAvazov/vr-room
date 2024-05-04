import 'aframe'
import 'aframe-extras'

function VRScene() {
  return (
    <a-scene vr-mode-ui="enabled: true">
      <a-sky color="#ECECEC"></a-sky>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="10" height="10" color="#7BC8A4"></a-plane>
      <a-entity movement-controls="fly: true speed: 0.5">
        <a-camera look-controls="reverseMouseDrag: false"></a-camera>
      </a-entity>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
    </a-scene>
  )
}

export default VRScene