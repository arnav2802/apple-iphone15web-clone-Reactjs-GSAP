import { useGSAP } from '@gsap/react'
import { keedaImg } from '../utils'
import gsap from 'gsap'



const ImageFeature = () => {

  useGSAP(() => {
    gsap.from('#insect', {
        scrollTrigger: {
          trigger: '#insect',
          start: '20% bottom'
        },
        opacity: 0,
        scale: 1.1,
        duration: 2,
        ease: 'power2.inOut'
      })
    
    gsap.to('#heading', {
        scrollTrigger:{
            trigger: '#heading'
        },
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power1'
      })
  }, [])

  return (
    <section>
        <div className="common-padding screen-max-width">
            <div className="flex flex-col items-center">
                <h2 className="hiw-title " id="heading"> 
                A camera that captures your wildest imagination.
                </h2>

                <p className="hiw-subtitle feature-text " id="heading">
                From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.
                </p>
            </div>
        </div>
        <div className="mt-10" id="insect">
              <img 
                src={keedaImg}
                alt="frame"
                className="ml-40 z-10"
                
                
              />
              </div>
        
    </section>
  )
}

export default ImageFeature