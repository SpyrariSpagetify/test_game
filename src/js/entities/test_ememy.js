  import * as me from 'melonjs/dist/melonjs.module.js';
  import stuff from '../stuff';

  export default class vrag extends me.Entity {
    constructor  (x, y, settings)  {
      // define this here instead of tiled  

      // save the area size defined in Tiled
      var width = settings.width;
      var height = settings.height;

      // adjust the size setting information to match the sprite size
      // so that the entity object is created with the right size
      settings.framewidth  = 64;
      settings.frameheight = 64;

      settings.shapes[0] = new me.Rect(0, 0, settings.framewidth, settings.frameheight);

      super(x, y, settings);

      x = this.pos.x;
      this.startX = x;
      this.endX   = x + width - settings.framewidth
      this.pos.x  = x + width - settings.framewidth;

      this.walkLeft = false;

    
      this.body.force.set(settings.velX || 1, settings.velY || 1  );
      this.body.setMaxVelocity(settings.velX || 4, settings.velY || 1);
      this.isMovingEnemy = true;
      debugger
  }

    update(dt){
      if (this.alive) {
        if (this.walkLeft && this.pos.x <= this.startX) {
          this.walkLeft = false;
        }
        else if (!this.walkLeft && this.pos.x >= this.endX) {
          this.walkLeft = true;
          }

          // make it walk
          this.renderable.flipX(!this.walkLeft);
          this.body.vel.x =3 
          }
}

  onCollision (response, other) {
    if (response.b.body.collisionType !== me.collision.types.WORLD_SHAPE) {
      // res.y >0 means touched by something on the bottom
      // which mean at top position for this one
      if (this.alive && (response.overlapV.y > 0) && response.a.body.falling) {
        this.renderable.flicker(150);
      }
      return false;
    }
    // Make all other objects solid
    return true;
  } } 
  
    

