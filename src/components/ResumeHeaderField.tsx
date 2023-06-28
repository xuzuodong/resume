import { type ComponentPropsWithoutRef, type ReactComponentElement } from 'react'

export function ResumeHeaderField(props: ComponentPropsWithoutRef<'span'> & {
    icon: ReactComponentElement<'svg'>
    value: string
}) {
    return <span className="flex justify-center items-center">
        {props.icon}
        <span className="w-2"></span>
        {props.value}
    </span>
}
