const leftslideclip = document.querySelectorAll(".left-side-clip");
const rightslidclip = document.querySelectorAll(".right-side-clip");
const clip = document.querySelectorAll(".clip");
const clip2 = document.querySelectorAll(".clip2");
var t1 = new TimelineMax();


t1.fromTo(leftslideclip, 2, { width:0 },{width: "100px", ease: Power2.easeInOut },"-=1.2")
t1.fromTo(rightslidclip, 2, { width:0 },{width: "100px", ease: Power2.easeInOut },"-=2.2")
t1.fromTo(clip, 2, { width:0 },{width: "300px", ease: Power2.easeInOut },"-=2.2")
t1.fromTo(clip2, 2, { width:0 },{width: "372px", ease: Power2.easeInOut },"-=2.2");
