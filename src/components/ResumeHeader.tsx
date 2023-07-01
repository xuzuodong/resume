import { MdOutlineLocationOn, MdOutlineMail, MdOutlinePhone } from 'react-icons/md'

import { ResumeHeaderField } from './ResumeHeaderField'

export function ResumeHeader() {
    return (<div>
        <h1 className="text-center">许作栋的个人简历</h1>
        <div className="
            flex flex-row flex-wrap justify-center items-center
            space-x-2 text-sm sm:text-base space-y-1 text-gray-500 dark:text-gray-300
        ">
            <ResumeHeaderField value="+86 17826877949" icon={<MdOutlinePhone className="w-4 h-4"/>}/>
            <span>·</span>
            <ResumeHeaderField value="hi@xzd.me" icon={<MdOutlineMail className="w-4 h-4"/>}/>
            <span>·</span>
            <ResumeHeaderField value="浙江 杭州" icon={<MdOutlineLocationOn className="w-4 h-4"/>}/>
        </div>
    </div>)
}
