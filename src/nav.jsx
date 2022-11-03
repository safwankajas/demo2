import React from 'react'

function navbar() {
    return (
        <div className="navbar">
            <div className="fixed w-full">
                <nav id='na' className="  shadow-lg bg-neutral-900   shadow-neutral-800/40  mt-4 mx-auto  text-neutral-50 md:max-w-6xl text-center h-14  items-center rounded-xl flex  flex-row justify-between space-x-2 ">
                    <div className="  hover:text-red-800 basis-1/6 items-center  ml-4 rounded-xl w-auto  text-3xl bg-clip-text text-transparent bg-gradient-to-br from-red-900  px-4  border-spacing-1 font-extrabold  "><a href="">
                        SAFWAN
                    </a>
                    </div>
                    <div className="  flex justify-evenly basis-1/2 space-x-2">

                        {[
                            ['Home', '/dashboard'],
                            ['About', '/team'],
                            ['Projects', '/projects'],
                            ['Connect', '/reports'],
                        ].map(([title, url]) => (
                            <a href={url} className="  bg-clip-text text-transparent bg-gradient-to-br from-white   text-lg  px-1  rounded-lg   hover:text-white  font-bold ">{title}</a>
                        ))}

                    </div>
                </nav>
            </div>

        </div>
    )
}

export default navbar