import React, {useState} from 'react'

export default function FindProducts({itemGetter, stateSetter}) {

  

    return (
        <div className="mx-auto flex flex-row justify-center items-stretch">
            <textarea placeholder="You may copy or type item numbers up to ten items." rows={11} cols={10} className="px-4 py-2 border rounded-xl my-8 resize-none"  onChange={(e) => stateSetter(e)} />
            <button className="bg-green-400 text-gray-50 px-4 py-2 mx-2 hover:bg-gray-400 my-8 rounded-xl" onClick={itemGetter}>Find</button>
        </div>
    )
}
