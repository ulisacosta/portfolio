import React from 'react'
import Projects from './Projects'
import { CardProjects } from './Projects.data'
import { useTranslation } from 'react-i18next';
export default function ProjectsAll() {
  const { t } = useTranslation();
  return (
    <Projects title={t("my")} projects={CardProjects}></Projects>
  )
}
