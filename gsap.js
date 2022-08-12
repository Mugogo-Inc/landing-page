import { gsap } from "gsap";

export default function heroAnimation(hero){
let timeline = gsap.timeline( {defaults : {ease:"power4.InOut" , duration:2}} );
timeline.from(hero,{delay:0.07, opacity:0} )
timeline.to(hero, {delay:1,  opacity:1})
console.log(hero)

}


