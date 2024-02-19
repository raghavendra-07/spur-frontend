import React,{ useRef,useEffect } from 'react'

import Header from '../Header'
import {Chrono} from 'react-chrono'

import {gsap} from 'gsap'
import { useIntersection} from 'react-use'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const items=[{title: 'You'}, {title: 'Anonymonos 1'}, {title:"Anonymonos 2"}, {title:'Anonymonos 3'}]

function Home (){
  //let tl = new gsap.timeline();
  //let ease = Power3.easeOut();

  const containerBox = useRef(null)

  useEffect(()=>{
    const el = containerBox.current;
    gsap.fromTo(el,{x:1500},{x:-10,duration:3,ScrollTrigger:{
      trigger:el,
      start:400
    }})
  },[])

const imgRef = useRef(null);
useEffect(()=>{
  const el = imgRef.current;
  gsap.fromTo(el,{x:500},{x:5,duration:3, ScrollTrigger:{
    trigger:el,
    start:400,
    root:null,
    rootMargin:"0px"
  }})
},[])

const ghostText = useRef(null);
useEffect(()=>{
  const el = ghostText.current;
  gsap.fromTo(el,{x:-100},{x:100,duration:3, ScrollTrigger:{
    trigger:el
  }})
},[])

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef,{
    root:null,
    rootMargin: "0px",
    threshold:0.5,
  })

  const fadeIn=(element)=>{
    gsap.to(element,1,{
      opacity:1,
      y:-60,
      ease:"power4.out",
      stagger:{
        amount:.3
      }
    })
  }

  const fadeOut=(element)=>{
    gsap.to(element,1,{
      opacity:0,
      y:-20,
      ease:"power4.out",
    })
  }

  intersection && intersection.intersectionRatio < 0.5 ?
  fadeOut(".fadeIn") : fadeIn(".fadeIn")

 // useEffect(()=>{
 //   tl.from([h1,h2,h3,pText1,pText2],1,{
  //    opacity:0,
  //    y:"100",
    //  skewY:10,
      //stagger:{
        //amount:.4
    //  }
 //   })
  //})

const signText = useRef(null)

const intersection3 = useIntersection(signText,{
  root:null,
  rootMargin:"0px",
  threshold:0.5,
})

const fadeI = (element)=>{
  gsap.to(element,1,{
    opacity:1,
      y:-60,
      ease:"power4.out",
      stagger:{
        amount:.3
      }
  })
}

const fadeO = (element)=>{
  gsap.to(element,1,{
    opacity:0,
      y:-20,
      ease:"power4.out",
  })
}

