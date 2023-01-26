import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import InputControl from "../InputControl/InputControl";
import styles from './Editor.module.css'
function Editor(props){
    const sections=props.sections;
    const information=props.information;
    const [activeSectionKey,setActiveSectionKey] = useState(Object.keys(sections)[0]);
    const [activeInformation,setActiveInformation]=useState(
        information[sections[Object.keys(sections)[0]]]
    );
    const [sectionTitle,setSectionTitle]=useState(
        sections[Object.keys(sections)[0]]

    );

    const [activeDetailIndex, setActiveDetailIndex]=useState(0);

    const[values,setValues]= useState(
        {   
            name:activeInformation?.detail?.name || "",
            title:activeInformation?.detail?.title || "",
            address:activeInformation?.detail?.address || "",
            linkedin:activeInformation?.detail?.linkedin || "",
            email:activeInformation?.detail?.email || "",
            phone:activeInformation?.detail?.phone || "",

        }
    );

    const handlePOintUpdate=(value,index)=>{
        const tempValues={...values};
        if(!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index]=value;
        setValues(tempValues);
    }


    const workExpBody=(
    <div className={styles.detail}>
        <div className={styles.row}>
            <InputControl 
            label="Title"
            placeholder="Enter title eg. Developer"
            value={values.title}
            onChange={(event)=>
                setValues((prev)=>({...prev,title: event.target.value}))
                }
            
            />

            <InputControl 
            label="Company Name"
            placeholder="Enter Company Name eg. Developer"
            value={values.companyName}
            onChange={(event)=>
                setValues((prev)=>({...prev,companyName: event.target.value}))
                }
            />
        </div>

        <div className={styles.row}>
            <InputControl 
            label="Certificate Link"
            placeholder="Add Certificate Link"
            value={values.certificationLink}
            onChange={(event)=>
                setValues((prev)=>({...prev,certificationLink: event.target.value}))
                }
            />

            <InputControl 
            label="Location"
            placeholder="Enter location eg.remote"
            value={values.location}
            onChange={(event)=>
                setValues((prev)=>({...prev,location: event.target.value}))
                }
            />
        </div>

        <div className={styles.row}>
            <InputControl 
            label="Start Date"
            type="date"
            placeholder="Enter start date of work"
            value={values.startDate}
            onChange={(event)=>
                setValues((prev)=>({...prev,startDate: event.target.value}))
                }
            />

            <InputControl 
            label="End Date"
            type="date"
            placeholder="Enter end date of work"
            value={values.endDate}
            onChange={(event)=>
                setValues((prev)=>({...prev,endDate: event.target.value}))
                }
            />
        </div>

        <div className={styles.column}>
            <label>Enter Work Description</label>
            <InputControl placeholder="Line 1" 
            value={values.points ? values.points[0] : ""}
            onChange={(event)=>handlePOintUpdate(event.target.value,0)}/>
             
            <InputControl placeholder="Line 2"
             value={values.points ? values.points[1] : ""}
             onChange={(event)=>handlePOintUpdate(event.target.value,1)}/>

            <InputControl placeholder="Line 3"
             value={values.points ? values.points[2] : ""}
             onChange={(event)=>handlePOintUpdate(event.target.value,2)}/>
        </div>
    </div>
    );

    const projectBody= (
        <div className={styles.detail}>
        <div className={styles.row}>
            <InputControl 
            label="Title"
            value={values.title}
            placeholder="Enter Title eg. Chatapp"
            onChange={(event)=>
                setValues((prev)=>({...prev,title: event.target.value}))
                }
            />

            <InputControl 
            label="Overview"
            value={values.overview}
            placeholder="Give Basic project Overview"
            onChange={(event)=>
                setValues((prev)=>({...prev,overview: event.target.value}))
                }
            />
        </div>
        
        <div className={styles.column}>
            <label>Enter Project Description</label>
            <InputControl placeholder="Line 1" 
            value={values.points ? values.points[0] : ""}
            onChange={(event)=>handlePOintUpdate(event.target.value,0)}/>
            
             
            <InputControl placeholder="Line 2"
             value={values.points ? values.points[1] : ""}
             onChange={(event)=>handlePOintUpdate(event.target.value,1)}/>

            <InputControl placeholder="Line 3"
             value={values.points ? values.points[2] : ""}
             onChange={(event)=>handlePOintUpdate(event.target.value,2)}/>
        </div>
    </div>
    );

    const educationBody= (
        <div className={styles.detail}>
        <div className={styles.row}>
            <InputControl 
            label="Title"
            value={values.title}
            placeholder="Enter Title eg. BSCS"
            onChange={(event)=>
                setValues((prev)=>({...prev,title: event.target.value}))
                }
            />

            <InputControl 
            label="University Name"
            value={values.college}
            placeholder="Enter name of your university"
            onChange={(event)=>
                setValues((prev)=>({...prev,college: event.target.value}))
                }
            />
        </div>

        <div className={styles.row}>
            <InputControl 
            label="Start Date"
            type="date"
            value={values.startDate}
            placeholder="Enter start date"
            onChange={(event)=>
                setValues((prev)=>({...prev,startDate: event.target.value}))
                }
            />

            <InputControl 
            label="End Date"
            type="date"
            value={values.endDate}
            placeholder="Enter end date"
            onChange={(event)=>
                setValues((prev)=>({...prev,endDate: event.target.value}))
                }
            />
        </div>
    </div>
    );

    const basicInfoBody= (
        <div className={styles.detail}>
        <div className={styles.row}>
            <InputControl 
            label="Name"
            value={values.name}
            placeholder="Enter you full name"
            onChange={(event)=>
                setValues((prev)=>({...prev,name: event.target.value}))
                }
            />

           

<InputControl 
            label="title"
            value={values.title}
            placeholder="Enter your current title"
            onChange={(event)=>
                setValues((prev)=>({...prev,title: event.target.value}))
                }
            />
            </div>

<div className={styles.row}>

<InputControl 
            label="Address"
            value={values.address}
            placeholder="Enter your current address"
            onChange={(event)=>
                setValues((prev)=>({...prev,address: event.target.value}))
                }
            />
            <InputControl 
            label="linkedin"
            value={values.linkedin}
            placeholder="Username for linkedIn"
            onChange={(event)=>
                setValues((prev)=>({...prev,linkedin: event.target.value}))
                }
            />

</div>


        

        <div className={styles.row}>
            <InputControl 
            label="Email Address"
            value={values.email}
            placeholder="Enter your email"
            onChange={(event)=>
                setValues((prev)=>({...prev,email: event.target.value}))
                }
            />

            <InputControl 
            label="Phone Number"
            value={values.phone}
            placeholder="Your phone number"
            onChange={(event)=>
                setValues((prev)=>({...prev,phone: event.target.value}))
                }
            />
        </div>
    </div>
    );
    const achievementsBody= (
        <div className={styles.detail}>
        <div className={styles.column}>
            <label>List Your achievements</label>
            <InputControl placeholder="Line 1" 
            value={values.points ? values.points[0] : ""}
            onChange={(event)=>handlePOintUpdate(event.target.value,0)}/>
             
            <InputControl placeholder="Line 2"
             value={values.points ? values.points[1] : ""}
             onChange={(event)=>handlePOintUpdate(event.target.value,1)}/>

            <InputControl placeholder="Line 3"
             value={values.points ? values.points[2] : ""}
             onChange={(event)=>handlePOintUpdate(event.target.value,2)}/>
        </div>
    </div>
    );

    const summaryBody= (
        <div className={styles.detail}>
         <InputControl 
            label="Objectives"
            value={values.summary}
            placeholder="Enter something"
            onChange={(event)=>
                setValues((prev)=>({...prev,summary: event.target.value}))
                }
            />

        </div>
    );

    const otherBody= (
        <div className={styles.detail}>
         <InputControl 
            label="Other"
            value={values.other}
            placeholder="Enter something"
            onChange={(event)=>
                setValues((prev)=>({...prev,other: event.target.value}))
                }
            
            
        />
        </div>
    );

    const generateBody=()=>{
        switch(sections[activeSectionKey]){
            case sections.basicInfo:return basicInfoBody;
            case sections.workExp:return workExpBody;
            case sections.project:return projectBody;
            case sections.education:return educationBody;
            case sections.achievements:return achievementsBody;
            case sections.summary:return summaryBody;
            case sections.other:return otherBody;
            default:return null;
            
        }

    };

    const handleSubmission=()=>{
        switch(sections[activeSectionKey]){
            case sections.basicInfo:{
                const tempDetail={
                    name:values.name,
                    address:values.address,
                    title:values.title,
                    linkedin:values.linkedin,
                    email:values.email,
                    phone:values.phone,
                }
                props.setInformation((prev)=>({...prev,[sections.basicInfo]
                    :{...prev[sections.basicInfo],detail:tempDetail,sectionTitle,}
                }));
                break;
            }

            case sections.workExp:{
                const tempDetail={
                    title:values.title,
                    companyName:values.companyName,
                    location:values.location,
                    certificationLink:values.certificationLink,
                    startDate:values.startDate,
                    endDate:values.endDate,
                    points:values.points,
                };
                const tempDetails=[...information[sections.workExp]?.details];
                tempDetails[activeDetailIndex]=tempDetail;

                props.setInformation((prev)=>({...prev,[sections.workExp]
                    :{...prev[sections.workExp],details:tempDetails,sectionTitle}
                }));
                break;
            }

            case sections.project:{
                const tempDetail={
                    title:values.title,
                    overview:values.overview,
                    points:values.points,
                };
                const tempDetails=[...information[sections.project]?.details];
                tempDetails[activeDetailIndex]=tempDetail;

                props.setInformation((prev)=>({...prev,[sections.project]
                    :{...prev[sections.project],details:tempDetails,sectionTitle}
                }));
                break;
            }

            case sections.education:{
                const tempDetail={
                    title:values.title,
                    college:values.college,
                    startDate:values.startDate,
                    endDate:values.endDate,
                };
                const tempDetails=[...information[sections.education]?.details];
                tempDetails[activeDetailIndex]=tempDetail;

                props.setInformation((prev)=>({...prev,[sections.education]
                    :{...prev[sections.education],details:tempDetails,sectionTitle}
                }));
                break;
            }

            case sections.achievements:{
                const tempPoints= values.points;
                

                props.setInformation((prev)=>({...prev,[sections.achievements]
                    :{...prev[sections.achievements],points:tempPoints,sectionTitle}
                }));
                break;
            }


            case sections.summary:{
                const tempDetail= values.summary;
                

                props.setInformation((prev)=>({...prev,[sections.summary]
                    :{...prev[sections.summary],detail:tempDetail,sectionTitle}
                }));
                break;
            }

            case sections.other:{
                const tempDetail= values.other
                

                props.setInformation((prev)=>({...prev,[sections.other]
                    :{...prev[sections.other],detail:tempDetail,sectionTitle}
                }));
                break;
            }
        }

        
    };

    const handleAddNew=()=>{
        const details = activeInformation?.details;
        if(!details) return;
        const lastDetail=details.slice(-1)[0];
        if(!Object.keys(lastDetail).length)return;

        //push an empty object
        details?.push({})

        props.setInformation(prev=>({...prev,[sections[activeSectionKey]]:{...
            information[sections[activeSectionKey]],
            details: details,
        },
    }));
        setActiveDetailIndex(details.length-1);
    };

    const handleDeleteDetail= (index) =>{
        //fetch details
        const details = activeInformation?.details?[...activeInformation?.details]:""
        if(!details) return 
        details.splice(index,1) //splice will cut you will pass index and numbe rof items you want to cut

        props.setInformation(prev=>({...prev,[sections[activeSectionKey]]:{...
            information[sections[activeSectionKey]],
            details: details,
        },
    }));
        setActiveDetailIndex((prev)=>(prev===index?0:prev-1));

        
    };

    useEffect(()=>{
        const activeInfo=information[sections[activeSectionKey]];
        setActiveInformation(information[sections[activeSectionKey]]);
        setSectionTitle(activeSectionKey);
        setActiveDetailIndex(0);
        setValues({
            name:activeInfo?.detail?.name || "",

            overview: activeInfo?.details? activeInfo.details[0]?.overview || "": "",

            college: activeInfo?.details? activeInfo.details[0]?.college || "": "",

            certificationLink: activeInfo?.details? activeInfo.details[0]?.certificationLink || "": "",

            companyName: activeInfo?.details? activeInfo.details[0]?.companyName || "": "",


            location: activeInfo?.details? activeInfo.details[0]?.location || "": "",

            startDate: activeInfo?.details? activeInfo.details[0]?.startDate || "": "",

            endDate: activeInfo?.details? activeInfo.details[0]?.endDate || "": "",

            points: activeInfo?.details? activeInfo.details[0]?.points ? [...activeInfo.details[0]?.points]:""
            : activeInfo?.points?[...activeInfo.points]:"", 
            title: activeInfo?.details?activeInfo.details[0]?.title || ""
            :activeInfo?.detail?.title || "",
            address:activeInfo?.detail?.address || "",
            linkedin:activeInfo?.detail?.linkedin || "",
            email:activeInfo?.detail?.email || "",
            phone:activeInfo?.detail?.phone || "",
            summary:typeof activeInfo?.detail !== Object ? activeInfo.detail : "",
            other:typeof activeInfo?.detail !== Object ? activeInfo.detail : "",
            
        })
    },[activeSectionKey])

    useEffect(()=>{
        setActiveInformation(information[sections[activeSectionKey]])

    },[information])

    useEffect(()=>{
        const details=activeInformation?.details;
        if(!details) return;

        const activeInfo= information[sections[activeSectionKey]];
        setValues({
            overview: activeInfo.details[activeDetailIndex]?.overview || "",

            college: activeInfo.details[activeDetailIndex]?.college || "",

            certificationLink: activeInfo.details[activeDetailIndex]?.certificationLink || "",

            companyName: activeInfo.details[activeDetailIndex]?.companyName || "",


            location: activeInfo.details[activeDetailIndex]?.location || "",

            startDate: activeInfo?.details[activeDetailIndex]?.startDate || "",

            endDate: activeInfo?.details[activeDetailIndex]?.endDate || "",

            points: activeInfo.details[activeDetailIndex]?.points || "",
            
            title: activeInfo.details[activeDetailIndex]?.title || "",
            
        });
    },[activeDetailIndex]);

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                {Object.keys(sections)?.map((key) =>(
                <div className={`${styles.section} ${
                    activeSectionKey===key ? styles.active : ""}`}
                key={key}
                onClick={()=>setActiveSectionKey(key)}
                >
                {sections[key]}
                </div>
                ))}
            </div>

            <div className={styles.body}>
                <InputControl label="Title" placeholder="Enter section Title"
                value={sectionTitle}
                onChange={(event)=>setSectionTitle(event.target.value)}
                />
                   <div className={styles.chips}>

                   
                    {
                        activeInformation?.details ?
                        activeInformation?.details?.map((item,index)=>(
                            <div className={`${styles.chip} ${activeDetailIndex===index ? styles.active : ""}`}
                                 key={item.title+index}
                                 onClick={()=> setActiveDetailIndex(index)}
                                 >
                                <p>{sections[activeSectionKey]} {index+1}</p>
                                <X 
                                onClick={(event)=>{
                                    event.stopPropagation();
                                    handleDeleteDetail(index)
                                }}/>
                            </div>
                        ))
                        :""}
                        {
                            activeInformation?.details && activeInformation?.details?.length>0?
                            (<div className={styles.new} onClick={handleAddNew}>+New</div>):("")
                        }
                        
                   </div>
                {generateBody()}

                <button onClick={handleSubmission}>Save</button>
            </div>



        </div>
    );

}

export default Editor;