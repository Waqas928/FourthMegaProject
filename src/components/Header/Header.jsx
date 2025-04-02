import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-2 flex-shrink-0'>
            <Link to='/'>
              <Logo width='100px' />
            </Link>
          </div>

          {/* Navigation - always visible */}
          <ul className='flex flex-1 justify-center items-center gap-1 flex-wrap'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-2 py-1 text-xs 
                              sm:px-3 sm:py-1 sm:text-sm 
                              md:px-4 md:py-1.5 md:text-base 
                              lg:px-5 lg:py-2 lg:text-lg 
                              text-white hover:bg-blue-100 
                              hover:text-gray-800 rounded-full duration-200 whitespace-nowrap'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>

      {/* Custom CSS */}
      <style jsx>{`
        nav {
          flex-wrap: nowrap;
        }
        
        ul {
          min-width: 0; /* Prevents overflow */
        }
        
        li button {
          min-width: 0; /* Allows buttons to shrink */
        }
      `}</style>
    </header>
  )
}

export default Header