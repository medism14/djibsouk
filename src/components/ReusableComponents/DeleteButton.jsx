import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function DeleteButton({ name, onClick }) {
  return (
    <button className="p-[7px] rounded-xl bg-[--accent-red] text-[--light] transition-all duration-300 hover:bg-[--accent-red-modif] cursor-pointer">
        <FontAwesomeIcon icon={faTrashCan} className="text-2xl" />
    </button>
  )
}
