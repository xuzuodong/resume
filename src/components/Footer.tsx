import { AiFillGithub } from 'react-icons/ai'

export function Footer() {
    return <footer className="max-w-2xl text-center pb-8 pt-2 m-auto op-60">
        <hr
            className="border-black dark:border-white border-opacity-8 dark:border-opacity-8"
        />
        <div className="mt-8 flex justify-between items-center flex-wrap px-4">
            <div className="flex flex-col space-y-2">
                <div className="text-xs flex items-center space-x-1.5">
                    <span>© {new Date().getFullYear()}</span>
                    <span>Ted Xu</span>
                    <a href="https://github.com/xuzuodong/resume" target="_blank">
                        <AiFillGithub size="16px" />
                    </a>
                </div>
            </div>
            <p className="text-xs inline">
                Powered by
                <span> </span>
                <a
                    href="https://nextjs.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Next.js
                </a>
                <span> </span> &amp; <span> </span>
                <a
                    href="https://vercel.com/home"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Vercel
                </a>
            </p>
        </div>
    </footer>
}
