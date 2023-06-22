import { Button, Box } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import ConnectWallet from './ConnectNav/ConnectWallet';
import { Show, Hide } from '@chakra-ui/react';

export default function NavBar({ updateBalance, target }) {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav style={{ backgroundColor: 'black' }} className="w-full shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center space-between py-3 md:py-5 md:block">
                            <div className="md:hidden">
                                <button
                                    className="pr-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Show above='md'>
                                    <a href="#">
                                        <h2 className="text-3xl text-white font-extrabold">WCFI</h2>
                                    </a>
                                </Show>
                                <Show below='md'>
                                    <a href="#">
                                        <h2 className="text-2xl text-white font-extrabold pr-1">WCFI</h2>
                                    </a>
                                    <ConnectWallet updateBalance={updateBalance}></ConnectWallet>
                                </Show>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={` flex justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="font-semibold text-md items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white">
                                    {/* <Box style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                        <Link href="/" >
                                            Home
                                        </Link>
                                    </Box> */}
                                    <a
                                        className={target == "home" ? "bg-gradient-to-r from-teal-200 via-cyan-300 via-purple-200 to-pink-400 text-transparent bg-clip-text " : ""}
                                        href='/'
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="text-white">
                                    <a
                                        className={target == "marketplace" ? "bg-gradient-to-r from-teal-200 via-cyan-300 via-purple-200 to-pink-400 text-transparent bg-clip-text " : ""}
                                        href='/marketplace'
                                    >
                                        Marketplace
                                    </a>
                                </li>
                                <li className="text-white">
                                    <a
                                        className={target == "assets" ? "bg-gradient-to-r from-teal-200 via-cyan-300 via-purple-200 to-pink-400 text-transparent bg-clip-text " : ""}
                                        href='/assets'
                                    >
                                        Assets
                                    </a>
                                </li>
                                <li className="text-white">
                                    <Link href="/">
                                        Referal Program
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div>
                        <div
                            className={`absolute right-6 md:relative`} style={{ top: `${navbar ? '' : '6px'}` }}
                        >
                            <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white">
                                    <Hide below='md'>
                                        <ConnectWallet updateBalance={updateBalance}></ConnectWallet>
                                    </Hide>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
}
