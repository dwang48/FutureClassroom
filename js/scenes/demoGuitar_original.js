import * as global from "../global.js";
import { Gltf2Node } from "../render/nodes/gltf2.js";
import { lcb, rcb } from '../handle_scenes.js';
//import * as THREE from 'https://unpkg.com/three/examples/jsm/loaders/GLTFLoader.js'
//import {GLTFLoader}

export const init = async model => {
    let gibson = new Gltf2Node({ url: './media/gltf/gibson/untitled.gltf' });
    let amp = new Gltf2Node({url: './media/gltf/amp/untitled.gltf'});
    //amp.addNode(gibson);
    gibson.matrix = [1,0,0,0, 0,0,1,0, 0,-1,0,0, 0,0,0,1];
    model.setTable(false);
    global.scene().addNode(new Gltf2Node({
        //url: "./media/gltf/60_fifth_ave/60_fifth_ave.gltf"
        url: "./media/gltf/room/untitled.gltf"
     }));

     

    
    global.gltfRoot.addNode(amp);
    global.gltfRoot.addNode(gibson);
    //gibson = model.add();

    //1st string
    //let s1f1 = model.add("cube");
    //let s1f2 = model.add("cube");
    // let s1f3 = model.add("cube");
    // let s1f4 = model.add("cube");
    // let s1f5 = model.add("cube");
    // let s1f6 = model.add("cube");
    // let s1f7 = model.add("cube");
    // let s1f8 = model.add("cube");
    // let s1f9 = model.add("cube");
    // let s1f10 = model.add("cube");
    // let s1f11 = model.add("cube");
    // let s1f12 = model.add("cube");
    // let s1f13 = model.add("cube");
    // let s1f14 = model.add("cube");
    // let s1f15 = model.add("cube");
    // let s1f16 = model.add("cube");
    // let s1f17 = model.add("cube");
    // let s1f18 = model.add("cube");
    // let s1f19 = model.add("cube");
    // let s1f20 = model.add("cube");
    // let s1f21 = model.add("cube");
    // let s1f22 = model.add("cube");
     let s1 = model.add("cube");
    
    //2nd string
    //let s2f1 = model.add("cube");
    //let s2f2 = model.add("cube");
    // let s2f3 = model.add("cube");
    // let s2f4 = model.add("cube");
    // let s2f5 = model.add("cube");
    // let s2f6 = model.add("cube");
    // let s2f7 = model.add("cube");
    // let s2f8 = model.add("cube");
    // let s2f9 = model.add("cube");
    // let s2f10 = model.add("cube");
    // let s2f11 = model.add("cube");
    // let s2f12 = model.add("cube");
    // let s2f13 = model.add("cube");
    // let s2f14 = model.add("cube");
    // let s2f15 = model.add("cube");
    // let s2f16 = model.add("cube");
    // let s2f17 = model.add("cube");
    // let s2f18 = model.add("cube");
    // let s2f19 = model.add("cube");
    // let s2f20 = model.add("cube");
    // let s2f21 = model.add("cube");
    // let s2f22 = model.add("cube");
     let s2 = model.add("cube");
    

    //3rd string
    // let s3f1 = model.add("cube");
    // let s3f2 = model.add("cube");
    // let s3f3 = model.add("cube");
    // let s3f4 = model.add("cube");
    // let s3f5 = model.add("cube");
    // let s3f6 = model.add("cube");
    // let s3f7 = model.add("cube");
    // let s3f8 = model.add("cube");
    // let s3f9 = model.add("cube");
    // let s3f10 = model.add("cube");
    // let s3f11 = model.add("cube");
    // let s3f12 = model.add("cube");
    // let s3f13 = model.add("cube");
    // let s3f14 = model.add("cube");
    // let s3f15 = model.add("cube");
    // let s3f16 = model.add("cube");
    // let s3f17 = model.add("cube");
    // let s3f18 = model.add("cube");
    // let s3f19 = model.add("cube");
    // let s3f20 = model.add("cube");
    // let s3f21 = model.add("cube");
    // let s3f22 = model.add("cube");
     let s3 = model.add("cube");

    //4th string
    // let s4f1 = model.add("cube");
    // let s4f2 = model.add("cube");
    // let s4f3 = model.add("cube");
    // let s4f4 = model.add("cube");
    // let s4f5 = model.add("cube");
    // let s4f6 = model.add("cube");
    // let s4f7 = model.add("cube");
    // let s4f8 = model.add("cube");
    // let s4f9 = model.add("cube");
    // let s4f10 = model.add("cube");
    // let s4f11 = model.add("cube");
    // let s4f12 = model.add("cube");
    // let s4f13 = model.add("cube");
    // let s4f14 = model.add("cube");
    // let s4f15 = model.add("cube");
    // let s4f16 = model.add("cube");
    // let s4f17 = model.add("cube");
    // let s4f18 = model.add("cube");
    // let s4f19 = model.add("cube");
    // let s4f20 = model.add("cube");
    // let s4f21 = model.add("cube");
    // let s4f22 = model.add("cube");
     let s4 = model.add("cube");

    //5th String
    // let s5f1 = model.add("cube");
    // let s5f2 = model.add("cube");
    // let s5f3 = model.add("cube");
    // let s5f4 = model.add("cube");
    // let s5f5 = model.add("cube");
    // let s5f6 = model.add("cube");
    // let s5f7 = model.add("cube");
    // let s5f8 = model.add("cube");
    // let s5f9 = model.add("cube");
    // let s5f10 = model.add("cube");
    // let s5f11 = model.add("cube");
    // let s5f12 = model.add("cube");
    // let s5f13 = model.add("cube");
    // let s5f14 = model.add("cube");
    // let s5f15 = model.add("cube");
    // let s5f16 = model.add("cube");
    // let s5f17 = model.add("cube");
    // let s5f18 = model.add("cube");
    // let s5f19 = model.add("cube");
    // let s5f20 = model.add("cube");
    // let s5f21 = model.add("cube");
    // let s5f22 = model.add("cube");
     let s5 = model.add("cube");

    // 6th string
    // let s6f1 = model.add("cube");
    // let s6f2 = model.add("cube");
    // let s6f3 = model.add("cube");
    // let s6f4 = model.add("cube");
    // let s6f5 = model.add("cube");
    // let s6f6 = model.add("cube");
    // let s6f7 = model.add("cube");
    // let s6f8 = model.add("cube");
    // let s6f9 = model.add("cube");
    // let s6f10 = model.add("cube");
    // let s6f11 = model.add("cube");
    // let s6f12 = model.add("cube");
    // let s6f13 = model.add("cube");
    // let s6f14 = model.add("cube");
    // let s6f15 = model.add("cube");
    // let s6f16 = model.add("cube");
    // let s6f17 = model.add("cube");
    // let s6f18 = model.add("cube");
    // let s6f19 = model.add("cube");
    // let s6f20 = model.add("cube");
    // let s6f21 = model.add("cube");
    // let s6f22 = model.add("cube");
     let s6 = model.add("cube");


    


    model.animate(() => {
        amp.scale = [0.1,0.1,0.1];
        amp.translation = [0, 0, 0];
        gibson.scale = [0.11,0.11,0.11];
        gibson.translation = [window.avatars[window.playerid].headset.position.x-0.8, window.avatars[window.playerid].headset.position.y-0.45, window.avatars[window.playerid].headset.position.z+4.7];

        // console.log();
        //window.avatars[window.playerid].headset.position[0]
        

        //define hitboxes for string picking
        s1.setMatrix(gibson.matrix).scale(0.10).move(-5,0,0);
        s2.setMatrix(gibson.matrix).scale(0.10).move(0.5,0,0);
        s3.setMatrix(gibson.matrix).scale(0.10).move(0.5,0,0);
        s4.setMatrix(gibson.matrix).scale(0.10).move(0.5,0,0);
        s5.setMatrix(gibson.matrix).scale(0.10).move(0.5,0,0);
        s6.setMatrix(gibson.matrix).scale(0.10).move(0.5,0,0);





        
    });
}