import React from 'react'

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-t-transparent border-yellow-400 border-solid rounded-full animate-bounce"></div>
            </div>
        </div>
    )
}
