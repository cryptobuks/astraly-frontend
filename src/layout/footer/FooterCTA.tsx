import BaseInput from '../../components/ui/inputs/BaseInput'
import BaseButton from '../../components/ui/buttons/BaseButton'
import { ForwardIcon } from '../../components/ui/Icons/Icons'
import ForwardSolid from 'assets/icons/currentColor/Forward.svg?inline'

const FooterCTA = () => {
  const onSubmit = () => {}
  return (
    <div className="grid md:grid-cols-5 -mt-20">
      <div></div>
      <div className="FooterCTA bg-primaryClearBg block-no-bg col-span-3 py-6 px-8">
        <div className="title font-heading ui-t-primary text-center text-24 h-[60px] flex items-center justify-center mb-4">
          <ForwardSolid className="mr-2 w-9 h-9 hidden md:inline-block" viewBox="0 0 25 24" />
          Get alerts for news sales!
        </div>
        <form onSubmit={onSubmit} className="flex w-full gap-4 flex-col md:flex-row">
          <div className="flex-grow">
            <BaseInput value={'me'} onChange={() => {}} placeholder={'satoshi@astraly.xyz'} />
          </div>

          <BaseButton onClick={onSubmit} className="px-16 transform -translate-y-1">
            <ForwardIcon className={'mr-1'} />
            Subscribe
          </BaseButton>
        </form>
      </div>
      <div></div>
    </div>
  )
}

export default FooterCTA
