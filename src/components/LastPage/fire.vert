precision mediump float;

uniform vec2 u_resolution;

attribute vec2 a_position;
attribute vec4 a_color;
attribute vec2 a_texture_coord;

varying vec4 v_color;
varying vec2 v_texture_coord;

void main() {
  vec2 clipSpace = (a_position/u_resolution)*2.0 - vec2(1.0, -.5);
  gl_Position = vec4(clipSpace * vec2(1.0, -.5), 0, 1);
  v_color = a_color;
  v_texture_coord = a_texture_coord;
}
