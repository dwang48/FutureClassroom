import * as global from "../global.js";
import { Gltf2Node } from "../render/nodes/gltf2.js";
import { lcb, rcb } from '../handle_scenes.js';
//import * as THREE from 'https://unpkg.com/three/examples/jsm/loaders/GLTFLoader.js'
//import {GLTFLoader}
// import { jointMatrix } from "./handtrackingInput.js";
import * as cg from "../render/core/cg.js";
// import * as hw from '../render/handsWidget.js';

export const init = async model => {
    //define hud for note displaying
    let note = '';
    let label = model.add('label').color(0,0.8,0.8).flag('uTransparentTexture',0).scale(.1);
    let pos = model.add('label').color(0,0.8,0.8).flag('uTransparentTexture',0).scale(.1);
    
    


    //define guitar notes sound
    let m1 = new Audio('./media/sound/guitarSample/ (1).wav');
    let m2 = new Audio('./media/sound/guitarSample/ (2).wav');
    let m3 = new Audio('./media/sound/guitarSample/ (3).wav');
    let m4 = new Audio('./media/sound/guitarSample/ (4).wav');
    let m5 = new Audio('./media/sound/guitarSample/ (5).wav');
    let m6 = new Audio('./media/sound/guitarSample/ (6).wav');
    let m7 = new Audio('./media/sound/guitarSample/ (7).wav');
    let m8 = new Audio('./media/sound/guitarSample/ (8).wav');
    let m9 = new Audio('./media/sound/guitarSample/ (9).wav');
    let m10 = new Audio('./media/sound/guitarSample/ (10).wav');
    let m11 = new Audio('./media/sound/guitarSample/ (11).wav');
    let m12 = new Audio('./media/sound/guitarSample/ (12).wav');
    let m13 = new Audio('./media/sound/guitarSample/ (13).wav');
    let m14 = new Audio('./media/sound/guitarSample/ (14).wav');
    let m15 = new Audio('./media/sound/guitarSample/ (15).wav');
    let m16 = new Audio('./media/sound/guitarSample/ (16).wav');
    let m17 = new Audio('./media/sound/guitarSample/ (17).wav');
    let m18 = new Audio('./media/sound/guitarSample/ (18).wav');
    let m19 = new Audio('./media/sound/guitarSample/ (19).wav');
    let m20 = new Audio('./media/sound/guitarSample/ (20).wav');
    let m21 = new Audio('./media/sound/guitarSample/ (21).wav');
    let m22 = new Audio('./media/sound/guitarSample/ (22).wav');
    let m23 = new Audio('./media/sound/guitarSample/ (23).wav');
    let m24 = new Audio('./media/sound/guitarSample/ (24).wav');
    let m25 = new Audio('./media/sound/guitarSample/ (25).wav');
    let m26 = new Audio('./media/sound/guitarSample/ (26).wav');
    let m27 = new Audio('./media/sound/guitarSample/ (27).wav');
    let m28 = new Audio('./media/sound/guitarSample/ (28).wav');
    let m29 = new Audio('./media/sound/guitarSample/ (29).wav');
    let m30 = new Audio('./media/sound/guitarSample/ (30).wav');
    let m31 = new Audio('./media/sound/guitarSample/ (31).wav');
    let m32 = new Audio('./media/sound/guitarSample/ (32).wav');
    let m33 = new Audio('./media/sound/guitarSample/ (33).wav');
    let m34 = new Audio('./media/sound/guitarSample/ (34).wav');
    let m35 = new Audio('./media/sound/guitarSample/ (35).wav');
    let m36 = new Audio('./media/sound/guitarSample/ (36).wav');
    let m37 = new Audio('./media/sound/guitarSample/ (37).wav');
    let m38 = new Audio('./media/sound/guitarSample/ (38).wav');
    let m39 = new Audio('./media/sound/guitarSample/ (39).wav');
    let m40 = new Audio('./media/sound/guitarSample/ (40).wav');
    let m41 = new Audio('./media/sound/guitarSample/ (41).wav');
    let m42 = new Audio('./media/sound/guitarSample/ (42).wav');
    let m43 = new Audio('./media/sound/guitarSample/ (43).wav');
    let m44 = new Audio('./media/sound/guitarSample/ (44).wav');
    let m45 = new Audio('./media/sound/guitarSample/ (45).wav');
    let m46 = new Audio('./media/sound/guitarSample/ (46).wav');
    let m47 = new Audio('./media/sound/guitarSample/ (47).wav');

    let hands = window.clay.handsWidget;
    let pick = new Gltf2Node({ url: './media/gltf/guitar_pick/untitled.gltf' });
    let gibson = new Gltf2Node({ url: './media/gltf/gibson/untitled.gltf' });
    let amp = new Gltf2Node({url: './media/gltf/amp/untitled.gltf'});
    let room = new Gltf2Node({url:  "./media/gltf/environment/untitled.gltf"});
    //amp.addNode(gibson);
    gibson.matrix = [1,0,0,0, 0,0,1,0, 0,-1,0,0, 0,0,0,1];
    model.setTable(false);
    global.scene().addNode(new Gltf2Node({
        //url: "./media/gltf/60_fifth_ave/60_fifth_ave.gltf"
        url: "./media/gltf/environment/untitled.gltf"
     }));

     
    //global.gltfRoot.addNode(room);
    global.gltfRoot.addNode(pick);
    global.gltfRoot.addNode(amp);
    global.gltfRoot.addNode(gibson);
    //gibson = model.add();

    //1st string
    let s1f1 = model.add("cube");
    let s1f2 = model.add("cube");
    let s1f3 = model.add("cube");
    let s1f4 = model.add("cube");
    let s1f5 = model.add("cube");
    let s1f6 = model.add("cube");
    let s1f7 = model.add("cube");
    let s1f8 = model.add("cube");
    let s1f9 = model.add("cube");
    let s1f10 = model.add("cube");
    let s1f11 = model.add("cube");
    let s1f12 = model.add("cube");
    let s1f13 = model.add("cube");
    let s1f14 = model.add("cube");
    let s1f15 = model.add("cube");
    let s1f16 = model.add("cube");
    let s1f17 = model.add("cube");
    let s1f18 = model.add("cube");
    let s1f19 = model.add("cube");
    let s1f20 = model.add("cube");
    let s1f21 = model.add("cube");
    let s1f22 = model.add("cube");
    let s1 = model.add("cube");
    
    //2nd string
    let s2f1 = model.add("cube");
    let s2f2 = model.add("cube");
    let s2f3 = model.add("cube");
    let s2f4 = model.add("cube");
    let s2f5 = model.add("cube");
    let s2f6 = model.add("cube");
    let s2f7 = model.add("cube");
    let s2f8 = model.add("cube");
    let s2f9 = model.add("cube");
    let s2f10 = model.add("cube");
    let s2f11 = model.add("cube");
    let s2f12 = model.add("cube");
    let s2f13 = model.add("cube");
    let s2f14 = model.add("cube");
    let s2f15 = model.add("cube");
    let s2f16 = model.add("cube");
    let s2f17 = model.add("cube");
    let s2f18 = model.add("cube");
    let s2f19 = model.add("cube");
    let s2f20 = model.add("cube");
    let s2f21 = model.add("cube");
    let s2f22 = model.add("cube");
     let s2 = model.add("cube");
    

    //3rd string
    let s3f1 = model.add("cube");
    let s3f2 = model.add("cube");
    let s3f3 = model.add("cube");
    let s3f4 = model.add("cube");
    let s3f5 = model.add("cube");
    let s3f6 = model.add("cube");
    let s3f7 = model.add("cube");
    let s3f8 = model.add("cube");
    let s3f9 = model.add("cube");
    let s3f10 = model.add("cube");
    let s3f11 = model.add("cube");
    let s3f12 = model.add("cube");
    let s3f13 = model.add("cube");
    let s3f14 = model.add("cube");
    let s3f15 = model.add("cube");
    let s3f16 = model.add("cube");
    let s3f17 = model.add("cube");
    let s3f18 = model.add("cube");
    let s3f19 = model.add("cube");
    let s3f20 = model.add("cube");
    let s3f21 = model.add("cube");
    let s3f22 = model.add("cube");
     let s3 = model.add("cube");

    //4th string
    let s4f1 = model.add("cube");
    let s4f2 = model.add("cube");
    let s4f3 = model.add("cube");
    let s4f4 = model.add("cube");
    let s4f5 = model.add("cube");
    let s4f6 = model.add("cube");
    let s4f7 = model.add("cube");
    let s4f8 = model.add("cube");
    let s4f9 = model.add("cube");
    let s4f10 = model.add("cube");
    let s4f11 = model.add("cube");
    let s4f12 = model.add("cube");
    let s4f13 = model.add("cube");
    let s4f14 = model.add("cube");
    let s4f15 = model.add("cube");
    let s4f16 = model.add("cube");
    let s4f17 = model.add("cube");
    let s4f18 = model.add("cube");
    let s4f19 = model.add("cube");
    let s4f20 = model.add("cube");
    let s4f21 = model.add("cube");
    let s4f22 = model.add("cube");
     let s4 = model.add("cube");

    //5th String
    let s5f1 = model.add("cube");
    let s5f2 = model.add("cube");
    let s5f3 = model.add("cube");
    let s5f4 = model.add("cube");
    let s5f5 = model.add("cube");
    let s5f6 = model.add("cube");
    let s5f7 = model.add("cube");
    let s5f8 = model.add("cube");
    let s5f9 = model.add("cube");
    let s5f10 = model.add("cube");
    let s5f11 = model.add("cube");
    let s5f12 = model.add("cube");
    let s5f13 = model.add("cube");
    let s5f14 = model.add("cube");
    let s5f15 = model.add("cube");
    let s5f16 = model.add("cube");
    let s5f17 = model.add("cube");
    let s5f18 = model.add("cube");
    let s5f19 = model.add("cube");
    let s5f20 = model.add("cube");
    let s5f21 = model.add("cube");
    let s5f22 = model.add("cube");
     let s5 = model.add("cube");

    // 6th string
    let s6f1 = model.add("cube");
    let s6f2 = model.add("cube");
    let s6f3 = model.add("cube");
    let s6f4 = model.add("cube");
    let s6f5 = model.add("cube");
    let s6f6 = model.add("cube");
    let s6f7 = model.add("cube");
    let s6f8 = model.add("cube");
    let s6f9 = model.add("cube");
    let s6f10 = model.add("cube");
    let s6f11 = model.add("cube");
    let s6f12 = model.add("cube");
    let s6f13 = model.add("cube");
    let s6f14 = model.add("cube");
    let s6f15 = model.add("cube");
    let s6f16 = model.add("cube");
    let s6f17 = model.add("cube");
    let s6f18 = model.add("cube");
    let s6f19 = model.add("cube");
    let s6f20 = model.add("cube");
    let s6f21 = model.add("cube");
    let s6f22 = model.add("cube");
     let s6 = model.add("cube");


        amp.scale = [0.12,0.12,0.12];
        amp.translation = [0, -0.1, 0];

        pick.scale = [0.003,0.003,0.003];
        pick.rotation = [0,1.57,0];
        gibson.scale = [0.12,0.12,0.12];



    model.animate(() => {
        label.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.05);
        label.info("Note:" + note);
        
        
        //room.translation = [0,0,0];
        let r = hands.getMatrix('right', 1, 4);
        //Define finger tip matrices for five left fingers
        let l0 = hands.getMatrix('left',0, 4);
        let l1 = hands.getMatrix('left', 1, 4);
        let l2 = hands.getMatrix('left', 2, 4);
        let l3 = hands.getMatrix('left', 3, 4);
        let l4 = hands.getMatrix('left', 4, 4);

        //if(cg.mGrab(m,s1))


        gibson.translation = [window.avatars[window.playerid].headset.position.x-0.25, window.avatars[window.playerid].headset.position.y-0.4, window.avatars[window.playerid].headset.position.z+.17];
        pick.translation = [r[12],r[13],r[14]];

        let handx = r[12]-window.avatars[window.playerid].headset.position.x+0.25;
        let handy = r[13]-window.avatars[window.playerid].headset.position.y+0.4;
        let handz = r[14]-window.avatars[window.playerid].headset.position.z+0.17;
        //pos.setMatrix(model.viewMatrix()).move(0,0.2,-1).turnY(Math.PI).scale(.02);
        //pos.info('x:'+ handx.toString() +', y:' + handy.toString() + ', z: ' + handz.toString());
        
        //define hitboxes for string picking
        //1st string low E
        s1.setMatrix(gibson.matrix).move(.6,-.2,-.2).scale(0.02,0.02,0.02);
        s1f1.setMatrix(gibson.matrix).move(4.78,2.555,-1.815).scale(0.02,0.02,0.02);
        s1f2.setMatrix(gibson.matrix).move(4.78-0.044*6,2.555-0.029*6,-1.815+0.017*6).scale(0.02,0.02,0.02);
        s1f3.setMatrix(gibson.matrix).move(4.78-0.044*11.47,2.555-0.029*11.47,-1.815+0.017*11.47).scale(0.02,0.02,0.02);
        s1f4.setMatrix(gibson.matrix).move(4.78-0.044*16.94,2.555-0.029*16.94,-1.815+0.017*16.94).scale(0.02,0.02,0.02);
        s1f5.setMatrix(gibson.matrix).move(4.78-0.044*22,2.555-0.029*22,-1.815+0.017*22).scale(0.02,0.02,0.02);
        s1f6.setMatrix(gibson.matrix).move(4.78-0.044*26.9,2.555-0.029*26.9,-1.815+0.017*26.9).scale(0.02,0.02,0.02);
        s1f7.setMatrix(gibson.matrix).move(4.78-0.044*31,2.555-0.029*31,-1.815+0.017*31).scale(0.02,0.02,0.02);
        s1f8.setMatrix(gibson.matrix).move(4.78-0.044*35,2.555-0.029*35,-1.815+0.017*35).scale(0.02,0.02,0.02);
        s1f9.setMatrix(gibson.matrix).move(4.78-0.044*38.6,2.555-0.029*38.6,-1.815+0.017*38.6).scale(0.02,0.02,0.02);
        s1f10.setMatrix(gibson.matrix).move(4.78-0.044*42,2.555-0.029*42,-1.815+0.017*42).scale(0.02,0.02,0.02);
        s1f11.setMatrix(gibson.matrix).move(4.78-0.044*45.2,2.555-0.029*45.2,-1.815+0.017*45.2).scale(0.02,0.02,0.02);
        s1f12.setMatrix(gibson.matrix).move(4.78-0.044*48.2,2.555-0.029*48.2,-1.815+0.017*48.2).scale(0.02,0.02,0.02);
        s1f13.setMatrix(gibson.matrix).move(4.78-0.044*51,2.555-0.029*51,-1.815+0.017*51).scale(0.02,0.02,0.02);
        s1f14.setMatrix(gibson.matrix).move(4.78-0.044*53.6,2.555-0.029*53.6,-1.815+0.017*53.6).scale(0.02,0.02,0.02);
        s1f15.setMatrix(gibson.matrix).move(4.78-0.044*57,2.555-0.029*57,-1.815+0.017*57).scale(0.02,0.02,0.02);
        s1f16.setMatrix(gibson.matrix).move(4.78-0.044*60,2.555-0.029*60,-1.815+0.017*60).scale(0.02,0.02,0.02);
        s1f17.setMatrix(gibson.matrix).move(4.78-0.044*62.5,2.555-0.029*62.5,-1.815+0.017*62.5).scale(0.02,0.02,0.02);
        s1f18.setMatrix(gibson.matrix).move(4.78-0.044*64.8,2.555-0.029*64.8,-1.815+0.017*64.8).scale(0.02,0.02,0.02);
        s1f19.setMatrix(gibson.matrix).move(4.78-0.044*66.9,2.555-0.029*66.9,-1.815+0.017*66.9).scale(0.02,0.02,0.02);
        s1f20.setMatrix(gibson.matrix).move(4.78-0.044*68.9,2.555-0.029*68.9,-1.815+0.017*68.9).scale(0.02,0.02,0.02);
        s1f21.setMatrix(gibson.matrix).move(4.78-0.044*70.7,2.555-0.029*70.7,-1.815+0.017*70.7).scale(0.02,0.02,0.02);
        s1f22.setMatrix(gibson.matrix).move(4.78-0.044*72.2,2.555-0.029*72.2,-1.815+0.017*72.2).scale(0.02,0.02,0.02);
        if(cg.mGrab(l0,s1f1.getMatrix(),0.008)||cg.mGrab(l1,s1f1.getMatrix(),0.008)||cg.mGrab(l2,s1f1.getMatrix(),0.008)||cg.mGrab(l3,s1f1.getMatrix(),0.008)||cg.mGrab(l4,s1f1.getMatrix(),0.008)){
            m2.play();
            note = 'F';
        }
        if(cg.mGrab(l0,s1f2.getMatrix(),0.008)||cg.mGrab(l1,s1f2.getMatrix(),0.008)||cg.mGrab(l2,s1f2.getMatrix(),0.008)||cg.mGrab(l3,s1f2.getMatrix(),0.008)||cg.mGrab(l4,s1f2.getMatrix(),0.008)){
            m3.play();
            note = 'F#/Gb';
        }
        if(cg.mGrab(l0,s1f3.getMatrix(),0.008)||cg.mGrab(l1,s1f3.getMatrix(),0.008)||cg.mGrab(l2,s1f3.getMatrix(),0.008)||cg.mGrab(l3,s1f3.getMatrix(),0.008)||cg.mGrab(l4,s1f3.getMatrix(),0.008)){
            m4.play();
            note = 'G';
        }
        if(cg.mGrab(l0,s1f4.getMatrix(),0.008)||cg.mGrab(l1,s1f4.getMatrix(),0.008)||cg.mGrab(l2,s1f4.getMatrix(),0.008)||cg.mGrab(l3,s1f4.getMatrix(),0.008)||cg.mGrab(l4,s1f4.getMatrix(),0.008)){
            m5.play();
            note = 'G#/Ab';
        }
        if(cg.mGrab(l0,s1f5.getMatrix(),0.008)||cg.mGrab(l1,s1f5.getMatrix(),0.008)||cg.mGrab(l2,s1f5.getMatrix(),0.008)||cg.mGrab(l3,s1f5.getMatrix(),0.008)||cg.mGrab(l4,s1f5.getMatrix(),0.008)){
            m6.play();
            note = 'A';
        }
        if(cg.mGrab(l0,s1f6.getMatrix(),0.008)||cg.mGrab(l1,s1f6.getMatrix(),0.008)||cg.mGrab(l2,s1f6.getMatrix(),0.008)||cg.mGrab(l3,s1f6.getMatrix(),0.008)||cg.mGrab(l4,s1f6.getMatrix(),0.008)){
            m7.play();
            note = 'A#/Bb';
        }
        if(cg.mGrab(l0,s1f7.getMatrix(),0.008)||cg.mGrab(l1,s1f7.getMatrix(),0.008)||cg.mGrab(l2,s1f7.getMatrix(),0.008)||cg.mGrab(l3,s1f7.getMatrix(),0.008)||cg.mGrab(l4,s1f7.getMatrix(),0.008)){
            m8.play();
            note = 'B';
        }
        if(cg.mGrab(l0,s1f8.getMatrix(),0.008)||cg.mGrab(l1,s1f8.getMatrix(),0.008)||cg.mGrab(l2,s1f8.getMatrix(),0.008)||cg.mGrab(l3,s1f8.getMatrix(),0.008)||cg.mGrab(l4,s1f8.getMatrix(),0.008)){
            m9.play();
            note = 'C';
        }
        if(cg.mGrab(l0,s1f9.getMatrix(),0.008)||cg.mGrab(l1,s1f9.getMatrix(),0.008)||cg.mGrab(l2,s1f9.getMatrix(),0.008)||cg.mGrab(l3,s1f9.getMatrix(),0.008)||cg.mGrab(l4,s1f9.getMatrix(),0.008)){
            m10.play();
            note = 'C#/Db';
        }
        if(cg.mGrab(l0,s1f10.getMatrix(),0.008)||cg.mGrab(l1,s1f10.getMatrix(),0.008)||cg.mGrab(l2,s1f10.getMatrix(),0.008)||cg.mGrab(l3,s1f10.getMatrix(),0.008)||cg.mGrab(l4,s1f10.getMatrix(),0.008)){
            m11.play();
            note = 'D';
        }
        if(cg.mGrab(l0,s1f11.getMatrix(),0.008)||cg.mGrab(l1,s1f11.getMatrix(),0.008)||cg.mGrab(l2,s1f11.getMatrix(),0.008)||cg.mGrab(l3,s1f11.getMatrix(),0.008)||cg.mGrab(l4,s1f11.getMatrix(),0.008)){
            m12.play();
            note = 'D#/Eb';
        }
        if(cg.mGrab(l0,s1f12.getMatrix(),0.008)||cg.mGrab(l1,s1f12.getMatrix(),0.008)||cg.mGrab(l2,s1f12.getMatrix(),0.008)||cg.mGrab(l3,s1f12.getMatrix(),0.008)||cg.mGrab(l4,s1f12.getMatrix(),0.008)){
            m13.play();
            note = 'E';
        }
        if(cg.mGrab(l0,s1f13.getMatrix(),0.008)||cg.mGrab(l1,s1f13.getMatrix(),0.008)||cg.mGrab(l2,s1f13.getMatrix(),0.008)||cg.mGrab(l3,s1f13.getMatrix(),0.008)||cg.mGrab(l4,s1f13.getMatrix(),0.008)){
            m14.play();
            note = 'F';
        }
        if(cg.mGrab(l0,s1f14.getMatrix(),0.008)||cg.mGrab(l1,s1f14.getMatrix(),0.008)||cg.mGrab(l2,s1f14.getMatrix(),0.008)||cg.mGrab(l3,s1f14.getMatrix(),0.008)||cg.mGrab(l4,s1f14.getMatrix(),0.008)){
            m15.play();
            note = 'F#/Gb';
        }
        if(cg.mGrab(l0,s1f15.getMatrix(),0.008)||cg.mGrab(l1,s1f15.getMatrix(),0.008)||cg.mGrab(l2,s1f15.getMatrix(),0.008)||cg.mGrab(l3,s1f15.getMatrix(),0.008)||cg.mGrab(l4,s1f15.getMatrix(),0.008)){
            m16.play();
            note = 'G';
        }
        if(cg.mGrab(l0,s1f16.getMatrix(),0.008)||cg.mGrab(l1,s1f16.getMatrix(),0.008)||cg.mGrab(l2,s1f16.getMatrix(),0.008)||cg.mGrab(l3,s1f16.getMatrix(),0.008)||cg.mGrab(l4,s1f16.getMatrix(),0.008)){
            m17.play();
            note = 'G#/Ab';
        }
        if(cg.mGrab(l0,s1f17.getMatrix(),0.008)||cg.mGrab(l1,s1f17.getMatrix(),0.008)||cg.mGrab(l2,s1f17.getMatrix(),0.008)||cg.mGrab(l3,s1f17.getMatrix(),0.008)||cg.mGrab(l4,s1f17.getMatrix(),0.008)){
            m18.play();
            note = 'A';
        }
        if(cg.mGrab(l0,s1f18.getMatrix(),0.008)||cg.mGrab(l1,s1f18.getMatrix(),0.008)||cg.mGrab(l2,s1f18.getMatrix(),0.008)||cg.mGrab(l3,s1f18.getMatrix(),0.008)||cg.mGrab(l4,s1f18.getMatrix(),0.008)){
            m19.play();
            note = 'A#/Bb';
        }
        if(cg.mGrab(l0,s1f19.getMatrix(),0.008)||cg.mGrab(l1,s1f19.getMatrix(),0.008)||cg.mGrab(l2,s1f19.getMatrix(),0.008)||cg.mGrab(l3,s1f19.getMatrix(),0.008)||cg.mGrab(l4,s1f19.getMatrix(),0.008)){
            m20.play();
            note = 'B';
        }
        if(cg.mGrab(l0,s1f20.getMatrix(),0.008)||cg.mGrab(l1,s1f20.getMatrix(),0.008)||cg.mGrab(l2,s1f20.getMatrix(),0.008)||cg.mGrab(l3,s1f20.getMatrix(),0.008)||cg.mGrab(l4,s1f20.getMatrix(),0.008)){
            m21.play();
            note = 'C';
        }
        if(cg.mGrab(l0,s1f21.getMatrix(),0.008)||cg.mGrab(l1,s1f21.getMatrix(),0.008)||cg.mGrab(l2,s1f21.getMatrix(),0.008)||cg.mGrab(l3,s1f21.getMatrix(),0.008)||cg.mGrab(l4,s1f21.getMatrix(),0.008)){
            m22.play();
            note = 'C#/Db';
        }
        if(cg.mGrab(l0,s1f22.getMatrix(),0.008)||cg.mGrab(l1,s1f22.getMatrix(),0.008)||cg.mGrab(l2,s1f22.getMatrix(),0.008)||cg.mGrab(l3,s1f22.getMatrix(),0.008)||cg.mGrab(l4,s1f22.getMatrix(),0.008)){
            m23.play();
            note = 'D';
        }

        if(cg.mGrab(r,s1.getMatrix(),0.008)){
            m1.play();
            note = 'E';
        }



        //2nd string A
        s2.setMatrix(gibson.matrix).move(.6,-.26,-.19).scale(0.02,0.02,0.02);
        s2f1.setMatrix(gibson.matrix).move(4.78,2.555,-1.815).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f2.setMatrix(gibson.matrix).move(4.78-0.044*6,2.555-0.029*6,-1.815+0.017*6).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f3.setMatrix(gibson.matrix).move(4.78-0.044*11.47,2.555-0.029*11.47,-1.815+0.017*11.47).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f4.setMatrix(gibson.matrix).move(4.78-0.044*16.94,2.555-0.029*16.94,-1.815+0.017*16.94).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f5.setMatrix(gibson.matrix).move(4.78-0.044*22,2.555-0.029*22,-1.815+0.017*22).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f6.setMatrix(gibson.matrix).move(4.78-0.044*26.9,2.555-0.029*26.9,-1.815+0.017*26.9).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f7.setMatrix(gibson.matrix).move(4.78-0.044*31,2.555-0.029*31,-1.815+0.017*31).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f8.setMatrix(gibson.matrix).move(4.78-0.044*35,2.555-0.029*35,-1.815+0.017*35).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f9.setMatrix(gibson.matrix).move(4.78-0.044*38.6,2.555-0.029*38.6,-1.815+0.017*38.6).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f10.setMatrix(gibson.matrix).move(4.78-0.044*42,2.555-0.029*42,-1.815+0.017*42).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f11.setMatrix(gibson.matrix).move(4.78-0.044*45.2,2.555-0.029*45.2,-1.815+0.017*45.2).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f12.setMatrix(gibson.matrix).move(4.78-0.044*48.2,2.555-0.029*48.2,-1.815+0.017*48.2).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f13.setMatrix(gibson.matrix).move(4.78-0.044*51,2.555-0.029*51,-1.815+0.017*51).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f14.setMatrix(gibson.matrix).move(4.78-0.044*53.6,2.555-0.029*53.6,-1.815+0.017*53.6).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f15.setMatrix(gibson.matrix).move(4.78-0.044*57,2.555-0.029*57,-1.815+0.017*57).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f16.setMatrix(gibson.matrix).move(4.78-0.044*60,2.555-0.029*60,-1.815+0.017*60).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f17.setMatrix(gibson.matrix).move(4.78-0.044*62.5,2.555-0.029*62.5,-1.815+0.017*62.5).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f18.setMatrix(gibson.matrix).move(4.78-0.044*64.8,2.555-0.029*64.8,-1.815+0.017*64.8).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f19.setMatrix(gibson.matrix).move(4.78-0.044*66.9,2.555-0.029*66.9,-1.815+0.017*66.9).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f20.setMatrix(gibson.matrix).move(4.78-0.044*68.9,2.555-0.029*68.9,-1.815+0.017*68.9).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f21.setMatrix(gibson.matrix).move(4.78-0.044*70.7,2.555-0.029*70.7,-1.815+0.017*70.7).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        s2f22.setMatrix(gibson.matrix).move(4.78-0.044*72.2,2.555-0.029*72.2,-1.815+0.017*72.2).move(.14/5,-.23/5,.063/5).scale(0.02,0.02,0.02);
        
        if(cg.mGrab(l0,s2f1.getMatrix(),0.008)||cg.mGrab(l1,s2f1.getMatrix(),0.008)||cg.mGrab(l2,s2f1.getMatrix(),0.008)||cg.mGrab(l3,s2f1.getMatrix(),0.008)||cg.mGrab(l4,s2f1.getMatrix(),0.008)){
            m7.play();
            note = 'A#/Bb';
        }
        if(cg.mGrab(l0,s2f2.getMatrix(),0.008)||cg.mGrab(l1,s2f2.getMatrix(),0.008)||cg.mGrab(l2,s2f2.getMatrix(),0.008)||cg.mGrab(l3,s2f2.getMatrix(),0.008)||cg.mGrab(l4,s2f2.getMatrix(),0.008)){
            m8.play();
            note = 'B';
        }
        if(cg.mGrab(l0,s2f3.getMatrix(),0.008)||cg.mGrab(l1,s2f3.getMatrix(),0.008)||cg.mGrab(l2,s2f3.getMatrix(),0.008)||cg.mGrab(l3,s2f3.getMatrix(),0.008)||cg.mGrab(l4,s2f3.getMatrix(),0.008)){
            m9.play();
            note = 'C';
        }
        if(cg.mGrab(l0,s2f4.getMatrix(),0.008)||cg.mGrab(l1,s2f4.getMatrix(),0.008)||cg.mGrab(l2,s2f4.getMatrix(),0.008)||cg.mGrab(l3,s2f4.getMatrix(),0.008)||cg.mGrab(l4,s2f4.getMatrix(),0.008)){
            m10.play();
            note = 'C#/Db';
        }
        if(cg.mGrab(l0,s2f5.getMatrix(),0.008)||cg.mGrab(l1,s2f5.getMatrix(),0.008)||cg.mGrab(l2,s2f5.getMatrix(),0.008)||cg.mGrab(l3,s2f5.getMatrix(),0.008)||cg.mGrab(l4,s2f5.getMatrix(),0.008)){
            m11.play();
            note = 'D';
        }
        if(cg.mGrab(l0,s2f6.getMatrix(),0.008)||cg.mGrab(l1,s2f6.getMatrix(),0.008)||cg.mGrab(l2,s2f6.getMatrix(),0.008)||cg.mGrab(l3,s2f6.getMatrix(),0.008)||cg.mGrab(l4,s2f6.getMatrix(),0.008)){
            m12.play();
            note = 'D#/Eb';
        }
        if(cg.mGrab(l0,s2f7.getMatrix(),0.008)||cg.mGrab(l1,s2f7.getMatrix(),0.008)||cg.mGrab(l2,s2f7.getMatrix(),0.008)||cg.mGrab(l3,s2f7.getMatrix(),0.008)||cg.mGrab(l4,s2f7.getMatrix(),0.008)){
            m13.play();
            note = 'E';
        }
        if(cg.mGrab(l0,s2f8.getMatrix(),0.008)||cg.mGrab(l1,s2f8.getMatrix(),0.008)||cg.mGrab(l2,s2f8.getMatrix(),0.008)||cg.mGrab(l3,s2f8.getMatrix(),0.008)||cg.mGrab(l4,s2f8.getMatrix(),0.008)){
            m14.play();
            note = 'F';
        }
        if(cg.mGrab(l0,s2f9.getMatrix(),0.008)||cg.mGrab(l1,s2f9.getMatrix(),0.008)||cg.mGrab(l2,s2f9.getMatrix(),0.008)||cg.mGrab(l3,s2f9.getMatrix(),0.008)||cg.mGrab(l4,s2f9.getMatrix(),0.008)){
            m15.play();
            note = 'F#/Gb';
        }
        if(cg.mGrab(l0,s2f10.getMatrix(),0.008)||cg.mGrab(l1,s2f10.getMatrix(),0.008)||cg.mGrab(l2,s2f10.getMatrix(),0.008)||cg.mGrab(l3,s2f10.getMatrix(),0.008)||cg.mGrab(l4,s2f10.getMatrix(),0.008)){
            m16.play();
            note = 'G';
        }
        if(cg.mGrab(l0,s2f11.getMatrix(),0.008)||cg.mGrab(l1,s2f11.getMatrix(),0.008)||cg.mGrab(l2,s2f11.getMatrix(),0.008)||cg.mGrab(l3,s2f11.getMatrix(),0.008)||cg.mGrab(l4,s2f11.getMatrix(),0.008)){
            m17.play();
            note = 'G#/Ab';
        }
        if(cg.mGrab(l0,s2f12.getMatrix(),0.008)||cg.mGrab(l1,s2f12.getMatrix(),0.008)||cg.mGrab(l2,s2f12.getMatrix(),0.008)||cg.mGrab(l3,s2f12.getMatrix(),0.008)||cg.mGrab(l4,s2f12.getMatrix(),0.008)){
            m18.play();
            note = 'A';
        }
        if(cg.mGrab(l0,s2f13.getMatrix(),0.008)||cg.mGrab(l1,s2f13.getMatrix(),0.008)||cg.mGrab(l2,s2f13.getMatrix(),0.008)||cg.mGrab(l3,s2f13.getMatrix(),0.008)||cg.mGrab(l4,s2f13.getMatrix(),0.008)){
            m19.play();
            note = 'A#/Bb';
        }
        if(cg.mGrab(l0,s2f14.getMatrix(),0.008)||cg.mGrab(l1,s2f14.getMatrix(),0.008)||cg.mGrab(l2,s2f14.getMatrix(),0.008)||cg.mGrab(l3,s2f14.getMatrix(),0.008)||cg.mGrab(l4,s2f14.getMatrix(),0.008)){
            m20.play();
            note = 'B';
        }
        if(cg.mGrab(l0,s2f15.getMatrix(),0.008)||cg.mGrab(l1,s2f15.getMatrix(),0.008)||cg.mGrab(l2,s2f15.getMatrix(),0.008)||cg.mGrab(l3,s2f15.getMatrix(),0.008)||cg.mGrab(l4,s2f15.getMatrix(),0.008)){
            m21.play();
            note = 'C';
        }
        if(cg.mGrab(l0,s2f16.getMatrix(),0.008)||cg.mGrab(l1,s2f16.getMatrix(),0.008)||cg.mGrab(l2,s2f16.getMatrix(),0.008)||cg.mGrab(l3,s2f16.getMatrix(),0.008)||cg.mGrab(l4,s2f16.getMatrix(),0.008)){
            m22.play();
            note = 'C#/Db';
        }
        if(cg.mGrab(l0,s2f17.getMatrix(),0.008)||cg.mGrab(l1,s2f17.getMatrix(),0.008)||cg.mGrab(l2,s2f17.getMatrix(),0.008)||cg.mGrab(l3,s2f17.getMatrix(),0.008)||cg.mGrab(l4,s2f17.getMatrix(),0.008)){
            m23.play();
            note = 'D';
        }
        if(cg.mGrab(l0,s2f18.getMatrix(),0.008)||cg.mGrab(l1,s2f18.getMatrix(),0.008)||cg.mGrab(l2,s2f18.getMatrix(),0.008)||cg.mGrab(l3,s2f18.getMatrix(),0.008)||cg.mGrab(l4,s2f18.getMatrix(),0.008)){
            m24.play();
            note = 'D#/Eb';
        }
        if(cg.mGrab(l0,s2f19.getMatrix(),0.008)||cg.mGrab(l1,s2f19.getMatrix(),0.008)||cg.mGrab(l2,s2f19.getMatrix(),0.008)||cg.mGrab(l3,s2f19.getMatrix(),0.008)||cg.mGrab(l4,s2f19.getMatrix(),0.008)){
            m25.play();
            note = 'E';
        }
        if(cg.mGrab(l0,s2f20.getMatrix(),0.008)||cg.mGrab(l1,s2f20.getMatrix(),0.008)||cg.mGrab(l2,s2f20.getMatrix(),0.008)||cg.mGrab(l3,s2f20.getMatrix(),0.008)||cg.mGrab(l4,s2f20.getMatrix(),0.008)){
            m26.play();
            note = 'F';
        }
        if(cg.mGrab(l0,s2f21.getMatrix(),0.008)||cg.mGrab(l1,s2f21.getMatrix(),0.008)||cg.mGrab(l2,s2f21.getMatrix(),0.008)||cg.mGrab(l3,s2f21.getMatrix(),0.008)||cg.mGrab(l4,s2f21.getMatrix(),0.008)){
            m27.play();
            note = 'F#/Gb';
        }
        if(cg.mGrab(l0,s2f22.getMatrix(),0.008)||cg.mGrab(l1,s2f22.getMatrix(),0.008)||cg.mGrab(l2,s2f22.getMatrix(),0.008)||cg.mGrab(l3,s2f22.getMatrix(),0.008)||cg.mGrab(l4,s2f22.getMatrix(),0.008)){
            m28.play();
            note = 'G';
        }        

        if(cg.mGrab(r,s2.getMatrix(),0.008)){
            m6.play();
            note = 'A';
        }
        

        //3rd string D
        s3.setMatrix(gibson.matrix).move(.6,-.30,-.18).scale(0.02,0.02,0.02);
        s3f1.setMatrix(gibson.matrix).move(4.78,2.555,-1.815).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f2.setMatrix(gibson.matrix).move(4.78-0.044*6,2.555-0.029*6,-1.815+0.017*6).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f3.setMatrix(gibson.matrix).move(4.78-0.044*11.47,2.555-0.029*11.47,-1.815+0.017*11.47).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f4.setMatrix(gibson.matrix).move(4.78-0.044*16.94,2.555-0.029*16.94,-1.815+0.017*16.94).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f5.setMatrix(gibson.matrix).move(4.78-0.044*22,2.555-0.029*22,-1.815+0.017*22).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f6.setMatrix(gibson.matrix).move(4.78-0.044*26.9,2.555-0.029*26.9,-1.815+0.017*26.9).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f7.setMatrix(gibson.matrix).move(4.78-0.044*31,2.555-0.029*31,-1.815+0.017*31).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f8.setMatrix(gibson.matrix).move(4.78-0.044*35,2.555-0.029*35,-1.815+0.017*35).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f9.setMatrix(gibson.matrix).move(4.78-0.044*38.6,2.555-0.029*38.6,-1.815+0.017*38.6).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f10.setMatrix(gibson.matrix).move(4.78-0.044*42,2.555-0.029*42,-1.815+0.017*42).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f11.setMatrix(gibson.matrix).move(4.78-0.044*45.2,2.555-0.029*45.2,-1.815+0.017*45.2).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f12.setMatrix(gibson.matrix).move(4.78-0.044*48.2,2.555-0.029*48.2,-1.815+0.017*48.2).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f13.setMatrix(gibson.matrix).move(4.78-0.044*51,2.555-0.029*51,-1.815+0.017*51).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f14.setMatrix(gibson.matrix).move(4.78-0.044*53.6,2.555-0.029*53.6,-1.815+0.017*53.6).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f15.setMatrix(gibson.matrix).move(4.78-0.044*57,2.555-0.029*57,-1.815+0.017*57).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f16.setMatrix(gibson.matrix).move(4.78-0.044*60,2.555-0.029*60,-1.815+0.017*60).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f17.setMatrix(gibson.matrix).move(4.78-0.044*62.5,2.555-0.029*62.5,-1.815+0.017*62.5).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f18.setMatrix(gibson.matrix).move(4.78-0.044*64.8,2.555-0.029*64.8,-1.815+0.017*64.8).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f19.setMatrix(gibson.matrix).move(4.78-0.044*66.9,2.555-0.029*66.9,-1.815+0.017*66.9).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f20.setMatrix(gibson.matrix).move(4.78-0.044*68.9,2.555-0.029*68.9,-1.815+0.017*68.9).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f21.setMatrix(gibson.matrix).move(4.78-0.044*70.7,2.555-0.029*70.7,-1.815+0.017*70.7).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        s3f22.setMatrix(gibson.matrix).move(4.78-0.044*72.2,2.555-0.029*72.2,-1.815+0.017*72.2).move(.14*2/5,-.23*2/5,.063*2/5).scale(0.02,0.02,0.02);
        if(cg.mGrab(l0,s3f1.getMatrix(),0.008)||cg.mGrab(l1,s3f1.getMatrix(),0.008)||cg.mGrab(l2,s3f1.getMatrix(),0.008)||cg.mGrab(l3,s3f1.getMatrix(),0.008)||cg.mGrab(l4,s3f1.getMatrix(),0.008)){
            m12.play();
            note = 'D#/Eb';
        }
        if(cg.mGrab(l0,s3f2.getMatrix(),0.008)||cg.mGrab(l1,s3f2.getMatrix(),0.008)||cg.mGrab(l2,s3f2.getMatrix(),0.008)||cg.mGrab(l3,s3f2.getMatrix(),0.008)||cg.mGrab(l4,s3f2.getMatrix(),0.008)){
            m13.play();
            note = 'E';
        }
        if(cg.mGrab(l0,s3f3.getMatrix(),0.008)||cg.mGrab(l1,s3f3.getMatrix(),0.008)||cg.mGrab(l2,s3f3.getMatrix(),0.008)||cg.mGrab(l3,s3f3.getMatrix(),0.008)||cg.mGrab(l4,s3f3.getMatrix(),0.008)){
            m14.play();
            note = 'F';
        }
        if(cg.mGrab(l0,s3f4.getMatrix(),0.008)||cg.mGrab(l1,s3f4.getMatrix(),0.008)||cg.mGrab(l2,s3f4.getMatrix(),0.008)||cg.mGrab(l3,s3f4.getMatrix(),0.008)||cg.mGrab(l4,s3f4.getMatrix(),0.008)){
            m15.play();
            note = 'F#/Gb';
        }
        if(cg.mGrab(l0,s3f5.getMatrix(),0.008)||cg.mGrab(l1,s3f5.getMatrix(),0.008)||cg.mGrab(l2,s3f5.getMatrix(),0.008)||cg.mGrab(l3,s3f5.getMatrix(),0.008)||cg.mGrab(l4,s3f5.getMatrix(),0.008)){
            m16.play();
            note = 'G';
        }
        if(cg.mGrab(l0,s3f6.getMatrix(),0.008)||cg.mGrab(l1,s3f6.getMatrix(),0.008)||cg.mGrab(l2,s3f6.getMatrix(),0.008)||cg.mGrab(l3,s3f6.getMatrix(),0.008)||cg.mGrab(l4,s3f6.getMatrix(),0.008)){
            m17.play();
            note = 'G#/Ab';
        }
        if(cg.mGrab(l0,s3f7.getMatrix(),0.008)||cg.mGrab(l1,s3f7.getMatrix(),0.008)||cg.mGrab(l2,s3f7.getMatrix(),0.008)||cg.mGrab(l3,s3f7.getMatrix(),0.008)||cg.mGrab(l4,s3f7.getMatrix(),0.008)){
            m18.play();
            note = 'A';
        }
        if(cg.mGrab(l0,s3f8.getMatrix(),0.008)||cg.mGrab(l1,s3f8.getMatrix(),0.008)||cg.mGrab(l2,s3f8.getMatrix(),0.008)||cg.mGrab(l3,s3f8.getMatrix(),0.008)||cg.mGrab(l4,s3f8.getMatrix(),0.008)){
            m19.play();
            note = 'A#/Bb';
        }
        if(cg.mGrab(l0,s3f9.getMatrix(),0.008)||cg.mGrab(l1,s3f9.getMatrix(),0.008)||cg.mGrab(l2,s3f9.getMatrix(),0.008)||cg.mGrab(l3,s3f9.getMatrix(),0.008)||cg.mGrab(l4,s3f9.getMatrix(),0.008)){
            m20.play();
            note = 'B';
        }
        if(cg.mGrab(l0,s3f10.getMatrix(),0.008)||cg.mGrab(l1,s3f10.getMatrix(),0.008)||cg.mGrab(l2,s3f10.getMatrix(),0.008)||cg.mGrab(l3,s3f10.getMatrix(),0.008)||cg.mGrab(l4,s3f10.getMatrix(),0.008)){
            m21.play();
            note = 'C';
        }
        if(cg.mGrab(l0,s3f11.getMatrix(),0.008)||cg.mGrab(l1,s3f11.getMatrix(),0.008)||cg.mGrab(l2,s3f11.getMatrix(),0.008)||cg.mGrab(l3,s3f11.getMatrix(),0.008)||cg.mGrab(l4,s3f11.getMatrix(),0.008)){
            m22.play();
            note = 'C#/Db';
        }
        if(cg.mGrab(l0,s3f12.getMatrix(),0.008)||cg.mGrab(l1,s3f12.getMatrix(),0.008)||cg.mGrab(l2,s3f12.getMatrix(),0.008)||cg.mGrab(l3,s3f12.getMatrix(),0.008)||cg.mGrab(l4,s3f12.getMatrix(),0.008)){
            m23.play();
            note = 'D';
        }
        if(cg.mGrab(l0,s3f13.getMatrix(),0.008)||cg.mGrab(l1,s3f13.getMatrix(),0.008)||cg.mGrab(l2,s3f13.getMatrix(),0.008)||cg.mGrab(l3,s3f13.getMatrix(),0.008)||cg.mGrab(l4,s3f13.getMatrix(),0.008)){
            m24.play();
            note = 'D#/Eb';
        }
        if(cg.mGrab(l0,s3f14.getMatrix(),0.008)||cg.mGrab(l1,s3f14.getMatrix(),0.008)||cg.mGrab(l2,s3f14.getMatrix(),0.008)||cg.mGrab(l3,s3f14.getMatrix(),0.008)||cg.mGrab(l4,s3f14.getMatrix(),0.008)){
            m25.play();
            note = 'E';
        }
        if(cg.mGrab(l0,s3f15.getMatrix(),0.008)||cg.mGrab(l1,s3f15.getMatrix(),0.008)||cg.mGrab(l2,s3f15.getMatrix(),0.008)||cg.mGrab(l3,s3f15.getMatrix(),0.008)||cg.mGrab(l4,s3f15.getMatrix(),0.008)){
            m26.play();
            note = 'F';
        }
        if(cg.mGrab(l0,s3f16.getMatrix(),0.008)||cg.mGrab(l1,s3f16.getMatrix(),0.008)||cg.mGrab(l2,s3f16.getMatrix(),0.008)||cg.mGrab(l3,s3f16.getMatrix(),0.008)||cg.mGrab(l4,s3f16.getMatrix(),0.008)){
            m27.play();
            note = 'F#/Gb';
        }
        if(cg.mGrab(l0,s3f17.getMatrix(),0.008)||cg.mGrab(l1,s3f17.getMatrix(),0.008)||cg.mGrab(l2,s3f17.getMatrix(),0.008)||cg.mGrab(l3,s3f17.getMatrix(),0.008)||cg.mGrab(l4,s3f17.getMatrix(),0.008)){
            m28.play();
            note = 'G';
        }
        if(cg.mGrab(l0,s3f18.getMatrix(),0.008)||cg.mGrab(l1,s3f18.getMatrix(),0.008)||cg.mGrab(l2,s3f18.getMatrix(),0.008)||cg.mGrab(l3,s3f18.getMatrix(),0.008)||cg.mGrab(l4,s3f18.getMatrix(),0.008)){
            m29.play();
            note = 'G#/Ab';
        }
        if(cg.mGrab(l0,s3f19.getMatrix(),0.008)||cg.mGrab(l1,s3f19.getMatrix(),0.008)||cg.mGrab(l2,s3f19.getMatrix(),0.008)||cg.mGrab(l3,s3f19.getMatrix(),0.008)||cg.mGrab(l4,s3f19.getMatrix(),0.008)){
            m30.play();
            note = 'A';
        }
        if(cg.mGrab(l0,s3f20.getMatrix(),0.008)||cg.mGrab(l1,s3f20.getMatrix(),0.008)||cg.mGrab(l2,s3f20.getMatrix(),0.008)||cg.mGrab(l3,s3f20.getMatrix(),0.008)||cg.mGrab(l4,s3f20.getMatrix(),0.008)){
            m31.play();
            note = 'A#/Bb';
        }
        if(cg.mGrab(l0,s3f21.getMatrix(),0.008)||cg.mGrab(l1,s3f21.getMatrix(),0.008)||cg.mGrab(l2,s3f21.getMatrix(),0.008)||cg.mGrab(l3,s3f21.getMatrix(),0.008)||cg.mGrab(l4,s3f21.getMatrix(),0.008)){
            m32.play();
            note = 'B';
        }
        if(cg.mGrab(l0,s3f22.getMatrix(),0.008)||cg.mGrab(l1,s3f22.getMatrix(),0.008)||cg.mGrab(l2,s3f22.getMatrix(),0.008)||cg.mGrab(l3,s3f22.getMatrix(),0.008)||cg.mGrab(l4,s3f22.getMatrix(),0.008)){
            m33.play();
            note = 'C';
        }
        
        if(cg.mGrab(r,s3.getMatrix(),0.008)){
            m11.play();
            note = 'D';
        }
        

        //4th string G
        s4.setMatrix(gibson.matrix).move(.6,-.35,-.17).scale(0.02,0.02,0.02);
        s4f1.setMatrix(gibson.matrix).move(4.78,2.555,-1.815).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f2.setMatrix(gibson.matrix).move(4.78-0.044*6,2.555-0.029*6,-1.815+0.017*6).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f3.setMatrix(gibson.matrix).move(4.78-0.044*11.47,2.555-0.029*11.47,-1.815+0.017*11.47).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f4.setMatrix(gibson.matrix).move(4.78-0.044*16.94,2.555-0.029*16.94,-1.815+0.017*16.94).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f5.setMatrix(gibson.matrix).move(4.78-0.044*22,2.555-0.029*22,-1.815+0.017*22).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f6.setMatrix(gibson.matrix).move(4.78-0.044*26.9,2.555-0.029*26.9,-1.815+0.017*26.9).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f7.setMatrix(gibson.matrix).move(4.78-0.044*31,2.555-0.029*31,-1.815+0.017*31).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f8.setMatrix(gibson.matrix).move(4.78-0.044*35,2.555-0.029*35,-1.815+0.017*35).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f9.setMatrix(gibson.matrix).move(4.78-0.044*38.6,2.555-0.029*38.6,-1.815+0.017*38.6).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f10.setMatrix(gibson.matrix).move(4.78-0.044*42,2.555-0.029*42,-1.815+0.017*42).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f11.setMatrix(gibson.matrix).move(4.78-0.044*45.2,2.555-0.029*45.2,-1.815+0.017*45.2).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f12.setMatrix(gibson.matrix).move(4.78-0.044*48.2,2.555-0.029*48.2,-1.815+0.017*48.2).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f13.setMatrix(gibson.matrix).move(4.78-0.044*51,2.555-0.029*51,-1.815+0.017*51).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f14.setMatrix(gibson.matrix).move(4.78-0.044*53.6,2.555-0.029*53.6,-1.815+0.017*53.6).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f15.setMatrix(gibson.matrix).move(4.78-0.044*57,2.555-0.029*57,-1.815+0.017*57).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f16.setMatrix(gibson.matrix).move(4.78-0.044*60,2.555-0.029*60,-1.815+0.017*60).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f17.setMatrix(gibson.matrix).move(4.78-0.044*62.5,2.555-0.029*62.5,-1.815+0.017*62.5).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f18.setMatrix(gibson.matrix).move(4.78-0.044*64.8,2.555-0.029*64.8,-1.815+0.017*64.8).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f19.setMatrix(gibson.matrix).move(4.78-0.044*66.9,2.555-0.029*66.9,-1.815+0.017*66.9).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f20.setMatrix(gibson.matrix).move(4.78-0.044*68.9,2.555-0.029*68.9,-1.815+0.017*68.9).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f21.setMatrix(gibson.matrix).move(4.78-0.044*70.7,2.555-0.029*70.7,-1.815+0.017*70.7).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);
        s4f22.setMatrix(gibson.matrix).move(4.78-0.044*72.2,2.555-0.029*72.2,-1.815+0.017*72.2).move(.14*3/5,-.23*3/5,.063*3/5).scale(0.02,0.02,0.02);

        if(cg.mGrab(l0,s4f1.getMatrix(),0.008)||cg.mGrab(l1,s4f1.getMatrix(),0.008)||cg.mGrab(l2,s4f1.getMatrix(),0.008)||cg.mGrab(l3,s4f1.getMatrix(),0.008)||cg.mGrab(l4,s4f1.getMatrix(),0.008)){
            m17.play();
            note = 'G#/Ab';
        }
        if(cg.mGrab(l0,s4f2.getMatrix(),0.008)||cg.mGrab(l1,s4f2.getMatrix(),0.008)||cg.mGrab(l2,s4f2.getMatrix(),0.008)||cg.mGrab(l3,s4f2.getMatrix(),0.008)||cg.mGrab(l4,s4f2.getMatrix(),0.008)){
            m18.play();
            note = 'A';
        }
        if(cg.mGrab(l0,s4f3.getMatrix(),0.008)||cg.mGrab(l1,s4f3.getMatrix(),0.008)||cg.mGrab(l2,s4f3.getMatrix(),0.008)||cg.mGrab(l3,s4f3.getMatrix(),0.008)||cg.mGrab(l4,s4f3.getMatrix(),0.008)){
            m19.play();
            note = 'A#/Bb';
        }
        if(cg.mGrab(l0,s4f4.getMatrix(),0.008)||cg.mGrab(l1,s4f4.getMatrix(),0.008)||cg.mGrab(l2,s4f4.getMatrix(),0.008)||cg.mGrab(l3,s4f4.getMatrix(),0.008)||cg.mGrab(l4,s4f4.getMatrix(),0.008)){
            m20.play();
            note = 'B';
        }
        if(cg.mGrab(l0,s4f5.getMatrix(),0.008)||cg.mGrab(l1,s4f5.getMatrix(),0.008)||cg.mGrab(l2,s4f5.getMatrix(),0.008)||cg.mGrab(l3,s4f5.getMatrix(),0.008)||cg.mGrab(l4,s4f5.getMatrix(),0.008)){
            m21.play();
            note = 'C';
        }
        if(cg.mGrab(l0,s4f6.getMatrix(),0.008)||cg.mGrab(l1,s4f6.getMatrix(),0.008)||cg.mGrab(l2,s4f6.getMatrix(),0.008)||cg.mGrab(l3,s4f6.getMatrix(),0.008)||cg.mGrab(l4,s4f6.getMatrix(),0.008)){
            m22.play();
            note = 'C#/Db';
        }
        if(cg.mGrab(l0,s4f7.getMatrix(),0.008)||cg.mGrab(l1,s4f7.getMatrix(),0.008)||cg.mGrab(l2,s4f7.getMatrix(),0.008)||cg.mGrab(l3,s4f7.getMatrix(),0.008)||cg.mGrab(l4,s4f7.getMatrix(),0.008)){
            m23.play();
            note = 'D';
        }
        if(cg.mGrab(l0,s4f8.getMatrix(),0.008)||cg.mGrab(l1,s4f8.getMatrix(),0.008)||cg.mGrab(l2,s4f8.getMatrix(),0.008)||cg.mGrab(l3,s4f8.getMatrix(),0.008)||cg.mGrab(l4,s4f8.getMatrix(),0.008)){
            m24.play();
            note = 'D#/Eb';
        }
        if(cg.mGrab(l0,s4f9.getMatrix(),0.008)||cg.mGrab(l1,s4f9.getMatrix(),0.008)||cg.mGrab(l2,s4f9.getMatrix(),0.008)||cg.mGrab(l3,s4f9.getMatrix(),0.008)||cg.mGrab(l4,s4f9.getMatrix(),0.008)){
            m25.play();
            note = 'E';
        }
        if(cg.mGrab(l0,s4f10.getMatrix(),0.008)||cg.mGrab(l1,s4f10.getMatrix(),0.008)||cg.mGrab(l2,s4f10.getMatrix(),0.008)||cg.mGrab(l3,s4f10.getMatrix(),0.008)||cg.mGrab(l4,s4f10.getMatrix(),0.008)){
            m26.play();
            note = 'F';
        }
        if(cg.mGrab(l0,s4f11.getMatrix(),0.008)||cg.mGrab(l1,s4f11.getMatrix(),0.008)||cg.mGrab(l2,s4f11.getMatrix(),0.008)||cg.mGrab(l3,s4f11.getMatrix(),0.008)||cg.mGrab(l4,s4f11.getMatrix(),0.008)){
            m27.play();
            note = 'F#/Gb';
        }
        if(cg.mGrab(l0,s4f12.getMatrix(),0.008)||cg.mGrab(l1,s4f12.getMatrix(),0.008)||cg.mGrab(l2,s4f12.getMatrix(),0.008)||cg.mGrab(l3,s4f12.getMatrix(),0.008)||cg.mGrab(l4,s4f12.getMatrix(),0.008)){
            m28.play();
            note = 'G';
        }
        if(cg.mGrab(l0,s4f13.getMatrix(),0.008)||cg.mGrab(l1,s4f13.getMatrix(),0.008)||cg.mGrab(l2,s4f13.getMatrix(),0.008)||cg.mGrab(l3,s4f13.getMatrix(),0.008)||cg.mGrab(l4,s4f13.getMatrix(),0.008)){
            m29.play();
            note = 'G#/Ab';
        }
        if(cg.mGrab(l0,s4f14.getMatrix(),0.008)||cg.mGrab(l1,s4f14.getMatrix(),0.008)||cg.mGrab(l2,s4f14.getMatrix(),0.008)||cg.mGrab(l3,s4f14.getMatrix(),0.008)||cg.mGrab(l4,s4f14.getMatrix(),0.008)){
            m30.play();
            note = 'A';
        }
        if(cg.mGrab(l0,s4f15.getMatrix(),0.008)||cg.mGrab(l1,s4f15.getMatrix(),0.008)||cg.mGrab(l2,s4f15.getMatrix(),0.008)||cg.mGrab(l3,s4f15.getMatrix(),0.008)||cg.mGrab(l4,s4f15.getMatrix(),0.008)){
            m31.play();
            note = 'A#/Bb';
        }
        if(cg.mGrab(l0,s4f16.getMatrix(),0.008)||cg.mGrab(l1,s4f16.getMatrix(),0.008)||cg.mGrab(l2,s4f16.getMatrix(),0.008)||cg.mGrab(l3,s4f16.getMatrix(),0.008)||cg.mGrab(l4,s4f16.getMatrix(),0.008)){
            m32.play();
            note = 'B';
        }
        if(cg.mGrab(l0,s4f17.getMatrix(),0.008)||cg.mGrab(l1,s4f17.getMatrix(),0.008)||cg.mGrab(l2,s4f17.getMatrix(),0.008)||cg.mGrab(l3,s4f17.getMatrix(),0.008)||cg.mGrab(l4,s4f17.getMatrix(),0.008)){
            m33.play();
            note = 'C';
        }

        if(cg.mGrab(l0,s4f18.getMatrix(),0.008)||cg.mGrab(l1,s4f18.getMatrix(),0.008)||cg.mGrab(l2,s4f18.getMatrix(),0.008)||cg.mGrab(l3,s4f18.getMatrix(),0.008)||cg.mGrab(l4,s4f18.getMatrix(),0.008)){
            m34.play();
            note = 'C#/Db';
        }
        if(cg.mGrab(l0,s4f19.getMatrix(),0.008)||cg.mGrab(l1,s4f19.getMatrix(),0.008)||cg.mGrab(l2,s4f19.getMatrix(),0.008)||cg.mGrab(l3,s4f19.getMatrix(),0.008)||cg.mGrab(l4,s4f19.getMatrix(),0.008)){
            m35.play();
            note = 'D';
        }
        if(cg.mGrab(l0,s4f20.getMatrix(),0.008)||cg.mGrab(l1,s4f20.getMatrix(),0.008)||cg.mGrab(l2,s4f20.getMatrix(),0.008)||cg.mGrab(l3,s4f20.getMatrix(),0.008)||cg.mGrab(l4,s4f20.getMatrix(),0.008)){
            m36.play();
            note = 'D#/Eb';
        }
        if(cg.mGrab(l0,s4f21.getMatrix(),0.008)||cg.mGrab(l1,s4f21.getMatrix(),0.008)||cg.mGrab(l2,s4f21.getMatrix(),0.008)||cg.mGrab(l3,s4f21.getMatrix(),0.008)||cg.mGrab(l4,s4f21.getMatrix(),0.008)){
            m37.play();
            note = 'E';
        }
        if(cg.mGrab(l0,s4f22.getMatrix(),0.008)||cg.mGrab(l1,s4f22.getMatrix(),0.008)||cg.mGrab(l2,s4f22.getMatrix(),0.008)||cg.mGrab(l3,s4f22.getMatrix(),0.008)||cg.mGrab(l4,s4f22.getMatrix(),0.008)){
            m38.play();
            note = 'F';
        }

        if(cg.mGrab(r,s4.getMatrix(),0.008)){
            m16.play();
            note = 'G';
        }
        
        //5th string B
        s5.setMatrix(gibson.matrix).move(.6,-.40,-.16).scale(0.02,0.02,0.02);
        s5f1.setMatrix(gibson.matrix).move(4.78,2.555,-1.815).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f2.setMatrix(gibson.matrix).move(4.78-0.044*6,2.555-0.029*6,-1.815+0.017*6).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f3.setMatrix(gibson.matrix).move(4.78-0.044*11.47,2.555-0.029*11.47,-1.815+0.017*11.47).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f4.setMatrix(gibson.matrix).move(4.78-0.044*16.94,2.555-0.029*16.94,-1.815+0.017*16.94).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f5.setMatrix(gibson.matrix).move(4.78-0.044*22,2.555-0.029*22,-1.815+0.017*22).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f6.setMatrix(gibson.matrix).move(4.78-0.044*26.9,2.555-0.029*26.9,-1.815+0.017*26.9).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f7.setMatrix(gibson.matrix).move(4.78-0.044*31,2.555-0.029*31,-1.815+0.017*31).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f8.setMatrix(gibson.matrix).move(4.78-0.044*35,2.555-0.029*35,-1.815+0.017*35).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f9.setMatrix(gibson.matrix).move(4.78-0.044*38.6,2.555-0.029*38.6,-1.815+0.017*38.6).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f10.setMatrix(gibson.matrix).move(4.78-0.044*42,2.555-0.029*42,-1.815+0.017*42).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f11.setMatrix(gibson.matrix).move(4.78-0.044*45.2,2.555-0.029*45.2,-1.815+0.017*45.2).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f12.setMatrix(gibson.matrix).move(4.78-0.044*48.2,2.555-0.029*48.2,-1.815+0.017*48.2).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f13.setMatrix(gibson.matrix).move(4.78-0.044*51,2.555-0.029*51,-1.815+0.017*51).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f14.setMatrix(gibson.matrix).move(4.78-0.044*53.6,2.555-0.029*53.6,-1.815+0.017*53.6).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f15.setMatrix(gibson.matrix).move(4.78-0.044*57,2.555-0.029*57,-1.815+0.017*57).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f16.setMatrix(gibson.matrix).move(4.78-0.044*60,2.555-0.029*60,-1.815+0.017*60).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f17.setMatrix(gibson.matrix).move(4.78-0.044*62.5,2.555-0.029*62.5,-1.815+0.017*62.5).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f18.setMatrix(gibson.matrix).move(4.78-0.044*64.8,2.555-0.029*64.8,-1.815+0.017*64.8).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f19.setMatrix(gibson.matrix).move(4.78-0.044*66.9,2.555-0.029*66.9,-1.815+0.017*66.9).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f20.setMatrix(gibson.matrix).move(4.78-0.044*68.9,2.555-0.029*68.9,-1.815+0.017*68.9).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f21.setMatrix(gibson.matrix).move(4.78-0.044*70.7,2.555-0.029*70.7,-1.815+0.017*70.7).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        s5f22.setMatrix(gibson.matrix).move(4.78-0.044*72.2,2.555-0.029*72.2,-1.815+0.017*72.2).move(.14*4/5,-.23*4/5,.063*4/5).scale(0.02,0.02,0.02);
        if(cg.mGrab(l0,s5f1.getMatrix(),0.008)||cg.mGrab(l1,s5f1.getMatrix(),0.008)||cg.mGrab(l2,s5f1.getMatrix(),0.008)||cg.mGrab(l3,s5f1.getMatrix(),0.008)||cg.mGrab(l4,s5f1.getMatrix(),0.008)){
            m21.play();
            note = 'C';
        }
        if(cg.mGrab(l0,s5f2.getMatrix(),0.008)||cg.mGrab(l1,s5f2.getMatrix(),0.008)||cg.mGrab(l2,s5f2.getMatrix(),0.008)||cg.mGrab(l3,s5f2.getMatrix(),0.008)||cg.mGrab(l4,s5f2.getMatrix(),0.008)){
            m22.play();
            note = 'C#/Db';
        }
        if(cg.mGrab(l0,s5f3.getMatrix(),0.008)||cg.mGrab(l1,s5f3.getMatrix(),0.008)||cg.mGrab(l2,s5f3.getMatrix(),0.008)||cg.mGrab(l3,s5f3.getMatrix(),0.008)||cg.mGrab(l4,s5f3.getMatrix(),0.008)){
            m23.play();
            note = 'D';
        }
        if(cg.mGrab(l0,s5f4.getMatrix(),0.008)||cg.mGrab(l1,s5f4.getMatrix(),0.008)||cg.mGrab(l2,s5f4.getMatrix(),0.008)||cg.mGrab(l3,s5f4.getMatrix(),0.008)||cg.mGrab(l4,s5f4.getMatrix(),0.008)){
            m24.play();
            note = 'D#/Eb';
        }
        if(cg.mGrab(l0,s5f5.getMatrix(),0.008)||cg.mGrab(l1,s5f5.getMatrix(),0.008)||cg.mGrab(l2,s5f5.getMatrix(),0.008)||cg.mGrab(l3,s5f5.getMatrix(),0.008)||cg.mGrab(l4,s5f5.getMatrix(),0.008)){
            m25.play();
            note = 'E';
        }
        if(cg.mGrab(l0,s5f6.getMatrix(),0.008)||cg.mGrab(l1,s5f6.getMatrix(),0.008)||cg.mGrab(l2,s5f6.getMatrix(),0.008)||cg.mGrab(l3,s5f6.getMatrix(),0.008)||cg.mGrab(l4,s5f6.getMatrix(),0.008)){
            m26.play();
            note = 'F';
        }
        if(cg.mGrab(l0,s5f7.getMatrix(),0.008)||cg.mGrab(l1,s5f7.getMatrix(),0.008)||cg.mGrab(l2,s5f7.getMatrix(),0.008)||cg.mGrab(l3,s5f7.getMatrix(),0.008)||cg.mGrab(l4,s5f7.getMatrix(),0.008)){
            m27.play();
            note = 'F#/Gb';
        }
        if(cg.mGrab(l0,s5f8.getMatrix(),0.008)||cg.mGrab(l1,s5f8.getMatrix(),0.008)||cg.mGrab(l2,s5f8.getMatrix(),0.008)||cg.mGrab(l3,s5f8.getMatrix(),0.008)||cg.mGrab(l4,s5f8.getMatrix(),0.008)){
            m28.play();
            note = 'G';
        }
        if(cg.mGrab(l0,s5f9.getMatrix(),0.008)||cg.mGrab(l1,s5f9.getMatrix(),0.008)||cg.mGrab(l2,s5f9.getMatrix(),0.008)||cg.mGrab(l3,s5f9.getMatrix(),0.008)||cg.mGrab(l4,s5f9.getMatrix(),0.008)){
            m29.play();
            note = 'G#/Ab';
        }
        if(cg.mGrab(l0,s5f10.getMatrix(),0.008)||cg.mGrab(l1,s5f10.getMatrix(),0.008)||cg.mGrab(l2,s5f10.getMatrix(),0.008)||cg.mGrab(l3,s5f10.getMatrix(),0.008)||cg.mGrab(l4,s5f10.getMatrix(),0.008)){
            m30.play();
            note = 'A';
        }
        if(cg.mGrab(l0,s5f11.getMatrix(),0.008)||cg.mGrab(l1,s5f11.getMatrix(),0.008)||cg.mGrab(l2,s5f11.getMatrix(),0.008)||cg.mGrab(l3,s5f11.getMatrix(),0.008)||cg.mGrab(l4,s5f11.getMatrix(),0.008)){
            m31.play();
            note = 'A#/Bb';
        }
        if(cg.mGrab(l0,s5f12.getMatrix(),0.008)||cg.mGrab(l1,s5f12.getMatrix(),0.008)||cg.mGrab(l2,s5f12.getMatrix(),0.008)||cg.mGrab(l3,s5f12.getMatrix(),0.008)||cg.mGrab(l4,s5f12.getMatrix(),0.008)){
            m32.play();
            note = 'B';
        }
        if(cg.mGrab(l0,s5f13.getMatrix(),0.008)||cg.mGrab(l1,s5f13.getMatrix(),0.008)||cg.mGrab(l2,s5f13.getMatrix(),0.008)||cg.mGrab(l3,s5f13.getMatrix(),0.008)||cg.mGrab(l4,s5f13.getMatrix(),0.008)){
            m33.play();
            note = 'C';
        }

        if(cg.mGrab(l0,s5f14.getMatrix(),0.008)||cg.mGrab(l1,s5f14.getMatrix(),0.008)||cg.mGrab(l2,s5f14.getMatrix(),0.008)||cg.mGrab(l3,s5f14.getMatrix(),0.008)||cg.mGrab(l4,s5f14.getMatrix(),0.008)){
            m34.play();
            note = 'C#/Db';
        }
        if(cg.mGrab(l0,s5f15.getMatrix(),0.008)||cg.mGrab(l1,s5f15.getMatrix(),0.008)||cg.mGrab(l2,s5f15.getMatrix(),0.008)||cg.mGrab(l3,s5f15.getMatrix(),0.008)||cg.mGrab(l4,s5f15.getMatrix(),0.008)){
            m35.play();
            note = 'D';
        }
        if(cg.mGrab(l0,s5f16.getMatrix(),0.008)||cg.mGrab(l1,s5f16.getMatrix(),0.008)||cg.mGrab(l2,s5f16.getMatrix(),0.008)||cg.mGrab(l3,s5f16.getMatrix(),0.008)||cg.mGrab(l4,s5f16.getMatrix(),0.008)){
            m36.play();
            note = 'D#/Eb';
        }
        if(cg.mGrab(l0,s5f17.getMatrix(),0.008)||cg.mGrab(l1,s5f17.getMatrix(),0.008)||cg.mGrab(l2,s5f17.getMatrix(),0.008)||cg.mGrab(l3,s5f17.getMatrix(),0.008)||cg.mGrab(l4,s5f17.getMatrix(),0.008)){
            m37.play();
            note = 'E';
        }
        if(cg.mGrab(l0,s5f18.getMatrix(),0.008)||cg.mGrab(l1,s5f18.getMatrix(),0.008)||cg.mGrab(l2,s5f18.getMatrix(),0.008)||cg.mGrab(l3,s5f18.getMatrix(),0.008)||cg.mGrab(l4,s5f18.getMatrix(),0.008)){
            m38.play();
            note = 'F';
        }
        if(cg.mGrab(l0,s5f19.getMatrix(),0.008)||cg.mGrab(l1,s5f19.getMatrix(),0.008)||cg.mGrab(l2,s5f19.getMatrix(),0.008)||cg.mGrab(l3,s5f19.getMatrix(),0.008)||cg.mGrab(l4,s5f19.getMatrix(),0.008)){
            m39.play();
            note = 'F#/Gb';
        }
        if(cg.mGrab(l0,s5f20.getMatrix(),0.008)||cg.mGrab(l1,s5f20.getMatrix(),0.008)||cg.mGrab(l2,s5f20.getMatrix(),0.008)||cg.mGrab(l3,s5f20.getMatrix(),0.008)||cg.mGrab(l4,s5f20.getMatrix(),0.008)){
            m40.play();
            note = 'G';
        }
        if(cg.mGrab(l0,s5f21.getMatrix(),0.008)||cg.mGrab(l1,s5f21.getMatrix(),0.008)||cg.mGrab(l2,s5f21.getMatrix(),0.008)||cg.mGrab(l3,s5f21.getMatrix(),0.008)||cg.mGrab(l4,s5f21.getMatrix(),0.008)){
            m41.play();
            note = 'G#/Ab';
        }
        if(cg.mGrab(l0,s5f22.getMatrix(),0.008)||cg.mGrab(l1,s5f22.getMatrix(),0.008)||cg.mGrab(l2,s5f22.getMatrix(),0.008)||cg.mGrab(l3,s5f22.getMatrix(),0.008)||cg.mGrab(l4,s5f22.getMatrix(),0.008)){
            m42.play();
            note = 'A';
        }
        
        if(cg.mGrab(r,s5.getMatrix(),0.008)){
            m20.play();
            note = 'B';
        }
        
        //6TH string E
        s6.setMatrix(gibson.matrix).move(.6,-.43,-.15).scale(0.02,0.02,0.02);
        s6f1.setMatrix(gibson.matrix).move(4.78,2.555,-1.815).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f2.setMatrix(gibson.matrix).move(4.78-0.044*6,2.555-0.029*6,-1.815+0.017*6).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f3.setMatrix(gibson.matrix).move(4.78-0.044*11.47,2.555-0.029*11.47,-1.815+0.017*11.47).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f4.setMatrix(gibson.matrix).move(4.78-0.044*16.94,2.555-0.029*16.94,-1.815+0.017*16.94).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f5.setMatrix(gibson.matrix).move(4.78-0.044*22,2.555-0.029*22,-1.815+0.017*22).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f6.setMatrix(gibson.matrix).move(4.78-0.044*26.9,2.555-0.029*26.9,-1.815+0.017*26.9).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f7.setMatrix(gibson.matrix).move(4.78-0.044*31,2.555-0.029*31,-1.815+0.017*31).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f8.setMatrix(gibson.matrix).move(4.78-0.044*35,2.555-0.029*35,-1.815+0.017*35).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f9.setMatrix(gibson.matrix).move(4.78-0.044*38.6,2.555-0.029*38.6,-1.815+0.017*38.6).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f10.setMatrix(gibson.matrix).move(4.78-0.044*42,2.555-0.029*42,-1.815+0.017*42).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f11.setMatrix(gibson.matrix).move(4.78-0.044*45.2,2.555-0.029*45.2,-1.815+0.017*45.2).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f12.setMatrix(gibson.matrix).move(4.78-0.044*48.2,2.555-0.029*48.2,-1.815+0.017*48.2).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f13.setMatrix(gibson.matrix).move(4.78-0.044*51,2.555-0.029*51,-1.815+0.017*51).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f14.setMatrix(gibson.matrix).move(4.78-0.044*53.6,2.555-0.029*53.6,-1.815+0.017*53.6).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f15.setMatrix(gibson.matrix).move(4.78-0.044*57,2.555-0.029*57,-1.815+0.017*57).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f16.setMatrix(gibson.matrix).move(4.78-0.044*60,2.555-0.029*60,-1.815+0.017*60).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f17.setMatrix(gibson.matrix).move(4.78-0.044*62.5,2.555-0.029*62.5,-1.815+0.017*62.5).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f18.setMatrix(gibson.matrix).move(4.78-0.044*64.8,2.555-0.029*64.8,-1.815+0.017*64.8).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f19.setMatrix(gibson.matrix).move(4.78-0.044*66.9,2.555-0.029*66.9,-1.815+0.017*66.9).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f20.setMatrix(gibson.matrix).move(4.78-0.044*68.9,2.555-0.029*68.9,-1.815+0.017*68.9).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f21.setMatrix(gibson.matrix).move(4.78-0.044*70.7,2.555-0.029*70.7,-1.815+0.017*70.7).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        s6f22.setMatrix(gibson.matrix).move(4.78-0.044*72.2,2.555-0.029*72.2,-1.815+0.017*72.2).move(.14,-.23,.063).scale(0.02,0.02,0.02);
        if(cg.mGrab(l0,s6f1.getMatrix(),0.008)||cg.mGrab(l1,s6f1.getMatrix(),0.008)||cg.mGrab(l2,s6f1.getMatrix(),0.008)||cg.mGrab(l3,s6f1.getMatrix(),0.008)||cg.mGrab(l4,s6f1.getMatrix(),0.008)){
            m26.play();
            note = 'F';
        }
        if(cg.mGrab(l0,s6f2.getMatrix(),0.008)||cg.mGrab(l1,s6f2.getMatrix(),0.008)||cg.mGrab(l2,s6f2.getMatrix(),0.008)||cg.mGrab(l3,s6f2.getMatrix(),0.008)||cg.mGrab(l4,s6f2.getMatrix(),0.008)){
            m27.play();
            note = 'F#/Gb';
        }
        if(cg.mGrab(l0,s6f3.getMatrix(),0.008)||cg.mGrab(l1,s6f3.getMatrix(),0.008)||cg.mGrab(l2,s6f3.getMatrix(),0.008)||cg.mGrab(l3,s6f3.getMatrix(),0.008)||cg.mGrab(l4,s6f3.getMatrix(),0.008)){
            m28.play();
            note = 'G';
        }
        if(cg.mGrab(l0,s6f4.getMatrix(),0.008)||cg.mGrab(l1,s6f4.getMatrix(),0.008)||cg.mGrab(l2,s6f4.getMatrix(),0.008)||cg.mGrab(l3,s6f4.getMatrix(),0.008)||cg.mGrab(l4,s6f4.getMatrix(),0.008)){
            m29.play();
            note = 'G#/Ab';
        }
        if(cg.mGrab(l0,s6f5.getMatrix(),0.008)||cg.mGrab(l1,s6f5.getMatrix(),0.008)||cg.mGrab(l2,s6f5.getMatrix(),0.008)||cg.mGrab(l3,s6f5.getMatrix(),0.008)||cg.mGrab(l4,s6f5.getMatrix(),0.008)){
            m30.play();
            note = 'A';
        }
        if(cg.mGrab(l0,s6f6.getMatrix(),0.008)||cg.mGrab(l1,s6f6.getMatrix(),0.008)||cg.mGrab(l2,s6f6.getMatrix(),0.008)||cg.mGrab(l3,s6f6.getMatrix(),0.008)||cg.mGrab(l4,s6f6.getMatrix(),0.008)){
            m31.play();
            note = 'A#/Bb';
        }
        if(cg.mGrab(l0,s6f7.getMatrix(),0.008)||cg.mGrab(l1,s6f7.getMatrix(),0.008)||cg.mGrab(l2,s6f7.getMatrix(),0.008)||cg.mGrab(l3,s6f7.getMatrix(),0.008)||cg.mGrab(l4,s6f7.getMatrix(),0.008)){
            m32.play();
            note = 'B';
        }
        if(cg.mGrab(l0,s6f8.getMatrix(),0.008)||cg.mGrab(l1,s6f8.getMatrix(),0.008)||cg.mGrab(l2,s6f8.getMatrix(),0.008)||cg.mGrab(l3,s6f8.getMatrix(),0.008)||cg.mGrab(l4,s6f8.getMatrix(),0.008)){
            m33.play();
            note = 'C';
        }
        if(cg.mGrab(l0,s6f9.getMatrix(),0.008)||cg.mGrab(l1,s6f9.getMatrix(),0.008)||cg.mGrab(l2,s6f9.getMatrix(),0.008)||cg.mGrab(l3,s6f9.getMatrix(),0.008)||cg.mGrab(l4,s6f9.getMatrix(),0.008)){
            m34.play();
            note = 'C#/Db';
        }
        if(cg.mGrab(l0,s6f10.getMatrix(),0.008)||cg.mGrab(l1,s6f10.getMatrix(),0.008)||cg.mGrab(l2,s6f10.getMatrix(),0.008)||cg.mGrab(l3,s6f10.getMatrix(),0.008)||cg.mGrab(l4,s6f10.getMatrix(),0.008)){
            m35.play();
            note = 'D';
        }
        if(cg.mGrab(l0,s6f11.getMatrix(),0.008)||cg.mGrab(l1,s6f11.getMatrix(),0.008)||cg.mGrab(l2,s6f11.getMatrix(),0.008)||cg.mGrab(l3,s6f11.getMatrix(),0.008)||cg.mGrab(l4,s6f11.getMatrix(),0.008)){
            m36.play();
            note = 'D#/Eb';
        }
        if(cg.mGrab(l0,s6f12.getMatrix(),0.008)||cg.mGrab(l1,s6f12.getMatrix(),0.008)||cg.mGrab(l2,s6f12.getMatrix(),0.008)||cg.mGrab(l3,s6f12.getMatrix(),0.008)||cg.mGrab(l4,s6f12.getMatrix(),0.008)){
            m37.play();
            note = 'E';
        }
        if(cg.mGrab(l0,s6f13.getMatrix(),0.008)||cg.mGrab(l1,s6f13.getMatrix(),0.008)||cg.mGrab(l2,s6f13.getMatrix(),0.008)||cg.mGrab(l3,s6f13.getMatrix(),0.008)||cg.mGrab(l4,s6f13.getMatrix(),0.008)){
            m38.play();
            note = 'F';
        }
        if(cg.mGrab(l0,s6f14.getMatrix(),0.008)||cg.mGrab(l1,s6f14.getMatrix(),0.008)||cg.mGrab(l2,s6f14.getMatrix(),0.008)||cg.mGrab(l3,s6f14.getMatrix(),0.008)||cg.mGrab(l4,s6f14.getMatrix(),0.008)){
            m39.play();
            note = 'F#/Gb';
        }
        if(cg.mGrab(l0,s6f15.getMatrix(),0.008)||cg.mGrab(l1,s6f15.getMatrix(),0.008)||cg.mGrab(l2,s6f15.getMatrix(),0.008)||cg.mGrab(l3,s6f15.getMatrix(),0.008)||cg.mGrab(l4,s6f15.getMatrix(),0.008)){
            m40.play();
            note = 'G';
        }
        if(cg.mGrab(l0,s6f16.getMatrix(),0.008)||cg.mGrab(l1,s6f16.getMatrix(),0.008)||cg.mGrab(l2,s6f16.getMatrix(),0.008)||cg.mGrab(l3,s6f16.getMatrix(),0.008)||cg.mGrab(l4,s6f16.getMatrix(),0.008)){
            m41.play();
            note = 'G#/Ab';
        }
        if(cg.mGrab(l0,s6f17.getMatrix(),0.008)||cg.mGrab(l1,s6f17.getMatrix(),0.008)||cg.mGrab(l2,s6f17.getMatrix(),0.008)||cg.mGrab(l3,s6f17.getMatrix(),0.008)||cg.mGrab(l4,s6f17.getMatrix(),0.008)){
            m42.play();
            note = 'A';
        }
        if(cg.mGrab(l0,s6f18.getMatrix(),0.008)||cg.mGrab(l1,s6f18.getMatrix(),0.008)||cg.mGrab(l2,s6f18.getMatrix(),0.008)||cg.mGrab(l3,s6f18.getMatrix(),0.008)||cg.mGrab(l4,s6f18.getMatrix(),0.008)){
            m43.play();
            note = 'A#/Bb';
        }
        if(cg.mGrab(l0,s6f19.getMatrix(),0.008)||cg.mGrab(l1,s6f19.getMatrix(),0.008)||cg.mGrab(l2,s6f19.getMatrix(),0.008)||cg.mGrab(l3,s6f19.getMatrix(),0.008)||cg.mGrab(l4,s6f19.getMatrix(),0.008)){
            m44.play();
            note = 'B';
        }
        if(cg.mGrab(l0,s6f20.getMatrix(),0.008)||cg.mGrab(l1,s6f20.getMatrix(),0.008)||cg.mGrab(l2,s6f20.getMatrix(),0.008)||cg.mGrab(l3,s6f20.getMatrix(),0.008)||cg.mGrab(l4,s6f20.getMatrix(),0.008)){
            m45.play();
            note = 'C';
        }
        if(cg.mGrab(l0,s6f21.getMatrix(),0.008)||cg.mGrab(l1,s6f21.getMatrix(),0.008)||cg.mGrab(l2,s6f21.getMatrix(),0.008)||cg.mGrab(l3,s6f21.getMatrix(),0.008)||cg.mGrab(l4,s6f21.getMatrix(),0.008)){
            m46.play();
            note = 'C#/Db';
        }
        if(cg.mGrab(l0,s6f22.getMatrix(),0.008)||cg.mGrab(l1,s6f22.getMatrix(),0.008)||cg.mGrab(l2,s6f22.getMatrix(),0.008)||cg.mGrab(l3,s6f22.getMatrix(),0.008)||cg.mGrab(l4,s6f22.getMatrix(),0.008)){
            m47.play();
            note = 'D';
        }
        if(cg.mGrab(r,s6.getMatrix(),0.008)){
            m25.play();
            note = 'E';
        }
    });
}