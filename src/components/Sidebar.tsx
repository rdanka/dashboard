"use client"

import { GitCompare, LayoutDashboard, LogOut,  Moon, Sun, User, Wrench } from "lucide-react"
import { Button } from "./ui/button"
import { Switch } from "./ui/switch"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
import { useState} from "react"
import Image from "next/image"

const Sidebar = () => {
    const { theme, setTheme } = useTheme();
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <AnimatePresence mode="wait" initial={false}> 
            <motion.div
                className={``}
                animate={{ width: isOpen ? 'auto' : '90px' }}
            >
                <div className="flex flex-col justify-between bg-secondary h-screen p-5">
                    <div className="flex justify-center items-center ">
                        {isOpen ? (
                            <>
                                <Image 
                                    src='/logo.png'
                                    alt="logo"
                                    width={170}
                                    height={30}
                                    className="dark:hidden object-contain"
                                    onClick={() => setIsOpen(!isOpen)}
                                    loading="eager"
                                />
                                <Image 
                                    src='/logo-dark.png'
                                    alt="logo"
                                    width={170}
                                    height={30}
                                    className="hidden dark:flex object-contain"
                                    onClick={() => setIsOpen(!isOpen)}
                                    loading="eager"
                                />
                            </>
                        ) : (
                            <Image 
                                src='/icon.png'
                                alt="logo"
                                width={170}
                                height={30}
                                className="object-contain"
                                onClick={() => setIsOpen(!isOpen)}
                                loading="eager"
                            />
                        )}
                    </div>
                    <ul className="flex flex-col justify-center items-center w-full gap-1.5">
                        <li className='gap-2 flex  w-full p-3 py-4 hover:bg-primary hover:cursor-pointer hover:text-white rounded-lg'>
                            <LayoutDashboard />
                            {isOpen ? <span>Dashboard</span> : null}
                        </li>

                        <li className='gap-2 flex relative  w-full p-3 py-4 hover:bg-primary hover:cursor-pointer whitespace-nowrap hover:text-white rounded-lg'>
                            <User />
                            {isOpen ? <span>Team Leaders</span> : null}
                           

                        </li>
                        <li className='gap-2 flex  w-full p-3 py-4 hover:bg-primary hover:cursor-pointer hover:text-white rounded-lg'>
                            <Wrench />
                            {isOpen ? <span>Workers</span> : null}

                        </li>
                        <li className='gap-2 flex  w-full p-3 py-4 hover:bg-primary hover:cursor-pointer hover:text-white rounded-lg'>
                            <GitCompare />
                            {isOpen ? <span>Compare</span> : null}
                        </li>
                    </ul>
                    <div className="flex flex-col gap-4">
                        <Button className="flex w-full py-5 justify-between gap-2 text-white hover:bg-primary hover:cursor-pointer rounded-md"
                        >
                            <LogOut />
                            {isOpen ? <span>Back to the main page</span> : null}
                        </Button>
                        <div className="flex justify-around bg-slate-300/80 rounded-md py-3">
                            {isOpen ? <><Sun className="flex dark:hidden "/> <span className="flex dark:hidden ">Light Mode</span></> : null}
                            {isOpen ? <><Moon className="hidden dark:flex "/> <span className="hidden dark:flex ">Dark mode</span></>: null}
                            <Switch 
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark') }
                            />
                            
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Sidebar