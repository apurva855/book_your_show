import React from "react";
import { Disclosure } from '@headlessui/react';
import {BiChevronDown,BiChevronUp} from "react-icons/bi";

const PlaysFilter =(props)=> {
  return (
    <Disclosure>
     {({ open }) => (
<>
       <Disclosure.Button className="py-2 flex items-center gap-3">
       {open ? < BiChevronUp /> : <BiChevronDown/>}
          <span className={open? "text-pink-700":"text-gray-800"}>
            {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
          <div className="flex items-center gap-3 ">
          {props.tags.map((tag)=>(
            <>
            <div className="border-2 border-gray-400 p-0.5 text-sm">
            <span className="text-pink-700">{tag}</span>
            </div>
            </>
          ))}
          </div>
          </Disclosure.Panel>
  </>


     )
  }
  </Disclosure>
  )
};
export default PlaysFilter;
