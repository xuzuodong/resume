import React, { type ComponentPropsWithoutRef, type ReactElement } from 'react'
import { BiLogoApple, BiLogoChrome, BiLogoDocker, BiLogoReact, BiLogoVisualStudio, BiLogoVuejs } from 'react-icons/bi'
import { SiExpress, SiNextdotjs, SiNginx, SiNuxtdotjs, SiOpenai, SiPrisma, SiRollupdotjs, SiTrpc, SiVercel, SiWarp, SiWebpack } from 'react-icons/si'
import { FaUbuntu } from 'react-icons/fa'
import { BsCircleFill, BsFillLightningFill, BsGit } from 'react-icons/bs'
import { GoCopilot } from 'react-icons/go'

import ArcIcon from 'public/icons/arc.svg'

export type BadgeVariantType =
'Vue' | 'React'
| 'Nuxt' | 'Next'
| 'Prisma' | 'tRPC' | 'Express'
| 'Vite' | 'webpack' | 'Rollup'
| 'Docker' | 'Ubuntu' | 'Git' | 'Vercel' | 'Nginx'
| 'macOS' | 'Visual Studio Code' | 'Warp' | 'OrbStack' | 'Arc' | 'Chrome'
| 'OpenAI GPT-3.5' | 'GitHub Copilot'

const variants: Record<BadgeVariantType, { comp: ReactElement; color: string }> = {
    'Vue': {
        comp: <BiLogoVuejs size="13px" />,
        color: '#42b883',
    },
    'React': {
        comp: <BiLogoReact />,
        color: '#087EA4',
    },
    'Nuxt': {
        comp: <SiNuxtdotjs size="13px" />,
        color: '#00dc82',
    },
    'Next': {
        comp: <SiNextdotjs size="12px" />,
        color: '#171717',
    },
    'Prisma': {
        comp: <SiPrisma size="12px" />,
        color: '#1A202C',
    },
    'tRPC': {
        comp: <SiTrpc size="12px" />,
        color: '#398CCB',
    },
    'Express': {
        comp: <SiExpress />,
        color: '#010101',
    },
    'Vite': {
        comp: <BsFillLightningFill size="12px" />,
        color: '#747bff',
    },
    'webpack': {
        comp: <SiWebpack size="12px" />,
        color: '#1a6bac',
    },
    'Rollup': {
        comp: <SiRollupdotjs size="12px" />,
        color: '#EF3434',
    },
    'Docker': {
        comp: <BiLogoDocker />,
        color: '#003f8c',
    },
    'Ubuntu': {
        comp: <FaUbuntu size="12px" />,
        color: '#e95420',
    },
    'Git': {
        comp: <BsGit size="12px" />,
        color: '#f14e32',
    },
    'Vercel': {
        comp: <SiVercel size="11px" />,
        color: '#000000',
    },
    'Nginx': {
        comp: <SiNginx size="12px" />,
        color: '#099639',
    },
    'macOS': {
        comp: <BiLogoApple size="14px" />,
        color: '#000000',
    },
    'Visual Studio Code': {
        comp: <BiLogoVisualStudio size="12px" />,
        color: '#0066b8',
    },
    'Warp': {
        comp: <SiWarp size="12px" />,
        color: '#16b4ff',
    },
    'OrbStack': {
        comp: <BsCircleFill size="11px" />,
        color: '#6F44BF',
    },
    'Arc': {
        comp: <ArcIcon className="w-[15px] h-[15px]"/>,
        color: '#FA4531',
    },
    'Chrome': {
        comp: <BiLogoChrome size="12px" />,
        color: '#1967d2',
    },
    'OpenAI GPT-3.5': {
        comp: <SiOpenai size="12px" />,
        color: '#10a37f',
    },
    'GitHub Copilot': {
        comp: <GoCopilot size="12px" />,
        color: '#211837',
    },
}

export function Badge(props: ComponentPropsWithoutRef<'span'> & {
    variant: BadgeVariantType
}) {
    return <span
        className="
            inline-flex items-center space-x-1
            text-xs text-white font-medium font-mono
            mr-1.5 sm:mr-2 px-1 sm:px-2 md:px-2.5 py-0.5 rounded
            border border-transparent dark:border-gray-600
        "
        style={{ backgroundColor: variants[props.variant].color }}>
        {variants[props.variant].comp }
        <span>{props.variant}</span>
    </span>
}
