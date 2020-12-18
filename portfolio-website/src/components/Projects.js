import React from 'react'
import projects from '../projects';

export default function Projects() {
    return (
        <div>
            <section className="projects">
               <h1 className="projects__title">Projects</h1>
               <div className="projects__card">
                   <div className="projects__card-left">
                       {/* <img className="projects__img" src={projects.BandSite.screenshot} alt={projects.BandSite.name}/> */}
                   </div>
                   <div className="projects__card-right">
                       <h1 className="projects__card-title">{projects.BrainFlix.name}</h1>
                       <p className="projects__card-desc">{projects.BrainFlix.desc}</p>
                       <p className="projects__card-desc projects__card-desc--grey">{projects.BrainFlix.start_date} | {projects.BrainFlix.status}</p>
                       <div className="project__tags">
                            <button className="projects__tag projects__tag--react">{projects.BrainFlix.tech[0]}</button>
                            <button className="projects__tag projects__tag--node">{projects.BrainFlix.tech[1]}</button>
                            <button className="projects__tag projects__tag--express">{projects.BrainFlix.tech[2]}</button>
                       </div>
                       <a className="projects__btn" href={projects.BrainFlix.github}>Visit Repo</a>
                   </div>
               </div>
               <div className="projects__card">
                   <div className="projects__card-left">
                       {/* <img className="projects__img" src={projects.BandSite.screenshot} alt={projects.BandSite.name}/> */}
                   </div>
                   <div className="projects__card-right">
                       <h1 className="projects__card-title">{projects.BandSite.name}</h1>
                       <p className="projects__card-desc">{projects.BandSite.desc}</p>
                       <p className="projects__card-desc projects__card-desc--grey">{projects.BandSite.start_date} | {projects.BandSite.status}</p>
                       <div className="project__tags">
                            <button className="projects__tag projects__tag--html">{projects.BandSite.tech[0]}</button>
                            <button className="projects__tag projects__tag--css">{projects.BandSite.tech[1]}</button>
                            <button className="projects__tag projects__tag--js">{projects.BandSite.tech[2]}</button>
                       </div>
                       <a className="projects__btn" href={projects.BandSite.github}>Visit Repo</a>
                   </div>
               </div>
               <div className="projects__card">
                   <div className="projects__card-left">
                       {/* <img className="projects__img" src={projects.BandSite.screenshot} alt={projects.BandSite.name}/> */}
                   </div>
                   <div className="projects__card-right">
                       <h1 className="projects__card-title">{projects.NetFlixClone.name}</h1>
                       <p className="projects__card-desc">{projects.NetFlixClone.desc}</p>
                       <p className="projects__card-desc projects__card-desc--grey">{projects.NetFlixClone.start_date} | {projects.NetFlixClone.status}</p>
                       <div className="project__tags">
                            <button className="projects__tag projects__tag--react">{projects.NetFlixClone.tech[0]}</button>
                       </div>
                       <a className="projects__btn" href={projects.BandSite.github}>Visit Repo</a>
                   </div>
               </div>
               <div className="projects__card">
                   <div className="projects__card-left">
                       {/* <img className="projects__img" src={projects.BandSite.screenshot} alt={projects.BandSite.name}/> */}
                   </div>
                   <div className="projects__card-right">
                       <h1 className="projects__card-title">{projects.InStock.name}</h1>
                       <p className="projects__card-desc">{projects.InStock.desc}</p>
                       <p className="projects__card-desc projects__card-desc--grey">{projects.InStock.start_date} | {projects.InStock.status}</p>
                       <div className="project__tags">
                            <button className="projects__tag projects__tag--react">{projects.InStock.tech[0]}</button>
                            <button className="projects__tag projects__tag--node">{projects.InStock.tech[1]}</button>
                            <button className="projects__tag projects__tag--express">{projects.InStock.tech[2]}</button>
                       </div>
                       <a className="projects__btn" href={projects.InStock.github}>Visit Repo</a>
                   </div>
               </div>
           </section>
        </div>
    )
}
