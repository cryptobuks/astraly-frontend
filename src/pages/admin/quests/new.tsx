import QuestForm from '../../../components/Admin/QuestForm'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Quest } from '../../../interfaces'

const newQuest = () => {
  const router = useRouter()
  const { projectIdo } = router.query
  const [quest, setQuest] = useState({} as Quest)

  useEffect(() => {
    setQuest({
      ...quest,
      idoId: Number(projectIdo),
    })
  }, [projectIdo])
  return (
    <div className="new">
      <QuestForm quest={quest} />
    </div>
  )
}

export default newQuest
