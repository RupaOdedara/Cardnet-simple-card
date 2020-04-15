const leftslideclip = document.querySelectorAll(".left-side-clip");
const rightslidclip = document.querySelectorAll(".right-side-clip");
var t1 = new TimelineMax();


t1.fromTo(leftslideclip, 2, { width:0 },{width: "20px", ease: Power2.easeInOut },"-=1.2")
t1.fromTo(rightslidclip, 2, { width:0 },{width: "20px", ease: Power2.easeInOut },"-=2.2");