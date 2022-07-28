const TeamMember: React.FC<{
  title: string
  name: string
  twitter: string
  image: string
}> = ({ title, name, twitter, image }) => {
  return (
    <div className="TeamMember block py-4 pl-[100px] lg:w-[420px] relative md:ml-[100px]">
      <div className="image absolute left-[-100px] top-1/2 transform -translate-y-1/2">
        <img src={image} alt={''} className="w-[200px]" />
      </div>
      <div className="content">
        <div className="title font-heading font-bold mb-0.5">{title} </div>
        <div className="name font-bold text-24 ui-t-dark mb-2">{name}</div>
        <div className="twitter">
          <div className="icon"></div>
          twitter.com/{twitter}
        </div>
      </div>
    </div>
  )
}

export default TeamMember
