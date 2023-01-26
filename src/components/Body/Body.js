import React, { useEffect, useState } from "react";
import { ArrowDown } from 'react-feather';
import styles from "./Body.module.css"
import Editor from '../Editor/Editor';
import Resume from "../Resume/Resume";
function Body(){
    const colors = ["239ce" ,"#48bb78" , "#0bc5ea" , "#a0aec0" , "#ed8936"]
    const sections ={
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievements: "Achievements",
        summary: "Summary",
        other: "Others",
    };

    const [resumeInformation, setResumeInformation]= useState({
        [sections.basicInfo]:{
            id:sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail:{},
        },

        [sections.workExp]:{
            id:sections.workExp,
            sectionTitle: sections.workExp,
            details:[],
        },

        [sections.project]:{
            id:sections.project,
            sectionTitle: sections.project,
            details:[],
        },

        [sections.education]:{
            id:sections.education,
            sectionTitle: sections.education,
            details:[],
        },

        [sections.achievements]:{
            id:sections.achievements,
            sectionTitle: sections.achievements,
            points:[],
        },

        [sections.summary]:{
            id:sections.summary,
            sectionTitle: sections.summary,
            detail:"",
        },

        [sections.other]:{
            id:sections.other,
            sectionTitle: sections.other,
            detail:"",
        },
    });

    useEffect(()=>{
        console.log(resumeInformation);
    },[resumeInformation]);
    return(
        <div className={styles.container}>
         <p className={styles.heading}>Resume Builder</p>
         <div className={styles.toolbar}>
            <div className={styles.colors}>
                {colors.map((item)=>(
                    <span 
                      key={item}
                      style={{backgroundColor: item}}
                      className={styles.color}
                    />
                ))}
                    
            </div>
            <button>Download <ArrowDown /></button>
        </div>
            <div className={styles.main}>
                <Editor 
                sections={sections} 
                information={resumeInformation} 
                setInformation={setResumeInformation}/>     
                <Resume  information={resumeInformation}
                 sections={sections} 
                 />      
            </div>
        </div>
    );

}

export default Body;