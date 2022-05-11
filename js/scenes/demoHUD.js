/*
  This demo shows how you can make simple heads-up display (HUD)
  controls. The text labels will follow you as your roam around
  in the scene.

  When you are wearing your VR headset, you can point your controller
  beams as the lines of text, and they will change color. You can use
  this selection logic to start to build your own HUD controls.
*/
import { lcb, rcb } from '../handle_scenes.js';
//import * as PAP from '../scenes/PositionalAudioPolyphonic.js';
let a = new Audio('media/sound/Y.wav');


export const init = async model => {
   let isAnimate = 0, isItalic = 0, isClear = 0;
   model.control('a', 'animate', () => isAnimate = ! isAnimate);
   model.control('c', 'clear'  , () => isClear   = ! isClear  );
   model.control('i', 'italic' , () => isItalic  = ! isItalic );

   //if BPM ishit = true
   //show numpad
   //if R is hit
   //init new empty array,append any number input until # is hit
   //calculate number input, if not 0, then output 

   //const listener




   let showNumpad = true;
   // if(lcb.hitLabel(obj)||rcb.hitLabel(obj)){
   //    showNumpad = !showNumpad;
   // }

   let bpm = 0;
   let temp = [];
   let reset = false;
   let enter = false;

   let text0 = `BPM:`+bpm.toString();
   let text1 = '1';
   let text2 = `2`;
   let text3 = '3';
   let text4 = `4`;
   let text5 = '5';
   let text6 = `6`;
   let text7 = '7';
   let text8 = `8`;
   let text9 = '9';
   //reset
   let text10 = `R`;
   let text11 = '0';
   let text12 = `#`;
   //enter
   let n = 5;

   let label0 = model.add();
   let label1 = model.add();
   let label2 = model.add();
   let label3 = model.add();
   let label4 = model.add();
   let label5 = model.add();
   let label6 = model.add();
   let label7 = model.add();
   let label8 = model.add();
   let label9 = model.add();
   let label10 = model.add();
   let label11 = model.add();
   let label12 = model.add();


   for (let line = 0 ; line < 6; line++){
      label0.add('label').move(-line+0.1*n+1,0.4,0).scale(1);
      label1.add('label').move(0,-line,0).scale(.1*n,.3,10);
      label2.add('label').move(-0.1*n,-line,0).scale(.1*n,.3,10);
      label3.add('label').move(-0.2*n,-line,0).scale(.1*n,.3,10);
      label4.add('label').move(0,-line-0.1*n,0).scale(.1*n,.3,10);
      label5.add('label').move(-0.1*n,-line-0.1*n,0).scale(.1*n,.3,10);
      label6.add('label').move(-0.2*n,-line-0.1*n,0).scale(.1*n,.3,10);
      label7.add('label').move(0,-line-0.2*n,0).scale(.1*n,.3,10);
      label8.add('label').move(-0.1*n,-line-0.2*n,0).scale(.1*n,.3,10);
      label9.add('label').move(-0.2*n,-line-0.2*n,0).scale(.1*n,.3,10);
      label10.add('label').move(0,-line-0.3*n,0).scale(.1*n,.3,10);
      label11.add('label').move(-0.1*n,-line-0.3*n,0).scale(.1*n,.3,10);
      label12.add('label').move(-0.2*n,-line-0.3*n,0).scale(.1*n,.3,10);
   }
   

   model.animate(() => {
      a.play();
      label0.setMatrix(model.viewMatrix()).move(0.3,0.3,-1).turnY(Math.PI).scale(.1);
      label0.flag('uTransparentTexture');
      for (let line = 0 ; line < text0.length ; line++){
         let obj = label0.child(line);
         obj.info((isItalic ? '<i>' : '') + text0[line])
	    .color(lcb.hitLabel(obj) ? [1,.5,.5] :
	           rcb.hitLabel(obj) ? [.3,1,1] : [1,1,1]);
      }
      if(showNumpad){
      label1.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.1);
      label1.flag('uTransparentTexture', isClear);
      label2.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.1);
      label2.flag('uTransparentTexture', isClear);
      label3.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.1);
      label3.flag('uTransparentTexture', isClear);
      label4.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.1);
      label4.flag('uTransparentTexture', isClear);
      label5.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.1);
      label5.flag('uTransparentTexture', isClear);
      label6.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.1);
      label6.flag('uTransparentTexture', isClear);
      label7.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.1);
      label7.flag('uTransparentTexture', isClear);
      label8.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.1);
      label8.flag('uTransparentTexture', isClear);
      label9.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.1);
      label9.flag('uTransparentTexture', isClear);
      label10.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.1);
      label10.flag('uTransparentTexture', isClear);
      label11.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.1);
      label11.flag('uTransparentTexture', isClear);
      label12.setMatrix(model.viewMatrix()).move(0,0,-1).turnY(Math.PI).scale(.1);
      label12.flag('uTransparentTexture', isClear);
      for (let line = 0 ; line < text1.length ; line++){
         let obj = label1.child(line);
         obj.info((isItalic ? '<i>' : '') + text1[line])
	    .color(lcb.hitLabel(obj) ? [1,.5,.5] :
	           rcb.hitLabel(obj) ? [.3,1,1] : [1,1,1]);
      }
      for (let line = 0 ; line < text2.length ; line++){
         let obj = label2.child(line);
         obj.info((isItalic ? '<i>' : '') + text2[line])
	    .color(lcb.hitLabel(obj) ? [1,.5,.5] :
	           rcb.hitLabel(obj) ? [.3,1,1] : [1,1,1]);
      }
      for (let line = 0 ; line < text3.length ; line++){
         let obj3 = label3.child(line);
         obj3.info((isItalic ? '<i>' : '') + text3[line])
	    .color(lcb.hitLabel(obj3) ? [1,.5,.5] :
	           rcb.hitLabel(obj3) ? [.3,1,1] : [1,1,1]);
      }
      for (let line = 0 ; line < text4.length ; line++){
         let obj4 = label4.child(line);
         obj4.info((isItalic ? '<i>' : '') + text4[line])
	    .color(lcb.hitLabel(obj4) ? [1,.5,.5] :
	           rcb.hitLabel(obj4) ? [.3,1,1] : [1,1,1]);
      }
      for (let line = 0 ; line < text5.length ; line++){
         let obj5 = label5.child(line);
         obj5.info((isItalic ? '<i>' : '') + text5[line])
	    .color(lcb.hitLabel(obj5) ? [1,.5,.5] :
	           rcb.hitLabel(obj5) ? [.3,1,1] : [1,1,1]);
      }
      for (let line = 0 ; line < text6.length ; line++){
         let obj6 = label6.child(line);
         obj6.info((isItalic ? '<i>' : '') + text6[line])
	    .color(lcb.hitLabel(obj6) ? [1,.5,.5] :
	           rcb.hitLabel(obj6) ? [.3,1,1] : [1,1,1]);
      }
      for (let line = 0 ; line < text7.length ; line++){
         let obj7 = label7.child(line);
         obj7.info((isItalic ? '<i>' : '') + text7[line])
	    .color(lcb.hitLabel(obj7) ? [1,.5,.5] :
	           rcb.hitLabel(obj7) ? [.3,1,1] : [1,1,1]);
      }
      for (let line = 0 ; line < text8.length ; line++){
         let obj8 = label8.child(line);
         obj8.info((isItalic ? '<i>' : '') + text8[line])
	    .color(lcb.hitLabel(obj8) ? [1,.5,.5] :
	           rcb.hitLabel(obj8) ? [.3,1,1] : [1,1,1]);
      }
      for (let line = 0 ; line < text9.length ; line++){
         let obj9 = label9.child(line);
         obj9.info((isItalic ? '<i>' : '') + text9[line])
	    .color(lcb.hitLabel(obj9) ? [1,.5,.5] :
	           rcb.hitLabel(obj9) ? [.3,1,1] : [1,1,1]);
      }
      for (let line = 0 ; line < text10.length ; line++){
         let obj10 = label10.child(line);
         obj10.info((isItalic ? '<i>' : '') + text10[line])
	    .color(lcb.hitLabel(obj10) ? [1,.5,.5] :
	           rcb.hitLabel(obj10) ? [.3,1,1] : [1,1,1]);
      }
      for (let line = 0 ; line < text11.length ; line++){
         let obj11 = label11.child(line);
         obj11.info((isItalic ? '<i>' : '') + text11[line])
	    .color(lcb.hitLabel(obj11) ? [1,.5,.5] :
	           rcb.hitLabel(obj11) ? [.3,1,1] : [1,1,1]);
      }
      for (let line = 0 ; line < text12.length ; line++){
         let obj12 = label12.child(line);
         obj12.info((isItalic ? '<i>' : '') + text12[line])
	    .color(lcb.hitLabel(obj12) ? [1,.5,.5] :
	           rcb.hitLabel(obj12) ? [.3,1,1] : [1,1,1]);
      }
   }
      
   });


   
}
