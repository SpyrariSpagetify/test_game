
import * as me from 'melonjs/dist/melonjs.module.js';

export default class col extends me.Collectable{
  init = (x, y, settings) =>{
    // call the parent constructor
    this._super(me.Collectable, 'init', [x, y , settings]);

  }

  // this function is called by the engine, when
  // an object is touched by something (here collected)
  onCollision (response, other) {
    // do something when collected
    me.audio.play("cling", false);
    // make sure it cannot be collected "again"
    this.body.setCollisionMask(me.collision.types.NO_OBJECT);


    // remove it
    me.game.world.removeChild(this);

    return false
  }
}