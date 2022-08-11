import React, { useContext, useState } from 'react';
import { Fragment } from 'react';
import { useAuth } from '@hooks/useAuth';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import AppContext from 'context/AppContext';
import ShoppingCart from '@components/ShoppingCart';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Products', href: '/products'},
  { name: 'Sign in', href: '/login'},
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  //
  const router = useRouter();
  //
  const auth = useAuth();

  const userData = {
    name: auth?.user?.username,
    email: auth?.user?.email,
    imageUrl: `https://ui-avatars.com/api/?name=${auth?.user?.username}`,
  };

  /**
  console.log(userData);
  */

  //cart
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggleOrders(!toggleOrders);
  }
  //

  return (
    <>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href='/'>
                      <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            router.asPath === item.href
                              ? '-skew-y-3 bg-pink-400 text-white'
                              : 'text-black hover:bg-green-200 hover:text-black',
                                'px-3 py-1.5 font-Roboto text-base'
                            )}
                        >
                          <span className='relative'>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button onClick={handleToggle} type='button' className='rounded-full flex items-center ml-auto p-2 bg-green-200 text-gray-700 focus:outline-none'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                      {toggleOrders && <ShoppingCart />}
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-600 hover:text-black focus:outline-none focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs bg-gray-1000 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={userData.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <button onClick={() => auth.logout()} className="block px-4 py-2 text-sm text-gray-700">
                            Logout
                          </button>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-1 pb-2 space-y-0.5 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(router.asPath === item.href ? 'bg-pink-400 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-black', 'block px-3 py-1.5 font-Roboto text-base')}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-1 border-t border-gray-200">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={userData.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-black">{userData.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-500">{userData.email}</div>
                  </div>
                    <button onClick={handleToggle} type='button' className='rounded-full flex items-center ml-auto p-2 bg-green-200 text-gray-700 focus:outline-none'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {state.cart.length > 0 ? <div className='w-5 text-black'>{state.cart.length}</div> : null }
                    </button>
                  <button
                    type="button"
                    className="flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-black"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <button onClick={() => auth.logout()} className="block px-4 py-2 text-small text-gray-700">
                    Logout
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}