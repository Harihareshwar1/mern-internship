// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'react'
import { Header } from './Header'
import ProjectCard from './ProjectCard'
import { Title } from './title'
import { Achievement } from './Achievement'
function App() {
 
        return (

         <>
         <h1 style={{color: "white"}}>PORTFOLIO</h1>
           <Header/>
           <Title name="projects"></Title>
           <ProjectCard name=" HEART DISEASE PREDICTOR" year="2023"
            des="created a web app that allows users to input health data, which is analyzed to predict heart 
disease risk, offering personalized dietary recommendations for those at risk." tools={["HTML","CSS","Scikit-learn","FLask"]}></ProjectCard>
           <ProjectCard name="  IMAGE CAPTION GENERATOR " 
            des="Built a web-based image captioning tool with a user-friendly interface. Generates descriptive 
captions for input images based on visual features extracted by a machine learning model. "
           year="2024" tools={["Python","Streamlit","CNN","LSTM"]}></ProjectCard>
           <ProjectCard name="Stealth Watch" year="2024" des="A real-time shoplifting detection system using object detection to monitor uploaded video footage. 
Upon detecting suspicious activity, sends alerts and initiates automated calls to notify authorities, 
enhancing retail security through seamless integration and responsiveness. " tools={["React","Flask","OpenCV","YOLO V8"]}></ProjectCard>
           
   
            <Title name="Achievements"></Title>
           <Achievement achievements={[{description:"Secured Best competitive programmer – AIML  | SECE ",year:"2024"},{description:"Secured 1st position in BUILDATHON – C coding contest | SECE",year:"2023"},{description:"Secured 2nd position  in FRESHATHON – Project Expo | SECE",year:"2024"},{description:"Secured 2nd position in CODELEE – Leetcode coding contest | SECE",year:"2024"}]}></Achievement>
         </>
        )
}

export default App
