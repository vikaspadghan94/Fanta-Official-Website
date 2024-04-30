var time = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true
}})

time.to("#fanta",{
    top: "120%",
    left: "0%"
},'orange')  // this orange name for animated with each other simultaniously

time.to("#slice",{
    top: "160%",
    left:"18%"
},'orange')

time.to("#orange",{
    width:"15%",
    top:"160%",
    right:"10%"
},'orange')

time.to("#leaf",{
    rotate: "130deg",
    top:"110%",
    left:"70%"
},'orange')

time.to("#leaf2",{
    rotate: "130deg",
    top:"110%",
    left:"0%"
},'orange')

var time2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "70% 65%",
    scrub: true,
    // markers: true
}})

time2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    // right:"-20%",
    top:"110%"
},'lemon')

time2.from("#cocacola",{
    rotate: "-90deg",
    left: "-100%",
    // right:"-20%",
    top:"110%"
},'lemon')


time2.from(".lemon",{
    rotate: "90deg",
    left: "100%",
    // right:"-20%",
    top:"110%"
},'lemon')

time2.from("#pepsi",{
    rotate: "90deg",
    left: "100%",
    // right:"-20%",
    top:"110%"
},'lemon')

time2.to("#slice",{
    width:"17%",
    left: "35%",
    rotate:"90deg",
    top:"204%"
},'slice')

time2.to("#fanta",{
    width:"28%",
    top:"213%",
    left: "36%"
    // right:"-20%",
},'slice')