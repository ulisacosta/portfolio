import React from 'react'
import Projects from './Projects'
import { CardProjects } from './Projects.data'

export default function ProjectsAll() {
  return (
    <Projects title="Mis" projects={CardProjects}></Projects>
  )
}
