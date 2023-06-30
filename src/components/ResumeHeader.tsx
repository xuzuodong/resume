import { ResumeHeaderField } from './ResumeHeaderField'
import { LocationIcon, MailIcon, PhoneIcon } from './Icon'

export function ResumeHeader() {
    return (<div>
        <h1 className="text-center">许作栋的个人简历</h1>
        <div className="
            flex flex-row flex-wrap justify-center items-center
            space-x-2 text-sm sm:text-base space-y-1 text-gray-500 dark:text-gray-300
        ">
            <ResumeHeaderField value="+86 17826877949" icon={<PhoneIcon className="w-4 h-4"/>}/>
            <span>·</span>
            <ResumeHeaderField value="hi@xzd.me" icon={<MailIcon className="w-4 h-4"/>}/>
            <span>·</span>
            <ResumeHeaderField value="浙江 杭州" icon={<LocationIcon className="w-4 h-4"/>}/>
        </div>
    </div>)
}