intersection3 && intersection3.intersectionRatio < 0.5 ?
  fadeO(".fadeIn") : fadeI(".fadeIn")

  const sectionRef2 = useRef(null);

  const intersection2 = useIntersection(sectionRef2,{
    root:null,
    rootMargin: "0px",
    threshold:0.5,
  })

  const fadeIn2=(element)=>{
    gsap.to(element,1,{
      opacity:1,
      y:-60,
      ease:"power4.out",
      stagger:{
        amount:.3
      }
    })
  }

  const fadeOut2=(element)=>{
    gsap.to(element,1,{
      opacity:0,
      y:-20,
      ease:"power4.out",
    })
  }

  intersection2 && intersection2.intersectionRatio < 0.5 ?
  fadeOut2(".fadeIn2") : fadeIn2(".fadeIn2")


  return(
  <div >
    <Header/>
    <div className="flex-1 overflow-y-scroll">
      <div className='my-custom-bg-class flex flex-col justify-between'>
        <div  ref={sectionRef} className='mt-32' >
        <div className='fadeIn mt-12'>
          <h1 className='font-bold text-3xl text-slate-100 self-center'>DISTINCT</h1>
          <h1 className='font-bold text-3xl text-slate-100 self-center'>ALWAYS</h1>
          <h1 className='font-bold text-2xl text-slate-100 self-center'>Branding websites & marketing for video games</h1>
        </div>
        <div className='fadeOut m-5 mb-3 shadow-inner rounded border-white-400'>
          <h1 className='font-bold text-3xl text-slate-100 self-center'>AI POWERED GAMING</h1>
          <h1 className='font-bold text-3xl text-slate-100 self-center'>REVOLUTION</h1>
        </div>
        </div>
      </div>

      <div ref={sectionRef}>
        <div className='fadeIn m-5 mt-12 mb-20 flex flex-row justify-evenly'>
          <h1 className='text-8xl font-bold m-5'>EQ Beats</h1>
          <p className='text-lg w-72 m-5 text-blue-900'>People with high emotional intelligence live more fulfilled lives. They tend to be happier and have healthier relationships</p>
          <p className='w-72 m-5 text-blue-900'>They are more successfull in their pursuits and make for inspiring leaders. According to science they earn $27k a year </p>
        </div>
      </div>

      <div className='flex flex-row justify-around'>
        <h1 ref={ghostText} className='text-8xl'>Does this sound familiar...</h1>
        <img ref={imgRef} alt='friendly ghost' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdtft0SFcMMe7eltQAx1eUuY7Sl40awxcJvNCzENn96H5x2GI_pXhG0unWl-M4irjHjk&usqp=CAU" />
      </div>

      <div ref={containerBox} className='bg-gray-500 m-6 mt-32 mb-32 rounded flex flex-row justify-evenly'>
        <div className='flex flex-col bg-gray-200 justify-start m-8 p-5 border-black border-4 rounded-lg border-opacity-20'>
          <img className='h-14 w-14' alt="angry emoji" src="https://t3.ftcdn.net/jpg/02/16/61/12/360_F_216611200_XH37SaNS1S3kpcKhafU9HtlDj4IdtNoH.jpg"/>
          <h1 className='text-xs font-bold text-black-700'>You argue with a colleague</h1>
          <p className='text-xs text-green-700'>You get angry and defensive, instead of staying open and working towards common ground.</p>
        </div>
        <div className='flex flex-col bg-sky-200 justify-start m-8 p-5 border-black border-4 rounded-lg border-opacity-20'>
          <img className='h-14 w-14' alt="a emoji" src="https://i.pinimg.com/736x/23/83/b8/2383b8c0a126d1d6e45c69e1f1d8c835.jpg"/>
          <h1 className='text-xs  font-bold text-black-700'>You get a promotion</h1>
          <p className='text-xs  text-green-700'>You question yourself and felt wonder on your promotion.</p>
        </div>
        <div className='flex flex-col bg-orange-200 justify-start m-8 p-5 border-black border-4 rounded-lg border-opacity-20'>
          <img className='h-14 w-14' alt="angry emoji" src="https://media.istockphoto.com/id/164420490/vector/tongue-out-emoticon.jpg?s=612x612&w=0&k=20&c=UlXID9WUYNelkwHygTWXpMo6wT4SwBE81YTu5TzYBVs="/>
          <h1 className='text-xs  font-bold text-black-700'>You attend a class</h1>
          <p className='text-xs  text-green-700'>You got attend a class and gave some insights to the new joiners</p>
        </div>
        <div className='flex flex-col bg-violet-200 justify-start m-8 p-5 border-black border-4 rounded-lg border-opacity-20'>
          <img className='h-14 w-14' alt="angry emoji" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyu-XYmkee1XLUJP7uMe-jUnc2YoTO2Idhmk5q94RAB4OuzVvXsfOH_NhROF23bi2ja8&usqp=CAU"/>
          <h1 className='text-xs  font-bold text-black-700'>You got emotional</h1>
          <p className='text-xs  text-green-700'>You get emotional after spending so much time in the application.</p>
        </div>
        <div className='flex flex-col bg-yellow-200 justify-start m-8 p-5 border-black border-4 rounded-lg border-opacity-20'>
          <img className='h-14 w-14' alt="angry emoji" src="https://qph.cf2.quoracdn.net/main-qimg-22c8619ed94d89e28ce3531ff7d5a79c-lq"/>
          <h1 className='text-xs  font-bold text-black-700'>You got some sarcasm</h1>
          <p className='text-xs  text-green-700'>You get sarcsm after getting betrayed by the lobby members.</p>
        </div>
        <div className='flex flex-col bg-pink-200 justify-start m-8 p-5 border-black border-4 rounded-lg border-opacity-20'>
          <img className='h-14 w-14' alt="angry emoji" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQ8BiHAh4C9eelsvZt6Vssrdt1vBWY27OhlwTK45frRpcp0ncu2RM3lKMhoTyHxOtUmM&usqp=CAU"/>
          <h1 className='text-xs  font-bold text-black-700'>Talked nicely</h1>
          <p className='text-xs  text-green-700'>You get appreciation from peers after spending quality time.</p>
        </div>
      </div>

      <div ref={sectionRef2} className='bg-yellow-100 rounded-lg m-5 mb-32 mt-32 p-5 flex flex-row justify-around'>
        <div className='fadeIn2 flex flex-col justify-evenly'>
          <img className='rounded h-28 w-32' alt="leaves flowers" src="https://t4.ftcdn.net/jpg/02/04/10/29/360_F_204102936_yuZpnfbyGBp3WakhsXlZWSWhTpbQi8eW.jpg" />
          <div>
            <p className='text-6xl'>Built out of frustation</p>
            <h1 className='text-9xl font-bold'>Meet the ahead app</h1>
          </div>
        </div>
        <div>
          <img className='mt-10 h-56 w-64' alt='leaf ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ndpcBDemkx02D-877lUb7WI7ITFJy2GDqXB2-pm9BAuuY3vB6wNC01EKoWWlwGiaM0w&usqp=CAU"/>
          <p className='text-xl text-gray-600 italic'>A personalized pocket coach that provides bite-sized, science driven tools to boost emotional intelligence.</p>
          <p className='text-sm text-yellow-900'>Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
        </div>
      </div>

      <div>
        <p className='text-lg ml-5 mb-5 antialiased'>Wrong with self-improvement & how we're fixing it.</p>
        <div className='flex flex-row justify-center'>
        <h1 className='text-5xl font-bold'>Self-improvement. Ugh.</h1>
        <img className='ml-5 h-36' alt="ghost" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8thfFL4i53HDpesUTQIr3qRPdkFoNQJzOw&usqp=CAU"/>
        </div>
        <div className='h-96'>
          <Chrono mode="VERTICAL">
            <div>
              <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEOfBtxWkp7iC5Zu5iZBEJRqGY0kbPFSx7A&usqp=CAU"
              className="image"
              alt="chennai-super-kings"
              />
              <h1>Super Mario</h1>
            </div>
            <div>
              <img alt="grand theft auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2TGHWdB5_kDNcqtu-xSlH35HW03hm9xtGhn6TfZcuWE7lRMTOuOEZHDBkpdw5Wl1Umtw&usqp=CAU" />
              <h1>Grand Theft Auto</h1>
            </div>
            <div>
              <img alt="pokemon" src="https://logowik.com/content/uploads/images/pokemon-trading-card-game9373.logowik.com.webp"/>
              <h1>Pokemon</h1>
            </div>
            <div>
              <img alt="street fighter" src="https://i.pinimg.com/originals/b0/c9/aa/b0c9aa8aa1c911176b8fec0edbf67c3a.png" />
              <h1>Street Fighter</h1>
            </div>
          </Chrono>
        </div>
      </div>


      <div>
        <div className='m-5 mt-20 mb-20 flex flex-row justify-around'>
          <h1 className='m-5 w-60 text-4xl font-bold m-5'>Be the best you with EQ Beats</h1>
          <p className='m-5 text-lg w-72 m-5 text-red-900'>Not having your own emotions under control might be holding you back.</p>
          <p className='m-5 w-72 m-5 text-red-900'>Additionally not understanding of those others stops you from being parent, friend you can be. </p>
        </div>
      </div>


      <div className='bg-purple-100 rounded-lg m-5 p-5 flex flex-col justify-center self-center'>
        <p className='text-center text-2xl'>Let your friends, family, co-gamers rate your skills.</p>
        <h1 className='text-center text-5xl'>Ever wondered what others think of you?</h1>
        <div className="flex justify-center self-center">
          <Chrono mode="HORIZONTAL" item={items}>
          <div>
            <h1 className='text-lg'>You have reached to Platinum level</h1>
          </div>
          <div>
            <h1 className='text-lg'>You are in Golden level</h1>
          </div>
          <div>
            <h1 className='text-lg'>You have reached to Silver level</h1>
          </div>
          <div>
            <h1 className='text-lg'>Complete level 1 to achieve medals</h1>
          </div>
          </Chrono>
        </div>

      </div>

      <div ref={signText} className='fadeIn mt-16 mb-10 p-32 flex flex-col justify-center'>
        <p className='text-center text-2xl'>We take privacy seriously</p>
        <h1 className='text-center font-bold text-7xl'>Before you get started</h1>
        <p className='text-center mt-5 text-2xl'>"We won't share your credentials with anyone and won't ever tell you which friends said what about you.</p>
        <div className='flex flex-row justify-center'> 
          <p className='text-center mt-10 text-xl'>With love, 
          <span>
            <img className='h-28 w-32' alt="signature" src="https://e7.pngegg.com/pngimages/923/614/png-clipart-digital-signature-signature-block-signatures-angle-material-thumbnail.png"/>
          </span>
          </p>
        </div>
        <button type="button" className='mt-8 self-center text-white p-3 rounded-2xl bg-black'>Start Now</button>
      </div>

      <div className='bg-orange-100 rounded-lg m-5 p-5 flex flex-row justify-around'>
        <div className='flex flex-col '>
          <h1 className='text-4xl font-bold'>Work with us</h1>
          <div className='flex flex-col'>
            <div className='p-5 m-6 border-2 border-black rounded-lg w-56'>
              <h1 className='text-black font-bold'>About</h1>
              <p className='text-gray-400'>At ahead our goal is to make self-improvement and give some entertainment games with fun. We know there is a way to work.And that's what ahead is all about</p>
            </div>
            <div className='p-5 mt-0 m-6 border-2 border-black rounded-lg w-56'>
              <h1 className='text-black font-bold'>Product</h1>
              <p className='text-gray-400'>Sure, you can spend ages while playing to become a better player.It will give some relaxation for the body and mind.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-solid text-5xl font-bold text-purple-900'>aHead</h1>
        <div className='overflow-y-scroll h-96 mt-10'>

        
          <div className='p-5 m-6 border-2 border-black rounded-lg w-56'>
              <h1 className='text-black font-medium'>Power through even when the going gets tough</h1>
              <p className='text-grey-400'>At ahead our goal is to make self-improvement and give some entertainment games with fun. We know there is a way to work.And that's what ahead is all about</p>
            </div>
        
            <div className='p-5 m-6 border-2 border-black rounded-lg w-56'>
              <h1 className='text-black font-medium'>Power through even when the going gets tough</h1>
              <p className='text-grey-400'>At ahead our goal is to make self-improvement and give some entertainment games with fun. We know there is a way to work.And that's what ahead is all about</p>
            </div>
          
            <div className='p-5 m-6 border-2 border-black rounded-lg w-56'>
              <h1 className='text-black font-medium'>Power through even when the going gets tough</h1>
              <p className='text-grey-400'>At ahead our goal is to make self-improvement and give some entertainment games with fun. We know there is a way to work.And that's what ahead is all about</p>
            </div>

          </div>
        </div>
      </div>

      <div className='mb-20 flex flex-col justify-center'>
        <h1 className='text-center text-3xl font-bold'>Open Games</h1>
        <div className='mt-8 flex flex-row justify-evenly'>

        <div className='bg-indigo-100 rounded-lg m-5 p-10 flex flex-col justify-around'>
          <h1 className='text-lg font-bold text-yellow-900'>Subway Surf</h1>
          <ol className='list-decimal list-inside marker:text-blue-700'>
            <li>Win $200 at level-1</li>
            <li>Win $500 at level-2</li>
            <li>Win $750 at level-3</li>
          </ol>
        </div>
        <div className='bg-indigo-100 rounded-lg m-5 p-10 flex flex-col justify-around'>
          <h1 className='text-lg font-bold text-yellow-900'>Dr. Driving</h1>
          <ol className='list-decimal list-inside marker:text-blue-700'>
          <li>Win $100 at level-1</li>
            <li>Win $2500 at level-2</li>
            <li>Win $500 at level-3</li>
          </ol>
        </div>
        <div className='bg-indigo-100 rounded-lg m-5 p-10 flex flex-col justify-around'>
          <h1 className='text-lg font-bold text-yellow-900'>Temple Run</h1>
          <ol className='list-decimal list-inside marker:text-blue-700'>
          <li>Win $2500 at level-1</li>
            <li>Win $700 at level-2</li>
            <li>Win $1000 at level-3</li>
          </ol>
        </div>
        </div>
      </div>
      
      <hr/>
    
      <div className='mb-28 mt-10 flex flex-row justify-center justify-self-center'>
        <h1 className='mr-10 text-center'>Email: hi@headapp.com</h1>
        <h1 className='ml-10 text-center'>Address: Austria Berlin, 11170.</h1>
      </div>
    </div>
  </div>
);
  }

export default Home
