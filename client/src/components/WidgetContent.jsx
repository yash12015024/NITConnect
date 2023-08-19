import React from 'react'
import "./css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className='widget__contents'>
      <div className='widget__content'>
        <img src="https://worldcorona.b-cdn.net/wp-content/uploads/2020/09/aboutus1.jpg" alt=" " />
        <div className='widget__contentTitle'>
          <a href='https://nitkkr.ac.in/?page_id=35'>About Us</a>
          <p>NIT Kurukshetra is one of the..</p>
        </div>
      </div>

      <div className='widget__content'>
        <img src="https://img.collegepravesh.com/2019/09/NIT-Kurukshetra-Placement-Statistics-2019.png" alt=" " />
        <div className='widget__contentTitle'>
          <a href='https://nitkkr.ac.in/?page_id=287'>Placement Statistics</a>
          <p>Know more about the placement...</p>
        </div>
      </div>

      <div className='widget__content'>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-fc8c89a2484856c9432d0606f2966f8f-pjlq" alt=" " />
        <div className='widget__contentTitle'>
          <a href='https://nitkkr.ac.in/?page_id=283'>Our recruiters</a>
          <p>Here is the list of all the... </p>
        </div>
      </div>

      <div className='widget__content'>
        <img src="https://www.dailypioneer.com/uploads/2023/story/images/big/mcd-drive-to-give-city--face-lift--ahead-of-g20-summit-to-start-on-feb-6-2023-02-04.jpg" alt=" " />
        <div className='widget__contentTitle'>
          <a href='https://www.g20.org/en/'>G20 Summit, India</a>
          <p>India is hosting the G20 Summit... </p>
        </div>
      </div>

      <div className='widget__content'>
        <img src="https://dmerharyana.org/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-16-at-21.47.28.jpeg" alt=" " />
        <div className='widget__contentTitle'>
          <a href='https://nitkkr.ac.in/wp-content/uploads/2022/11/Academic-Session-2021-22.pdf'>Training and Placement Cell</a>
          <p>Know more about the Placement  </p>
        </div>
      </div>


    </div>
  )
}

export default WidgetContent