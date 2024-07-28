import React from 'react'
import { Link } from 'react-router-dom';
import { Navigations } from '../../navigation/navigation';
const Header = () => {
  return (
    <>
      <div className='bg-[#72676f] h-[60px] w-auto text-white'>
        <div className="container mx-auto">
          <ul className="flex">
            {
            Navigations.map ((item) => {
              return (
                <li className="mr-3" key={item.id}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header