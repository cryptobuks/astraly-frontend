import { useQuery } from '@apollo/client'
import { QUEST } from '../../../api/gql/querries'
import { useRouter } from 'next/router'
import QuestForm from '../../../components/Admin/QuestForm'

const QuestId = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, loading } = useQuery(QUEST, {
    variables: {
      _id: id,
    },
  })

  if (!data) {
    return <div></div>
  }

  return <QuestForm quest={data.quest} />
}

export default QuestId
