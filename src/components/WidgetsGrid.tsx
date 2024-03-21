'use client'

import { useAppSelector } from "@/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCarOutline, IoCartOutline } from "react-icons/io5"


const WidgetsGrid = () => {

  const count = useAppSelector(state => state.counter.count)

  return (
    <div className="flex flex-wrap p-2 justify-center items-center">
      <SimpleWidget 
        title={count.toString()}
        subtitle='contador'
        label="Contador"
        icon={<IoCartOutline size={70} className="text-blue-600"/>}  
        href="/dashboard/counter"
      />
    </div>
  )
}

export default WidgetsGrid