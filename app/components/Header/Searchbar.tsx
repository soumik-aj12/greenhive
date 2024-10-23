"use client"
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Searchbar = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const toggleSearch = () => {
        if (isSearchVisible) {
            setIsAnimating(false)
            setTimeout(() => setIsSearchVisible(false), 300)
        } else {
            setIsSearchVisible(true)
            setIsAnimating(true)
        }
    }

    useEffect(() => {
        if (isSearchVisible) {
            const timer = setTimeout(() => setIsAnimating(true), 50)
            return () => clearTimeout(timer)
        }
    }, [isSearchVisible])
    return (
        <div className='relative'>
            <Search className="md:hidden cursor-pointer" onClick={toggleSearch} />
            {isSearchVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-in fade-in slide-in-from-top-2">
                    <div className={`bg-white p-4 rounded-lg shadow-lg w-full max-w-md mx-4 transition-all duration-300 ease-in-out
                                     ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <div className="relative">
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full pr-10"
                                autoFocus
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                        <button 
                            onClick={toggleSearch}
                            className="mt-2 ml-2 text-sm text-gray-600 hover:text-gray-800"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Searchbar