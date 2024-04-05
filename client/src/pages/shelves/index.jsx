import React from 'react'
import Contents from '../home/contents'
import Shelves from './../../assets/logo.png'
function index() {
  let paths =
  [
      { title: "shelves", path: 'shelves' },
      // { title:"hOME", path: `shelves/${data?.name?.replace(/\s+/g, "-").toLowerCase()}` }
  ]

  return (
    <Contents backDrop={Shelves} title="shelves"  path={paths} bg="bg-slate-50">

    </Contents>
  )
}

export default index