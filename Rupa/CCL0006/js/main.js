var personaddress = document.querySelectorAll(".person-address");
var personmail = document.querySelectorAll(".person-mail");
var personphone = document.querySelectorAll(".person-phone");
var companydomain = document.querySelectorAll(".company-domain");

var t1 = new TimelineMax();
t1.fromTo('h1', .8 ,{opacity: 0,y:"20%"},{opacity: 1,y:"0%",ease: Power2.easeInOut},"-=1.4")
t1.fromTo('p', .8 ,{opacity: 0,y:"20%"},{opacity: 1,y:"0%",ease: Power2.easeInOut},"-=1.1")
t1.fromTo(personaddress, .5 ,{opacity: 0,x:"20%"},{opacity: 1,x:"0%",ease: Power2.easeInOut},"-=1.1")
t1.fromTo(personmail, .6 ,{opacity: 0,x:"20%"},{opacity: 1,x:"0%",ease: Power2.easeInOut},"-=1.1")
t1.fromTo(personphone, .6 ,{opacity: 0,x:"20%"},{opacity: 1,x:"0%",ease: Power2.easeInOut},"-=1.1")
t1.fromTo(companydomain, .6 ,{opacity: 0,x:"20%"},{opacity: 1,x:"0%",ease: Power2.easeInOut},"-=1.1");
