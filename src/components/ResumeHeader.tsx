import { ResumeHeaderField } from './ResumeHeaderField'
import PhoneIcon from 'public/images/phone-solid.svg'
import MailIcon from 'public/images/envelope-solid.svg'
import LocationIcon from 'public/images/location.svg'

export function ResumeHeader() {
    return (<div>
        <h1 className="text-center">许作栋的个人简历</h1>
        <div className="flex justify-center space-x-2">
            <ResumeHeaderField value="+86 17826877949" icon={<PhoneIcon className="w-4 h-4"/>}/>
            <span>·</span>
            <ResumeHeaderField value="hi@xzd.me" icon={<MailIcon className="w-4 h-4"/>}/>
            <span>·</span>
            <ResumeHeaderField value="浙江 杭州" icon={<LocationIcon className="w-4 h-4"/>}/>
        </div>
    </div>)
}
