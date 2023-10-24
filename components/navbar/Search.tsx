'use client'
import {BiSearch} from 'react-icons/bi'
export const Search = ()=>{
    return (
        <>
            <div className=" border-[1px] w-full md:w-auto py-2 rounded-full hover:shadow-md transition cursor-pointer">
                <div className="flex flex-row items-center justify-between">
                    <div className="text-sm font-semibold px-6">
                        Any Where
                    </div>
                    <div className=" hidden md:block border-x-[1px] flex-1 text-center text-sm font-semibold px-6">
                        Any Week
                    </div>
                    <div className="pl-6 pr-2 text-gray-600 flex flex-row  item-center gap-3 text-sm ">
                        <div className="hidden sm:flex sm:items-center">
                            Add Guests
                        </div>
                        <div className="p-2 bg-rose-500 rounded-full text-white">
                            <BiSearch size={18}/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Search;