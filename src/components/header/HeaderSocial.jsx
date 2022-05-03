import React from 'react'
import {SiNaver} from 'react-icons/si'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsGoogle} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header_social">
        <a href="http://github.com" target="_blank"><AiOutlineGithub/></a>
        <a href="http://sujinego3971@naver.com" target="_blank"><SiNaver/></a>
        <a href="http://sujinego3971@google.com" target="_blank"><BsGoogle/></a>
    </div>
  )
}

export default HeaderSocial