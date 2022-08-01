import { NextPage } from 'next'
import Container from '../components/ui/Container'
import BaseButton from 'components/ui/buttons/BaseButton'
import BaseAdminInput from 'components/ui/inputs/BaseAdminInput'

const souldrop: NextPage = () => {
  return (
    <div className="souldrop">
      <div className={'bg-gradient-to-t from-bgPurple to-transparent'}>
        <Container>
          <div className="lg:flex mb-16 ">
            <h1 className="page-title font-heading uppercase text-primaryDark text-shadow mb-4 lg:mb-0">
              Souldrops
            </h1>
          </div>
        </Container>
        <div className="g-container">
          <div className="grid grid-cols-2">
            <div className="col">
              <div className="text-24 font-heading mb-4 flex">
                Create new souldrop
                <BaseButton small={true} className="px-4 ml-8" onClick={() => null}>
                  Save
                </BaseButton>
              </div>

              <BaseAdminInput label={'name'} value={''} onChange={() => null} />
            </div>
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  )
}

export default souldrop
