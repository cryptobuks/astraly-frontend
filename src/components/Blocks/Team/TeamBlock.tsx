import TeamMember from './TeamMember'

const team = [
  {
    title: 'CEO',
    name: 'Mattéo Georges',
    twitter: '',
    image: '',
  },
  {
    title: 'CTO',
    name: 'Matthias Hallgren',
    twitter: '',
    image: '',
  },
  {
    title: 'CMO',
    name: 'Nicolas Vrillac',
    twitter: '',
    image: '',
  },
  {
    title: 'CAIRO DEVELOPER',
    name: 'Filip Laurentiu',
    twitter: '',
    image: '',
  },
  {
    title: 'PRODUCT MANAGER',
    name: 'William Finger',
    twitter: '',
    image: '',
  },
]

const advisors = [
  {
    title: 'CMO',
    name: 'Nicolas Vrillac',
    twitter: '',
    image: '',
  },
  {
    title: 'CAIRO DEVELOPER',
    name: 'Filip Laurentiu',
    twitter: '',
    image: '',
  },
]
const TeamBlock = () => {
  return (
    <div className="ui-page-block">
      <div className="g-container">
        <h2 className="t-block-title t-dark">Team</h2>
        <div className="ml-10">
          {team.map((x, i) => (
            <TeamMember {...x} key={i} />
          ))}

          {advisors.map((x, i) => (
            <TeamMember {...x} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamBlock
