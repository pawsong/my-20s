// make sure the Math.sign defined, some browsers don't have it yet
if (Math.sign === undefined) {
  Math.sign = function(x){
          if( +x === x ) { // check if a number was given
                      return (x === 0) ? x : (x > 0) ? 1 : -1;
                          }
                              return NaN;
  }
}

function clamp(number,min, max) {
  return Math.min(Math.max(number, min), max);
}

function normalize(vec) {
  const mag = Math.sqrt(vec.x*vec.x+vec.y*vec.y);
  return {x:vec.x/mag, y:vec.y/mag};
}

// Returns a random integer from 0 to range - 1. or start to end if two parameters are given.
function randomInt(start,end) {
  if (end === undefined)
    return randomInt(0,start);
  else
    return Math.floor(Math.random() * (end-start)) + start;
}

// Same as randomInt, but returns a float
function randomFloat(start,end) {
  if (end === undefined)
    return randomFloat(0,start);
  else
    return Math.random() * (end-start) + start;;
}

export function randomSpread(center,spread) {
  return randomFloat(center-spread,center+spread);
}

export function random2DVec(center,spreadVec) {
  return {x:randomSpread(center.x,spreadVec.x),y:randomSpread(center.y,spreadVec.y)};
}

export function randomUnitVec(center,spread) {
  const angle = randomSpread(center,spread);
  return {x:Math.cos(angle),y:-Math.sin(angle)}
}

export function unitVec(angle) {
  return {x:Math.cos(angle),y:-Math.sin(angle)};
}

export function clone2DVec(vec) {
  return {x:vec.x,y:vec.y};
}

export function addVecs(vec1,vec2) {
  return {x:vec1.x+vec2.x,y:vec1.y+vec2.y};
}

function subVecs(vec1,vec2) {
  return {x:vec2.x-vec1.x,y:vec2.y-vec1.y};
}

export function scaleVec(vec,scalar) {
  return {x:vec.x*scalar,y:vec.y*scalar};
}

function vecDir(vec) {
  return Math.atan2(vec.y,vec.x);
}

function angleBetweenVecs(vec1,vec2) {
  return Math.PI - Math.abs(Math.abs(vecDir(vec1) - vecDir(vec2)) - Math.PI);
}
