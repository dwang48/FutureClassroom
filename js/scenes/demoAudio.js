export const init = async model =>{
    let cube = model.add('cube')
                    .add().audio('media/sound/drums.ogg')
                    .add().audio('media/sound/guitars.ogg');
    let x = 0;

    model.move(0,1.5,0).scale(.3).animate[()=>{
        cube.identity().move(Math.cos(model.time),1.5,0).scale(.2);

        //let m = cube.getGlobalMatrix();
        //if((x < -.1)!= (m[12] <-.1)) 
        cube.child(0).playAudio();
        //if((x > .1)!= (m[12] >.1)) 
        cube.child(1).playAudio();
        //x = m[12];
    }]
}