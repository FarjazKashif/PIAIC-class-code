"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from "../../components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../components/ui/sheet"
import { Mail, Menu } from 'lucide-react'


const navbar = () => {
    let btnStyle = {
        border: "1px solid black",
        padding: "10px"
    }

    return (
        <header>
            <nav>
                <div className='flex px-10 py-5 justify-between border-b-2 items-center'>
                    <div className="logo">
                        <span className='font-bold text-2xl text-yellow-500'>My Web</span>
                    </div>
                    <ul className='gap-3 sm:flex hidden'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/api'}>Api</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className='sm:hidden block cursor-pointer'><Menu /></Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Edit profile</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </SheetDescription>
                            </SheetHeader>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit">Save changes</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                    <div>
                        <Button>
                            <Mail className='mr-3' />
                            Login with Email
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default navbar