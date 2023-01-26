import React, { useEffect, useState } from "react";
import { AtSign, Calendar, Columns, GitHub, Linkedin, Map, MapPin, Paperclip, Phone } from "react-feather";
import styles from "./Resume.module.css"

function Resume(props){
    const information= props.information;
    const sections= props.sections;
    const [columns, setColumns]=useState([[],[]])
    const info={
        workExp:information[sections.workExp],
        project:information[sections.project],
        education:information[sections.education],
        achievements:information[sections.achievements],
        basicInfo:information[sections.basicInfo],
        summary:information[sections.summary],
        other:information[sections.other],
    };
    const getFormattedDate=(value)=>{
        if(!value) return""
        const date =new Date(value)
        return`${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`
    };

    const sectionDiv={
        [sections.workExp]:  <div key={"workexp"} className={`${styles.section} ${info.workExp?.sectionTitle? "": styles.hidden}`}>
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
            {
                info.workExp?.details?.map(item=>(
                    <div className={styles.item} key={item.title}>
                        {
                            item.title &&
                            <p className={styles.title}>{item.title}</p>
                        }
                        {
                            item.companyName && (
                            <p className={styles.subTitle}>{item.companyName}</p>
                        )}
                        
                        {
                            item.certificationLink && (
                                <a className={styles.link} href={item.certificationLink}>
                                <Paperclip />
                                {item.certificationLink}
                            </a>
                        )}

                       { item.startDate && item.endDate ?(
                                <div className={styles.date}>
                                <Calendar /> {getFormattedDate(item.startDate)}- {getFormattedDate(item.endDate)}
                            </div>
                            ):("")}
                        {
                            item.location &&(
                            <p className={styles.date}>
                            <MapPin /> 
                            {item.location}
                            </p>

                            )
                        }

                        {item.points?.length>0 && (
                            <ul className={styles.points}>
                                {
                                    item.points?.map((elem,index)=>(
                                        <li className={styles.point} key={elem + index}>
                                            {elem}
                                        </li>
                                    ))
                                }
                        </ul>
                        )}

                        
                    </div>
                ))
            }
        </div>

    </div>,

    [sections.project]: <div key={"project"} className={`${styles.section} ${info.project?.sectionTitle? "": styles.hidden}`}>
    <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
    <div className={styles.content}>
        {
            info.project?.details?.map(item=>(
                <div className={styles.item}>
                    {
                        item.title &&
                        <p className={styles.title}>{item.title}</p>
                    }

                    

                    {
                        item.overview &&(
                            <p className={styles.overview}>{item.overview}</p>
                        )

                    }

                    {item.points?.length>0 && (
                      <ul className={styles.points}>
                        {
                            item.points?.map((elem,index)=>(
                                <li className={styles.point} key={elem + index}>
                                    {elem}
                                </li>
                            ))
                        }
                </ul>
                )}

                </div>
            ))
        }
    </div>
</div>,
[sections.education]: <div key={"education"} className={`${styles.section} ${info.education?.sectionTitle? "": styles.hidden}`}>
<div className={styles.sectionTitle}>{info.education?.sectionTitle}</div>
<div className={styles.content}>
    {info.education?.details?.map((item)=>(
        <div className={styles.item}>
            {
                item.title &&
                <p className={styles.title}>{item.title}</p>
            }

            {
                item.college &&
                <p className={styles.subTitle}>{item.college}</p>
            }

             {                     
                 item.startDate && item.endDate ?(
                    <div className={styles.date}>
                    <Calendar /> {getFormattedDate(item.startDate)}- {getFormattedDate(item.endDate)}
                </div>
                ):("")}
       </div>

    ))}
    

    </div>
</div>,

[sections.achievements]: <div key={"achievements"}  className={`${styles.section} ${info.achievements?.sectionTitle? "": styles.hidden}`}>
<div className={styles.sectionTitle}>{info.achievements?.sectionTitle}</div>
<div className={styles.content}>
    {
        info.achievements?.points?.length>0 && (
            <ul className={styles.points}>
              {
                  info.achievements?.points?.map((elem,index)=>(
                      <li className={styles.point} key={elem + index}>
                          {elem}
                      </li>
                  ))
              }
      </ul>
      )}
    
</div>
</div>,

[sections.summary]:<div key={"summary"} className={`${styles.section} ${info.summary?.sectionTitle? "": styles.hidden}`}>
<div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
<div className={styles.content}>
    <p className={styles.overview}>{info.summary?.detail}</p>
</div>
</div>,

[sections.other]:<div key={"other"} className={`${styles.section} ${info.summary?.sectionTitle? "": styles.hidden}`}>
<div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
<div className={styles.content}>
    <p className={styles.overview}>{info.other?.detail}</p>
</div>
</div>
    };

    useEffect(()=>{
        setColumns([
                [sections.project,sections.education,sections.summary],
                [sections.workExp,sections.achievements,sections.other],
        ]);
    },[]);

   
    

    

return(
    <div className={styles.container}>
        <div className={styles.header}>
        <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
            <p className={styles.subheading}>{info.basicInfo?.detail?.title}</p>

            <div className={styles.links}>
                <a className={styles.link}><AtSign/>{info.basicInfo?.detail?.email}</a>
                <a className={styles.link}><Phone/>{info.basicInfo?.detail?.phone}</a>
                <a className={styles.link}><MapPin/>{info.basicInfo?.detail?.address}</a>
                <a className={styles.link}><Linkedin/>{info.basicInfo?.detail?.linkedin}</a>
               

            </div>
        </div>
        <div className={styles.main}>
            <div className={styles.col1}>{
                columns[0].map(item=>sectionDiv[item])
            }</div>
            <div className={styles.col2}>{
                 columns[1].map(item=>sectionDiv[item])
            }</div>
        </div>
    </div>
);
}

export default Resume;