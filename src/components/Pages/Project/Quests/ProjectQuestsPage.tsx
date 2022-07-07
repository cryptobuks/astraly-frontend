import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Project } from '../../../../interfaces'
import ProjectLayout from '../ProjectLayout'
import AllocationInfo from '../Main/AllocationInfo'
import QuestRequirements from './QuestRequirements'
import Quests from './Quests'
import Lightning from 'assets/icons/solid/Lightning-alt.svg'
import { useQuery } from '@apollo/client'
import { PROJECT } from '../../../../api/gql/querries'

const ProjectQuestsPage = () => {
  const router = useRouter()
  const { pid } = router.query
  const [project, setProject] = useState<Project | undefined>(undefined)

  const { data } = useQuery(PROJECT, {
    variables: {
      idoId: pid,
    },
  })

  useEffect(() => {
    data && setProject(data.project)
  }, [data])

  if (!project) {
    return <></>
  }

  return (
    <>
      <ProjectLayout project={project}>
        <QuestRequirements />

        <div className="block mb-4">
          <div className="bg-primaryClearBg rounded-3xl px-8 py-5">
            <div className="flex items-center text-primaryDark">
              <img src={Lightning} alt={''} />
              <ul className={'list-disc ml-8'}>
                <li>
                  <strong>Booster Quests</strong> are optional but increse your chances of winning
                  an allocation when burning your lottery tickets.
                </li>
                <li>It’s also a great opportunity to learn more about the product by using it.</li>
              </ul>
            </div>
          </div>
        </div>

        <Quests />

        <AllocationInfo projectType={project.type} />
      </ProjectLayout>
    </>
  )
}

export default ProjectQuestsPage
