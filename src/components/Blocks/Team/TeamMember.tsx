const TeamMember: React.FC<{
  title: string
  name: string
  twitter: string
  image: string
}> = ({ title, name, twitter, image }) => {
  return (
    <div className="TeamMember">
      <div className="image"></div>
      <div className="content">
        <div className="title">{title} </div>
        <div className="name">{name}</div>
        <div className="twitter">
          <div className="icon"></div>
          {twitter}
        </div>
      </div>
    </div>
  )
}

export default TeamMember
