export default `#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
#define TAU 6.2831853071795865

uniform float u_time;
uniform vec2 u_translate;
uniform vec2 u_scale;
out vec4 fragmentColor;

void main() {
  float x = ( gl_FragCoord.x + u_translate.x ) * u_scale.x;
  float y = ( gl_FragCoord.y + u_translate.y ) * u_scale.y;

  // the curve is where this evaluates to 0, otherwise this is the "distance" to it
  float z = POLYNUMBER_FORMULA;

  // draw the curve as full green, tapering out to zero at a distance of 1
  float d = 1.0 - abs(z);
  fragmentColor.g = d < 0.0 ? 0.0 : pow(d, 16.0);

  // draw the fractional part of z as blue, the integer values can be seen as black-blue barriers
  fragmentColor.b = mod(z + u_time / 67.0, 1.0);

  // draw a sin wave through zed in red
  fragmentColor.r = sin(z * TAU - u_time / 11.0);
}
`