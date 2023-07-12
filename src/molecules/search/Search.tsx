"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import React from "react"
import { BiSearch } from "react-icons/bi";

const Search = () => (
  <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-md hover:shadow-md cursor-pointer">
    <div className="flex flex-row items-center justify-between">
      <div className="text-sm font-semibold px-6">
        En cualquier lugar del mundo
      </div>
      <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
        Cualquier semana
      </div>
      <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-4">
        <div className="hidden sm_block">Cuantos?</div>
        <div className="p-2 bg-rose-500 rounded-full text-white">
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  </div>
)

export default Search