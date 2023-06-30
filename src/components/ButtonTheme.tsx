import React from 'react'
import { useTheme } from 'next-themes'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

function Button() {
    const { systemTheme, theme, setTheme } = useTheme()

    const isDark = () => theme === 'system' ? systemTheme === 'dark' : theme === 'dark'

    const toggleTheme = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const x = event.clientX
        const y = event.clientY
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y),
        )

        // @ts-expect-error startViewTransition
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
        const transition = document.startViewTransition(() => {
            if (systemTheme === undefined) {
                theme === 'dark' ? setTheme('light') : setTheme('dark')
                return
            }

            if (theme === 'system') {
                systemTheme === 'dark' ? setTheme('light') : setTheme('dark')
                return
            }

            if (theme === systemTheme) {
                theme === 'dark' ? setTheme('light') : setTheme('dark')
            } else {
                setTheme('system')
            }
        })

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ]
            document.documentElement.animate(
                {
                    clipPath: isDark() ? [...clipPath].reverse() : clipPath,
                },
                {
                    duration: 300,
                    easing: 'ease-in-out',
                    pseudoElement: isDark()
                        ? '::view-transition-old(root)'
                        : '::view-transition-new(root)',
                },
            )
        })
    }

    return (
        <button
            type="button"
            className="transition-all duration-100 dark:text-gray-50 text-gray-800 float-right p-4"
            onClick={e => toggleTheme(e)}
        >
            {
                isDark() ? <MdOutlineLightMode size="24px" /> : <MdOutlineDarkMode size="24px" />
            }

        </button>
    )
}

export default Button
