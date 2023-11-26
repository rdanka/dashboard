import Image from "next/image"

const Header = () => {
    return (
        <nav className="flex justify-between w-full bg-white rounded-2xl p-4 z-10">
            <div className="flex">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                    <Image 
                        src='/next.svg'
                        alt="avatar"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="flex flex-col items-start ml-2">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</h4>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-300">Admin</p>
                </div>
            </div>
        </nav>
    )
}

export default Header